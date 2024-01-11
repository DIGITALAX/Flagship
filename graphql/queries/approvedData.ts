import { apolloClient } from "@/lib/lens/client";
import {
  GenerateModuleCurrencyApprovalDataDocument,
  GenerateModuleCurrencyApprovalDataQuery,
  GenerateModuleCurrencyApprovalDataRequest,
} from "@/types/generated";
import { FetchResult } from "@apollo/client";

const approveCurrency = async (
  request: GenerateModuleCurrencyApprovalDataRequest
): Promise<FetchResult<GenerateModuleCurrencyApprovalDataQuery>> => {
  return await apolloClient.mutate({
    mutation: GenerateModuleCurrencyApprovalDataDocument,
    variables: {
      request,
    },
  });
};

export default approveCurrency;
