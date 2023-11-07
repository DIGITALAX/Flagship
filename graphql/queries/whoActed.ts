import { FetchResult } from "@apollo/client";
import {
  WhoActedOnPublicationDocument,
  WhoActedOnPublicationQuery,
  WhoActedOnPublicationRequest,
} from "../../types/generated";
import { authClient } from "../../lib/lens/client";

export const whoActed = async (
  request: WhoActedOnPublicationRequest
): Promise<FetchResult<WhoActedOnPublicationQuery>> => {
  return await authClient.query({
    query: WhoActedOnPublicationDocument,
    variables: {
      request: request,
    },
    fetchPolicy: "no-cache",
  });
};
