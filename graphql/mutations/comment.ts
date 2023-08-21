import { gql } from "@apollo/client";
import { apolloClient } from "../../lib/lens/client";

export const COMMENT_POST = `mutation CreateCommentTypedData($request: CreatePublicCommentRequest!) {
  createCommentTypedData(request: $request) {
    id
    expiresAt
    typedData {
      types {
        CommentWithSig {
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
        profileIdPointed
        pubIdPointed
        contentURI
        referenceModuleData
        collectModule
        collectModuleInitData
        referenceModule
        referenceModuleInitData
      }
    }
  }
}`;

export const DISPATCHER_COMMENT = `mutation CreateCommentViaDispatcher($request: CreatePublicCommentRequest!) {
  createCommentViaDispatcher(request: $request) {
    ... on RelayerResult {
      txHash
      txId
    }
    ... on RelayError {
      reason
    }
  }
}`;

export const createCommentTypedData = (CreateCommentTypedData: any) => {
  return apolloClient.mutate({
    mutation: gql(COMMENT_POST),
    variables: {
      request: CreateCommentTypedData,
    },
  });
};

export const createDispatcherCommentData = (
  CreatePublicCommentRequest: any
) => {
  return apolloClient.mutate({
    mutation: gql(DISPATCHER_COMMENT),
    variables: {
      request: CreatePublicCommentRequest,
    },
  });
};
