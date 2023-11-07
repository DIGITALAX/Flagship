import { FetchResult } from "@apollo/client";
import {
  DefaultProfileDocument,
  DefaultProfileQuery,
  DefaultProfileRequest,
} from "../../types/generated";
import { authClient } from "../../lib/lens/client";

const getDefaultProfile = async (
  request: DefaultProfileRequest
): Promise<FetchResult<DefaultProfileQuery>> => {
  return await authClient.query({
    query: DefaultProfileDocument,
    variables: {
      request,
    },
    fetchPolicy: "no-cache",
  });
};

export default getDefaultProfile;
