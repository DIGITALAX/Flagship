import { FetchResult } from "@apollo/client";
import {
  ProfileDocument,
  ProfileQuery,
  ProfileRequest,
} from "../../types/generated";
import { apolloClient, authClient } from "../../lib/lens/client";

export const getOneProfile = async (
  request: ProfileRequest
): Promise<FetchResult<ProfileQuery>> => {
  return await authClient.query({
    query: ProfileDocument,
    variables: {
      request,
    },
    fetchPolicy: "no-cache",
  });
};

export const getOneProfileAuth = async (
  request: ProfileRequest
): Promise<FetchResult<ProfileQuery>> => {
  return await apolloClient.query({
    query: ProfileDocument,
    variables: {
      request,
    },
    fetchPolicy: "no-cache",
  });
};
