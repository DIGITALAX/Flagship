import { Quest } from "@/app/componentes/Distro/types/distro.types";
import fetchIPFSJSON from "./fetchIPFSJson";
import { fetchPost } from "@lens-protocol/client/actions";
import { PublicClient } from "@lens-protocol/client";

const handleQuestData = async (
  quests: Quest[],
  lensClient: PublicClient,
  all?: boolean,
  skipPub?: boolean
): Promise<Quest[]> => {
  const promises = (quests || [])?.map(async (item: any) => {
    let publication;
    if (!skipPub) {
      // publication = await fetchPost(lensClient, {
      //   post: `${toHexWithLeadingZero(
      //     Number(item?.profileId)
      //   )}-${toHexWithLeadingZero(Number(item?.pubId))}`,
      // });
    }
    // if (!publication?.isOk()) {
    //   return;
    // }
    if (!item?.questMetadata) {
      let data = await fetchIPFSJSON(item?.uri);
      item = {
        ...item,
        questMetadata: data,
      };
    }

    if (all) {
      const milestonePromises = item?.milestones?.map(async (mil: any) => {
        if (!mil?.milestoneMetadata) {
          let data = await fetchIPFSJSON(mil?.uri);
          mil = {
            ...mil,
            milestoneMetadata: data,
          };
        }

        const rewardPromises = mil?.rewards?.map(async (reward: any) => {
          if (reward.type == "1") {
            if (!reward?.rewardMetadata) {
              const fetched = await fetchIPFSJSON(reward?.uri);
              return {
                ...reward,
                rewardMetadata: fetched,
              };
            } else {
              return reward;
            }
          } else {
            return reward;
          }
        });

        return {
          ...mil,
          rewards: await Promise.all(rewardPromises),
        };
      });

      return (item = {
        ...item,
        milestones: await Promise.all(milestonePromises),
        // publication: publication?.value,
      });
    }

    return {
      ...item,
      // publication: publication?.value,
    };
  });

  return await Promise.all(promises);
};

export default handleQuestData;
