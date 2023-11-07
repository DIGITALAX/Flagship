import { FetchResult } from "@apollo/client";
import { ApprovedModuleAllowanceAmountDocument, ApprovedModuleAllowanceAmountQuery, ApprovedModuleAllowanceAmountRequest } from "../../types/generated";
import { apolloClient } from "../../lib/lens/client";

const approvedModuleAllowance = async (
  request: ApprovedModuleAllowanceAmountRequest
): Promise<FetchResult<ApprovedModuleAllowanceAmountQuery>> => {
  return await apolloClient.query({
    query: ApprovedModuleAllowanceAmountDocument,
    variables: {
      request,
    },
    fetchPolicy: "network-only",
  });
};

export default approvedModuleAllowance;
