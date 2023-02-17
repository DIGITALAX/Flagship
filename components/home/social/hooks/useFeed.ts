import { useEffect, useState } from "react";
import { feedTimeline } from "../../../../graphql/queries/explorePublications";
import { useFeedResults } from "../../../../types/general.types";
import { useMediaQuery } from "@material-ui/core";
import lodash from "lodash";
import whoReactedublications from "../../../../graphql/queries/whoReactedPublications";

const useFeed = (): useFeedResults => {
  const [publicationsFeed, setPublicationsFeed] = useState<any[]>([]);
  const [pageInfo, setPageInfo] = useState<any>([]);
  const [reactionsFeed, setReactionsFeed] = useState<any[]>([]);
  let queryWindowSize: boolean = useMediaQuery("(max-width:1024px)");
  let queryWindowSizeMobile: boolean = useMediaQuery("(max-width:950px)");
  let queryWindowSizeXL: boolean = useMediaQuery("(max-width:1600px)");

  useEffect(() => {
    getFeedData();
  }, []);

  const fetchReactions = async (pubId: string): Promise<any> => {
    try {
      const reactions = await whoReactedublications({
        publicationId: pubId,
        limit: 50,
      });
      const upvoteArr = lodash.filter(
        reactions?.data?.whoReactedPublication.items,
        (item: any) => item.reaction === "UPVOTE"
      );
      return upvoteArr;
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const fetchMoreReactions = async (pubId: string, page: any): Promise<any> => {
    try {
      const reactions = await whoReactedublications({
        publicationId: pubId,
        limit: 50,
        cursor: page?.next,
      });
      const reactionsValues = lodash.filter(
        reactions?.data?.whoReactedPublication.items,
        (item: any) => item.reaction === "UPVOTE"
      );
      return {
        reactionsValues,
        paginatedData: reactions?.data?.whoReactedPublication?.pageInfo,
      };
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const checkPostReactions = async (arr: any[]): Promise<any> => {
    let reactionsFeedArr: any[] = [];
    try {
      for (let pub = 0; pub < arr?.length; pub++) {
        let reactions;
        reactions = await fetchReactions(arr[pub]?.id);
        let reactionsArray: any[] = reactions;
        let loopReactionsArray: any[] = reactions;
        let pageData: any = reactions?.data?.whoReactedPublication?.pageInfo;
        while (loopReactionsArray.length === 50) {
          const { reactionsValues, paginatedData } = await fetchMoreReactions(
            arr[pub]?.id,
            pageData
          );
          loopReactionsArray = reactionsValues;
          pageData = paginatedData;
          reactionsArray = [...reactionsArray, ...reactionsValues];
        }
        reactionsFeedArr.push(reactionsArray.length);
      }
      setReactionsFeed([...reactionsFeed, ...reactionsFeedArr]);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const getFeedData = async (): Promise<any> => {
    try {
      const response = await feedTimeline({
        profileId: "0x016305",
        publicationTypes: ["POST", "COMMENT", "MIRROR"],
        limit: 5,
      });
      const arr: any[] = [...response?.data.publications.items];
      const sortedArr: any[] = arr.sort(
        (a: any, b: any) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
      );
      setPublicationsFeed(sortedArr);
      setPageInfo(response?.data.publications.pageInfo);
      await checkPostReactions(sortedArr);
      return sortedArr;
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const getMoreFeed = async (): Promise<any> => {
    try {
      const morePublications = await feedTimeline({
        profileId: "0x016305",
        publicationTypes: ["POST", "COMMENT", "MIRROR"],
        limit: 5,
        cursor: pageInfo?.next,
      });
      const arr = [...morePublications?.data.publications.items];
      const sortedArr = arr.sort(
        (a: any, b: any) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
      );
      setPublicationsFeed([...publicationsFeed, ...sortedArr]);
      setPageInfo(morePublications?.data.publications.pageInfo);
      await checkPostReactions(sortedArr);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return {
    publicationsFeed,
    getMoreFeed,
    queryWindowSize,
    queryWindowSizeMobile,
    queryWindowSizeXL,
    reactionsFeed,
  };
};

export default useFeed;
