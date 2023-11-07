import { FetchResult } from "@apollo/client";
import { CreateOnchainQuoteTypedDataDocument, CreateOnchainQuoteTypedDataMutation, OnchainQuoteRequest } from "../../types/generated";
import { apolloClient } from "../../lib/lens/client";

export const createQuoteTypedData = async (
  request: OnchainQuoteRequest
): Promise<FetchResult<CreateOnchainQuoteTypedDataMutation>> => {
  return await apolloClient.mutate({
    mutation: CreateOnchainQuoteTypedDataDocument,
    variables: {
      request,
    },
  });
};
