import { FetchResult } from "@apollo/client";
import {
  ProfileSearchRequest,
  SearchProfilesDocument,
  SearchProfilesQuery,
} from "../../types/generated";
import { authClient } from "../../lib/lens/client";

export const searchProfile = async (
  request: ProfileSearchRequest
): Promise<FetchResult<SearchProfilesQuery>> => {
  return await authClient.query({
    query: SearchProfilesDocument,
    variables: {
      request: request,
    },
    fetchPolicy: "no-cache",
  });
};
