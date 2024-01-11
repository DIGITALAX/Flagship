import { apolloClient } from "@/lib/lens/client";
import { ApprovedModuleAllowanceAmountDocument, ApprovedModuleAllowanceAmountQuery, ApprovedModuleAllowanceAmountRequest } from "@/types/generated";
import { FetchResult } from "@apollo/client";


const isApprovedData = async (
  request: ApprovedModuleAllowanceAmountRequest
): Promise<FetchResult<ApprovedModuleAllowanceAmountQuery>> => {
  return await apolloClient.query({
    query: ApprovedModuleAllowanceAmountDocument,
    variables: {
      request,
    },
  });
};

export default isApprovedData;
