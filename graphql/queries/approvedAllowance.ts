import { gql } from "@apollo/client";
import { apolloClient } from "../../lib/lens/client";

const APPROVED_ALLOWANCE = `query ApprovedModuleAllowanceAmount($request: ApprovedModuleAllowanceAmountRequest!) {
    approvedModuleAllowanceAmount(request: $request) {
      currency
      module
      contractAddress
      allowance
    }
  }`;

const approvedModuleAllowance = (request: any) => {
  return apolloClient.query({
    query: gql(APPROVED_ALLOWANCE),
    variables: {
      request: request,
    },
    fetchPolicy: "network-only",
  });
};

export default approvedModuleAllowance;
