import { createPublicClient, createWalletClient, custom, http } from "viem";
import { polygon } from "viem/chains";
import { omit } from "lodash";
import { splitSignature } from "ethers/lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import { RootState } from "../../../redux/store";
import {
  getOneProfile,
  getOneProfileAuth,
} from "../../../graphql/queries/getProfile";
import { getFollowingAuth } from "../../../graphql/queries/getFollowing";
import pollUntilIndexed from "../../../graphql/queries/checkIndexed";
import { ApprovedAllowanceAmount, Profile } from "../../../types/lens.types";
import checkApproved from "../../../lib/lens/helpers/checkApproved";
import createFollowTypedData from "../../../graphql/mutations/follow";
import createFollowModule from "../../../lib/lens/helpers/createFollowModules";
import broadcast from "../../../graphql/mutations/broadcast";
import handleIndexCheck from "../../../lib/lens/helpers/handleIndexCheck";
import { setModalOpen } from "../../../redux/reducers/modalOpenSlice";
import { setIndexModal } from "../../../redux/reducers/indexModalSlice";
import { setFollowerOnly } from "../../../redux/reducers/followerOnlySlice";
import getDefaultProfile from "../../../graphql/queries/getDefaultProfile";
import { setProfile } from "../../../redux/reducers/profileSlice";
import LensHubProxy from "./../../../abis/LensHubProxy.json";
import { LENS_HUB_PROXY_ADDRESS_MATIC } from "../../../lib/lens/constants";

const useFollowers = () => {
  const publicClient = createPublicClient({
    chain: polygon,
    transport: http(),
  });
  const dispatch = useDispatch();
  const { address } = useAccount();
  const [followerProfile, setFollowerProfile] = useState<Profile | undefined>();
  const [followLoading, setFollowLoading] = useState<boolean>(false);
  const followerId = useSelector(
    (state: RootState) => state.app.followerOnlyReducer
  );
  const approvalArgs = useSelector(
    (state: RootState) => state.app.approvalArgsReducer.args
  );
  const [approved, setApproved] = useState<boolean>(false);
  const profileId = useSelector(
    (state: RootState) => state.app.profileReducer.profile?.id
  );

  const getProfile = async (): Promise<void> => {
    try {
      let prof, follow;
      if (profileId) {
        prof = await getOneProfileAuth({
          profileId: followerId?.followerId,
        });
      } else {
        prof = await getOneProfile({
          profileId: followerId?.followerId,
        });
      }

      if (profileId) {
        follow = await getFollowingAuth(
          { profileId: profileId },
          prof?.data?.profile?.id
        );
      }
      setFollowerProfile({
        ...prof?.data?.profile,
        isFollowing: follow ? follow?.data?.profile?.isFollowing : false,
      });
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const approvedFollow = async (): Promise<void> => {
    const approvalData: ApprovedAllowanceAmount | void = await checkApproved(
      (followerProfile?.followModule as any)?.amount?.asset?.address,
      null,
      (followerProfile?.followModule as any)?.type,
      null,
      (followerProfile?.followModule as any)?.amount?.value,
      dispatch,
      address,
      profileId
    );
    const isApproved = parseInt(approvalData?.allowance as string, 16);
    setApproved(
      isApproved > (followerProfile?.followModule as any)?.amount?.value
        ? true
        : false
    );
  };

  const callApprovalSign = async (): Promise<void> => {
    try {
      const clientWallet = createWalletClient({
        chain: polygon,
        transport: custom((window as any).ethereum),
      });

      const res = await clientWallet.sendTransaction({
        to: approvalArgs?.to as `0x${string}`,
        account: approvalArgs?.from as `0x${string}`,
        value: BigInt(approvalArgs?.data as string),
      });
      await publicClient.waitForTransactionReceipt({ hash: res });
      await pollUntilIndexed(res as string, false);
      await approvedFollow();
    } catch (err: any) {
      setFollowLoading(false);
      console.error(err.message);
    }
  };

  const approveCurrency = async (): Promise<void> => {
    setFollowLoading(true);
    try {
      await callApprovalSign();
    } catch (err: any) {
      console.error(err.message);
    }
    setFollowLoading(false);
  };

  const followProfile = async (): Promise<void> => {
    if (!profileId) {
      return;
    }

    setFollowLoading(true);

    const followModule = createFollowModule(
      followerProfile?.followModule?.type as any,
      (followerProfile?.followModule as any)?.amount?.value,
      (followerProfile?.followModule as any)?.amount?.asset?.address,
      profileId
    );

    try {
      const response = await createFollowTypedData({
        follow: [
          {
            profile: followerProfile?.id,
            followModule,
          },
        ],
      });

      const typedData: any = response?.data?.createFollowTypedData?.typedData;

      const clientWallet = createWalletClient({
        chain: polygon,
        transport: custom((window as any).ethereum),
      });

      const signature: any = await clientWallet.signTypedData({
        domain: omit(typedData?.domain, ["__typename"]),
        types: omit(typedData?.types, ["__typename"]),
        primaryType: "FollowWithSig",
        message: omit(typedData?.value, ["__typename"]),
        account: address as `0x${string}`,
      });

      const broadcastResult: any = await broadcast({
        id: response?.data?.createFollowTypedData?.id,
        signature,
      });

      if (broadcastResult?.data?.broadcast?.__typename !== "RelayerResult") {
        const { v, r, s } = splitSignature(signature);
        const { request } = await publicClient.simulateContract({
          address: LENS_HUB_PROXY_ADDRESS_MATIC,
          abi: LensHubProxy,
          functionName: "followWithSig",
          chain: polygon,
          args: [
            {
              follower: address as string,
              profileIds: typedData?.value?.profileIds,
              datas: typedData?.value?.datas,
              sig: {
                v,
                r,
                s,
                deadline: typedData?.value?.deadline,
              },
            },
          ],
          account: address,
        });
        const res = await clientWallet.writeContract(request);
        clearFollow();
        await publicClient.waitForTransactionReceipt({ hash: res });

        await handleIndexCheck(res, dispatch, false);
        await refetchProfile();
      } else {
        clearFollow();
        setFollowLoading(false);
        setTimeout(async () => {
          await handleIndexCheck(
            broadcastResult?.data?.broadcast?.txHash,
            dispatch,
            false
          );
          await refetchProfile();
        }, 7000);
      }
    } catch (err: any) {
      setFollowLoading(false);
      if (err.message.includes("You do not have enough")) {
        dispatch(
          setModalOpen({
            actionOpen: true,
            actionMessage: "Insufficient Balance to Follow.",
          })
        );
      } else {
        dispatch(setIndexModal("Unsuccessful. Please Try Again."));
      }
      console.error(err.message);
    }
  };

  const refetchProfile = async (): Promise<void> => {
    try {
      const profile = await getDefaultProfile(address);
      dispatch(setProfile(profile?.data?.defaultProfile));
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const clearFollow = () => {
    dispatch(
      setFollowerOnly({
        actionOpen: false,
        actionFollowerId: "",
        actionId: "",
        actionIndex: undefined,
      })
    );
    dispatch(
      setIndexModal({
        actionValue: true,
        actionMessage: "Indexing Interaction",
      })
    );
  };

  useEffect(() => {
    if (followerId.open) {
      getProfile();
      if (followerProfile?.followModule?.type === "FeeFollowModule") {
        approvedFollow();
      }
    }
  }, [followerId.open]);

  return {
    followerProfile,
    followProfile,
    followLoading,
    approved,
    approveCurrency,
  };
};

export default useFollowers;
