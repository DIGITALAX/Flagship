import { FetchResult } from "@apollo/client";
import {
  PublicationDocument,
  PublicationQuery,
  PublicationRequest,
} from "../../../lib/generated";
import { authClient } from "../../../lib/lens/client";

export const getPublication = async (
  request: PublicationRequest
): Promise<FetchResult<PublicationQuery>> => {
  return await authClient.query({
    query: PublicationDocument,
    variables: {
      request,
    },
    fetchPolicy: "no-cache",
  });
};
