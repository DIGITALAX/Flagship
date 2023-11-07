import { FetchResult } from "@apollo/client";
import { CreateOnchainMirrorTypedDataDocument, CreateOnchainMirrorTypedDataMutation, OnchainMirrorRequest } from "../../types/generated";
import { apolloClient } from "../../lib/lens/client";
export const mirror = async (
  request: OnchainMirrorRequest
): Promise<FetchResult<CreateOnchainMirrorTypedDataMutation>> => {
  return await apolloClient.mutate({
    mutation: CreateOnchainMirrorTypedDataDocument,
    variables: {
      request,
    },
  });
};
