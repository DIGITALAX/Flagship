import { gql } from "@apollo/client";
import { apolloClient } from "../../lib/lens/client";

const ENABLED_MODULE_CURRENCIES = `
query EnabledModuleCurrencies {
    enabledModuleCurrencies {
      name
      symbol
      decimals
      address
    }
  }
`;

const getEnabledCurrencies = () => {
  try {
    return apolloClient.query({
      query: gql(ENABLED_MODULE_CURRENCIES),
      fetchPolicy: "no-cache",
    });
  } catch (err: any) {
    console.error(err.message);
  }
};

export default getEnabledCurrencies;
