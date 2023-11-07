import { FetchResult } from "@apollo/client";
import {
  EnabledCurrenciesDocument,
  EnabledCurrenciesQuery,
  PaginatedOffsetRequest,
} from "../../types/generated";
import { apolloClient } from "../../lib/lens/client";

const getEnabledCurrencies = async (
  request: PaginatedOffsetRequest
): Promise<FetchResult<EnabledCurrenciesQuery>> => {
  return await apolloClient.query({
    query: EnabledCurrenciesDocument,
    variables: {
      request,
    },
    fetchPolicy: "no-cache",
  });
};

export default getEnabledCurrencies;
