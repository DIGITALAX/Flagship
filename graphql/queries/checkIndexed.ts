import { gql } from "@apollo/client";
import { apolloClient } from "../../lib/lens/client";

const INDEXED = `
query HasTxHashBeenIndexed($request: HasTxHashBeenIndexedRequest!) {
    hasTxHashBeenIndexed(request: $request) {
      ... on TransactionIndexedResult {
        indexed
        txReceipt {
          to
          from
          contractAddress
          transactionIndex
          root
          gasUsed
          logsBloom
          blockHash
          transactionHash
          blockNumber
          confirmations
          cumulativeGasUsed
          effectiveGasPrice
          byzantium
          type
          status
          logs {
            blockNumber
            blockHash
            transactionIndex
            removed
            address
            data
            topics
            transactionHash
            logIndex
          }
        }
        metadataStatus {
          status
          reason
        }
      }
      ... on TransactionError {
        reason
        txReceipt {
          to
          from
          contractAddress
          transactionIndex
          root
          gasUsed
          logsBloom
          blockHash
          transactionHash
          blockNumber
          confirmations
          cumulativeGasUsed
          effectiveGasPrice
          byzantium
          type
          status
          logs {
            blockNumber
            blockHash
            transactionIndex
            removed
            address
            data
            topics
            transactionHash
            logIndex
          }
        }
      },
      __typename
    }
  }
`;

export const checkIndexed = (txHash?: string) => {
  return apolloClient.query({
    query: gql(INDEXED),
    variables: {
      request: {
        txHash,
      },
    },
    fetchPolicy: "network-only",
  });
};

const pollUntilIndexed = async (txHash: string, success: boolean) => {
  let count = 0;
  while (true) {
    try {
      const response: any = await checkIndexed(txHash);
      if (
        response?.data?.hasTxHashBeenIndexed?.__typename ===
        "TransactionIndexedResult"
      ) {
        if (
          (response?.data?.hasTxHashBeenIndexed?.metadataStatus?.status ===
            "SUCCESS" &&
            success) ||
          (response?.data?.hasTxHashBeenIndexed?.indexed && !success)
        ) {
          return true;
        } else {
          if (response?.data?.hasTxHashBeenIndexed?.indexed === false) {
            if (count == 2) {
              return false;
            }
          }
        }
      }
      count += 1;
      await new Promise((resolve) => setTimeout(resolve, 6000));
    } catch (err: any) {
      console.error(err.message);
    }
  }
};

export default pollUntilIndexed;
