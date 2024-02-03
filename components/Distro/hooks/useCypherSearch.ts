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
  const [searchItems, setSearchItems] = useState<{
    items: Publication[];
    graphCursor?: number;
    kinoraCursor?: number;
    awardCursor?: number;
    hasMore: boolean;
  }>({
    items: [],
    hasMore: true,
  });
  const [loaders, setLoaders] = useState<{
    searchLoading: boolean;
    moreSearchLoading: boolean;
  }>({
    searchLoading: false,
    moreSearchLoading: false,
  });

  const handleSearch = async () => {
    setLoaders((prev) => ({
      ...prev,
      searchLoading: true,
    }));

    let collections: Creation[] | undefined = [],
      quests: Quest[] | undefined = [],
      awards: Award[] | undefined = [];

    try {
      const collData = await getAllCollections(10, 0);
      collections = await handleCollectionProfilesAndPublications(
        collData?.data?.collectionCreateds
      );
      const kinoraItems = await getQuests(10, 0);
      quests = await handleQuestData(kinoraItems?.data?.questInstantiateds);
      const data = await getAllRewards(10, 0);
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

      setSearchItems({
        items: mixArrays(allItems),
        graphCursor: collections?.length == 10 ? 10 : undefined,
        kinoraCursor: quests?.length == 10 ? 10 : undefined,
        awardCursor: awards?.length == 10 ? 10 : undefined,
        hasMore: true,
      });
    } catch (err: any) {
      console.error(err.message);
    }
    setLoaders((prev) => ({
      ...prev,
      searchLoading: false,
    }));
  };

  const handleMoreSearch = async () => {
    if (!searchItems?.hasMore) {
      return;
    }

    setLoaders((prev) => ({
      ...prev,
      moreSearchLoading: true,
    }));

    let collections: Creation[] | undefined = [],
      quests: Quest[] | undefined = [],
      awards: Award[] | undefined = [];

    try {
      if (searchItems?.graphCursor) {
        const collData = await getAllCollections(10, searchItems?.graphCursor);
        collections = await handleCollectionProfilesAndPublications(
          collData?.data?.collectionCreateds
        );
      }

      if (searchItems?.kinoraCursor) {
        const kinoraItems = await getQuests(10, searchItems?.kinoraCursor);

        quests = await handleQuestData(kinoraItems?.data?.questInstantiateds);
      }

      if (searchItems?.awardCursor) {
        const data = await getAllRewards(10, searchItems?.awardCursor);
        awards = await handleAwardsData(data?.data?.rewards);
      }

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

      setSearchItems({
        items: [...(searchItems?.items || []), ...mixArrays(allItems)],
        graphCursor:
          collections?.length == 10
            ? searchItems?.graphCursor! + 10
            : undefined,
        kinoraCursor:
          quests?.length == 10 ? searchItems?.kinoraCursor! + 10 : undefined,
        awardCursor:
          awards?.length == 10 ? searchItems?.awardCursor! + 10 : undefined,
        hasMore:
          collections?.length == 10 ||
          quests?.length == 10 ||
          awards?.length == 10
            ? true
            : false,
      });
    } catch (err: any) {
      console.error(err.message);
    }
    setLoaders((prev) => ({
      ...prev,
      moreSearchLoading: false,
    }));
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
    if (!filterConstants && searchItems.items?.length < 1) {
      handleSearch();
      handleFilterConstants();
    }
  }, []);

  return {
    handleMoreSearch,
    loaders,
    searchItems,
    filterConstants,
  };
};

export default useSearch;
