import { apolloClient } from "../../lib/lens/client";
import {
  BroadcastOnchainDocument,
  BroadcastOnchainMutation,
  BroadcastRequest,
} from "../../types/generated";
import { FetchResult } from "@apollo/client";

const broadcast = async (
  request: BroadcastRequest
): Promise<FetchResult<BroadcastOnchainMutation>> => {
  return await apolloClient.mutate({
    mutation: BroadcastOnchainDocument,
    variables: {
      request,
    },
  });
};

export default broadcast;
