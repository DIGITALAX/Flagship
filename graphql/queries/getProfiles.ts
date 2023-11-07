import { FetchResult } from "@apollo/client";
import { authClient } from "../../lib/lens/client";
import {
  ProfilesDocument,
  ProfilesQuery,
  ProfilesRequest,
} from "../../types/generated";

const getProfiles = async (
  request: ProfilesRequest
): Promise<FetchResult<ProfilesQuery>> => {
  return await authClient.query({
    query: ProfilesDocument,
    variables: {
      request,
    },
    fetchPolicy: "no-cache",
  });
};

export default getProfiles;
