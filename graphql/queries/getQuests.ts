import { graphKinoraClient } from "@/app/lib/client";
import { KINORA_QUEST_DATA } from "@/app/lib/constants";
import { FetchResult, gql } from "@apollo/client";

export const getQuests = async (
  first: number,
  skip: number
): Promise<FetchResult | void> => {
  let timeoutId: NodeJS.Timeout | undefined;
  const queryPromise = graphKinoraClient.query({
    query: gql(`
      query($first: Int, $skip: Int, $contractAddress: String) {
        questInstantiateds(first: $first, skip: $skip, orderDirection: desc, orderBy: blockTimestamp, where: {contractAddress: $contractAddress}) {
            questMetadata {
              id
              title
              description
              cover
              videoCovers
            }
            milestones {
              uri
                milestoneMetadata {
                  title
                  description
                  cover
                }
              rewards {
                type
              }
              rewardsLength
              videoLength
            }
            maxPlayerCount
            questId
            pubId
            profileId
            uri
            milestoneCount
            players {
              profileId
          }
        }
      }
    `),
    variables: {
      first,
      skip,
      contractAddress: KINORA_QUEST_DATA,
    },
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  });

  const timeoutPromise = new Promise((resolve) => {
    timeoutId = setTimeout(() => {
      resolve({ timedOut: true });
    }, 60000);
    return () => clearTimeout(timeoutId);
  });

  const result: any = await Promise.race([queryPromise, timeoutPromise]);

  timeoutId && clearTimeout(timeoutId);
  if (result.timedOut) {
    return;
  } else {
    return result;
  }
};
