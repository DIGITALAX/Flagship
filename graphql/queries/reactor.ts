import { FetchResult } from "@apollo/client";
import { authClient } from "../../lib/lens/client";
import {
  WhoReactedPublicationDocument,
  WhoReactedPublicationQuery,
  WhoReactedPublicationRequest,
} from "../../types/generated";

export const whoReacted = async (
  request: WhoReactedPublicationRequest
): Promise<FetchResult<WhoReactedPublicationQuery>> => {
  return await authClient.query({
    query: WhoReactedPublicationDocument,
    variables: {
      request: request,
    },
    fetchPolicy: "no-cache",
  });
};
