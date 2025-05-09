import fetchIPFSJSON from "@/app/lib/helpers/fetchIPFSJson";
import { useContext, useEffect, useState } from "react";
import { Award, FilterValues, Publication, Quest } from "../types/distro.types";
import { numberToItemTypeMap } from "@/app/lib/constants";
import mixArrays from "@/app/lib/helpers/mixArrays";
import { getAllCollections } from "../../../../../graphql/queries/getGallery";
import handleCollectionProfilesAndPublications from "@/app/lib/helpers/handleCollectionProfilesAndPublications";
import { ModalContext } from "@/app/providers";
import { Creation } from "../../Gallery/types/gallery.types";

const useCypherSearch = () => {
  const context = useContext(ModalContext);
  const [filterConstants, setFilterConstants] = useState<FilterValues>();
  const [searchItems, setSearchItems] = useState<Publication[]>([]);
  const [searchLoading, setSearchLoading] = useState<boolean>(false);

  const handleSearch = async () => {
    if (!context?.lensClient) return;
    setSearchLoading(true);

    let collections: Creation[] | undefined = [],
      quests: Quest[] | undefined = [],
      awards: Award[] | undefined = [];

    try {
      const collData = await getAllCollections(50, 250);
      collections = await handleCollectionProfilesAndPublications(
        collData?.data?.collectionCreateds,
        context?.lensClient!
      );
      // const kinoraItems = await getQuests(50, 0);
      // quests = await handleQuestData(
      //   kinoraItems?.data?.questInstantiateds,
      //   context?.lensClient!
      // );
      // const data = await getAllRewards(50, 0);
      // awards = await handleAwardsData(data?.data?.rewards);

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
  }, [context?.lensClient]);

  return {
    searchItems,
    filterConstants,
    searchLoading,
  };
};

export default useCypherSearch;
