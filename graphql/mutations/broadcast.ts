import { gql } from "@apollo/client";
import { apolloClient } from "../../lib/lens/client";

export const BROADCAST = `mutation Broadcast($request: BroadcastRequest!) {
    broadcast(request: $request) {
        ... on RelayerResult {
            txHash
    txId
        }
        ... on RelayError {
            reason
        }
    }
}`;

const broadcast = (createBroadcast: any) => {
  return apolloClient.mutate({
    mutation: gql(BROADCAST),
    variables: {
      request: createBroadcast,
    },
  });
};

export default broadcast;
