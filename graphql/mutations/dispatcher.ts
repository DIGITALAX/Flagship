import { gql } from "@apollo/client";
import { apolloClient } from "../../lib/lens/client";

export const DISPATCHER = `mutation CreateSetDispatcherTypedData($request: SetDispatcherRequest!) {
    createSetDispatcherTypedData(request: $request) {
      id
      expiresAt
      typedData {
        types {
          SetDispatcherWithSig {
            name
            type
          }
        }
        domain {
          name
          chainId
          version
          verifyingContract
        }
        value {
          nonce
          deadline
          profileId
          dispatcher
        }
      }
    }
  }`;

const createDispatcherRequest = (CreateDispatcherRequest: any) => {
  return apolloClient.mutate({
    mutation: gql(DISPATCHER),
    variables: {
      request: CreateDispatcherRequest,
    },
  });
};

export default createDispatcherRequest;
