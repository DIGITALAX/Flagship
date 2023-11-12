import { useEffect, useState } from "react";
import {
  PublicClient,
  createWalletClient,
  custom,
} from "viem";
import { polygon } from "viem/chains";
import { FetchResult } from "@apollo/client";
import {
  ApprovalAllowance,
  Profile,
  ProfileQuery,
} from "../../../types/generated";
import {
  getOneProfile,
  getOneProfileAuth,
} from "../../../graphql/queries/getProfile";
import checkApproved from "../../../lib/lens/helpers/checkApproved";
import createFollowModule from "../../../lib/lens/helpers/createFollowModules";
import followSig from "../../../lib/lens/helpers/followSig";
import { setIndexModal } from "../../../redux/reducers/indexModalSlice";
import { setModalOpen } from "../../../redux/reducers/modalOpenSlice";
import getDefaultProfile from "../../../graphql/queries/getDefaultProfile";
import { FollowerOnlyState, setFollowerOnly } from "../../../redux/reducers/followerOnlySlice";
import handleIndexCheck from "../../../lib/lens/helpers/handleIndexCheck";
import { Dispatch, AnyAction } from "redux";
import { ApprovalArgs } from "../../../types/general.types";

const useFollowers = (
  publicClient: PublicClient,
  dispatch: Dispatch<AnyAction>,
  address: `0x${string}` | undefined,
  approvalArgs: ApprovalArgs | undefined,
  lensProfile: Profile | undefined,
  followerId: FollowerOnlyState
) => {
  const [profile, setProfile] = useState<Profile | undefined>();
  const [followLoading, setFollowLoading] = useState<boolean>(false);
  const [approved, setApproved] = useState<boolean>(false);

  const getProfile = async (): Promise<void> => {
    try {
      let prof: FetchResult<ProfileQuery>;
      if (lensProfile?.id) {
        prof = await getOneProfileAuth({
          forProfileId: followerId?.followerId,
        });
      } else {
        prof = await getOneProfile({
          forProfileId: followerId?.followerId,
        });
      }

      setProfile(prof?.data?.profile as Profile);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const approvedFollow = async (): Promise<void> => {
    const approvalData: ApprovalAllowance | void = await checkApproved(
      (profile?.followModule as any)?.amount?.asset?.address,
      null,
      (profile?.followModule as any)?.type,
      null,
      (profile?.followModule as any)?.amount?.value,
      dispatch,
      address,
      lensProfile?.id
    );
    const isApproved = parseInt(approvalData?.allowance?.value as string, 16);
    setApproved(
      isApproved > (profile?.followModule as any)?.amount?.value ? true : false
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
      const tx = await publicClient.waitForTransactionReceipt({ hash: res });
      await handleIndexCheck(
        {
          forTxHash: tx.transactionHash,
        },
        dispatch
      );
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
    if (!lensProfile?.id) {
      return;
    }

    setFollowLoading(true);

    const followModule = createFollowModule(
      profile?.followModule?.type as any,
      (profile?.followModule as any)?.amount?.value,
      (profile?.followModule as any)?.amount?.asset?.address
    );

    try {
      const clientWallet = createWalletClient({
        chain: polygon,
        transport: custom((window as any).ethereum),
      });

      await followSig(
        [{ profileId: profile?.id, followModule }],
        clientWallet,
        publicClient,
        address as `0x${string}`,
        dispatch,
        clearFollow,
        refetchProfile,
        setFollowLoading
      );
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
      const profile = await getDefaultProfile({
        for: address,
      });
      setProfile(profile?.data?.defaultProfile as Profile);
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
      if (profile?.followModule?.type === "FeeFollowModule") {
        approvedFollow();
      }
    }
  }, [followerId.open]);

  return {
    profile,
    followProfile,
    followLoading,
    approved,
    approveCurrency,
  };
};

export default useFollowers;
