import { gql } from "@apollo/client";
import { apolloClient } from "../../lib/lens/client";

export const CREATE_POST_TYPED_DATA = `
  mutation($request: CreatePublicPostRequest!) { 
    createPostTypedData(request: $request) {
      id
      expiresAt
      typedData {
        types {
          PostWithSig {
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
        contentURI
        collectModule
        collectModuleInitData
        referenceModule
        referenceModuleInitData
      }
    }
   }
 }
`;

export const DISPATCHER_POST = `mutation CreatePostViaDispatcher($request: CreatePublicPostRequest!) {
  createPostViaDispatcher(
    request: $request
  ) {
    ... on RelayerResult {
      txHash
      txId
    }
    ... on RelayError {
      reason
    }
  }
}`;

export const createPostTypedData = (CreatePostRequest: any) => {
  return apolloClient.mutate({
    mutation: gql(CREATE_POST_TYPED_DATA),
    variables: {
      request: CreatePostRequest,
    },
  });
};

export const createDispatcherPostData = (CreatePublicPostRequest: any) => {
  return apolloClient.mutate({
    mutation: gql(DISPATCHER_POST),
    variables: {
      request: CreatePublicPostRequest,
    },
  });
};
