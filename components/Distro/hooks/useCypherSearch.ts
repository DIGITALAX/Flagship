import { useEffect, useState } from "react";
import {
  Award,
  Creation,
  FilterValues,
  Publication,
  Quest,
} from "../types/distro.types";
import { getAllCollections } from "@/graphql/subgraph/queries/collections";
import mixArrays from "@/lib/lens/helpers/mixArrays";
import { numberToItemTypeMap } from "@/lib/constants";
import fetchIPFSJSON from "@/lib/lens/helpers/fetchIPFSJson";
import handleCollectionProfilesAndPublications from "@/lib/lens/helpers/handleCollectionProfilesAndPublications";
import handleQuestData from "@/lib/lens/helpers/handleQuestData";
import handleAwardsData from "@/lib/lens/helpers/handleAwardsData";
import { getAllRewards } from "@/graphql/subgraph/queries/awards";
import { getQuests } from "@/graphql/subgraph/queries/quests";

const useSearch = () => {
  const [filterConstants, setFilterConstants] = useState<FilterValues>();
  const [searchItems, setSearchItems] = useState<Publication[]>([]);
  const [searchLoading, setSearchLoading] = useState<boolean>(false);

  const handleSearch = async () => {
    setSearchLoading(true);

    let collections: Creation[] | undefined = [],
      quests: Quest[] | undefined = [],
      awards: Award[] | undefined = [];

    try {
      const collData = await getAllCollections(50, 0);
      collections = await handleCollectionProfilesAndPublications(
        collData?.data?.collectionCreateds
      );
      const kinoraItems = await getQuests(50, 0);
      quests = await handleQuestData(kinoraItems?.data?.questInstantiateds);
      const data = await getAllRewards(50, 0);
      awards = await handleAwardsData(data?.data?.rewards);

      const allItems = [
        collections?.map((item) => ({
          post: item,
          type: numberToItemTypeMap[Number(item.origin)],
        })) || [],
        quests?.map((item) => ({
          post: item,
          type: "Kinora",
        })) || [],
        awards?.map((item) => ({
          post: item,
          type: "Award",
        })) || [],
      ] as Publication[][];

      setSearchItems(
        mixArrays(allItems).map((item, index) => ({
          ...item,
          id: index,
        }))
      );
    } catch (err: any) {
      console.error(err.message);
    }
    setSearchLoading(false);
  };

  const handleFilterConstants = async () => {
    try {
      const json: FilterValues = (await fetchIPFSJSON(
        "QmX7bVukD1ZYxsV8i4UE5EygvczT1FfD1nDPZpHkyXEBFK"
      )) as any;

      setFilterConstants(json);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    if (!filterConstants && searchItems?.length < 1) {
      handleSearch();
      handleFilterConstants();
    }
  }, []);

  return {
    searchItems,
    filterConstants,
    searchLoading,
  };
};

export default useSearch;
