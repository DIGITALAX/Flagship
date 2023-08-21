import { gql } from "@apollo/client";
import { apolloClient } from "../../lib/lens/client";

export const FOLLOW_DATA = `
mutation CreateFollowTypedData($request: FollowRequest!) {
  createFollowTypedData(request: $request) {
    id
    expiresAt
    typedData {
      domain {
        name
        chainId
        version
        verifyingContract
      }
      types {
        FollowWithSig {
          name
          type
        }
      }
      value {
        nonce
        deadline
        profileIds
        datas
      }
    }
  }
}
`;

const createFollowTypedData = (CreateFollowRequest: any) => {
  return apolloClient.mutate({
    mutation: gql(FOLLOW_DATA),
    variables: {
      request: CreateFollowRequest,
    },
    fetchPolicy: "no-cache",
  });
};

export default createFollowTypedData;
