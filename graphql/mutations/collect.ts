import { gql } from "@apollo/client";
import { apolloClient } from "../../lib/lens/client";

export const COLLECT_POST = `mutation CreateCollectTypedData($request: CreateCollectRequest!) {
    createCollectTypedData(request: $request) {
      id
      expiresAt
      typedData {
        types {
          CollectWithSig {
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
          pubId
          data
        }
      }
    }
  }`;

const collect = (createCollectTypedData: any) => {
  return apolloClient.mutate({
    mutation: gql(COLLECT_POST),
    variables: {
      request: createCollectTypedData,
    },
  });
};

export default collect;
