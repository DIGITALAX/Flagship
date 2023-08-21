import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAccount, useSignMessage } from "wagmi";
import { setAuthStatus } from "../../../redux/reducers/authStatusSlice";
import generateChallenge from "../../../graphql/queries/generateChallenge";
import authenticate from "../../../graphql/mutations/authenticate";
import getDefaultProfile from "../../../graphql/queries/getDefaultProfile";
import {
  getAddress,
  getAuthenticationToken,
  isAuthExpired,
  refreshAuth,
  removeAuthenticationToken,
  setAddress,
  setAuthenticationToken,
} from "../../../lib/lens/utils";
import { setNoHandle } from "../../../redux/reducers/noHandleSlice";
import { setProfile } from "../../../redux/reducers/profileSlice";
import { setWalletConnected } from "../../../redux/reducers/walletConnectedSlice";

const useSignIn = () => {
  const dispatch = useDispatch();
  const { address, isConnected } = useAccount();
  const [signInLoading, setSignInLoading] = useState<boolean>(false);

  const { signMessageAsync } = useSignMessage({
    onError() {
      dispatch(setAuthStatus(false));
    },
  });

  const handleLensSignIn = async (): Promise<void> => {
    setSignInLoading(true);
    try {
      const challengeResponse = await generateChallenge(address);
      const signature = await signMessageAsync({
        message: challengeResponse.data.challenge.text,
      });
      const accessTokens = await authenticate(
        address as string,
        signature as string
      );
      if (accessTokens) {
        setAuthenticationToken({ token: accessTokens.data.authenticate });
        setAddress(address as string);
        const profile = await getDefaultProfile(address?.toLowerCase());

        if (profile?.data?.defaultProfile) {
          dispatch(setProfile(profile?.data?.defaultProfile));
          dispatch(setAuthStatus(true));
        } else {
          dispatch(setNoHandle(true));
          dispatch(setAuthStatus(false));
        }
      }
    } catch (err: any) {
      console.error(err.message);
    }
    setSignInLoading(false);
  };

  const handleRefreshProfile = async (): Promise<void> => {
    try {
      const profile = await getDefaultProfile(address);
      if (profile?.data?.defaultProfile !== null) {
        dispatch(setProfile(profile?.data?.defaultProfile));
        dispatch(setAuthStatus(true));
      } else {
        removeAuthenticationToken();
        dispatch(setAuthStatus(false));
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    const handleAuthentication = async () => {
      dispatch(setWalletConnected(isConnected));
      const newAddress = getAddress();

      if (
        (newAddress && newAddress?.replace(/^"|"$/g, "") === address) ||
        (!newAddress && address)
      ) {
        const token = getAuthenticationToken();
        setAddress(address as string);
        if (isConnected && !token) {
          dispatch(setProfile(undefined));
          removeAuthenticationToken();
        } else if (isConnected && token) {
          if (isAuthExpired(token?.exp)) {
            const refreshedAccessToken = await refreshAuth(); // await the refreshAuth promise
            if (!refreshedAccessToken) {
              dispatch(setProfile(undefined));
              removeAuthenticationToken();
            }
          }
          await handleRefreshProfile();
        }
      } else if (isConnected && address !== newAddress) {
        dispatch(setProfile(undefined));
        removeAuthenticationToken();
      }
    };

    handleAuthentication();
  }, [isConnected]);

  return {
    handleLensSignIn,
    handleRefreshProfile,
    signInLoading,
  };
};

export default useSignIn;
