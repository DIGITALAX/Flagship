import { FetchResult } from "@apollo/client";
import {
  CreateOnchainCommentTypedDataDocument,
  CreateOnchainCommentTypedDataMutation,
  OnchainCommentRequest,
} from "../../types/generated";
import { apolloClient } from "../../lib/lens/client";

export const createCommentTypedData = async (
  request: OnchainCommentRequest
): Promise<FetchResult<CreateOnchainCommentTypedDataMutation>> => {
  return await apolloClient.mutate({
    mutation: CreateOnchainCommentTypedDataDocument,
    variables: {
      request,
    },
  });
};
