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
  }, [reactionsFeed]);

  const fetchReactions = async (pubId: string): Promise<any> => {
    try {
      const reactions = await whoReactedublications({
        publicationId: pubId,
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

  const checkPostReactions = async (arr: any[]): Promise<any> => {
    let reactionsFeedArr: any[] = [];
    try {
      for (let pub = 0; pub < arr?.length; pub++) {
        const reactions = await fetchReactions(arr[pub]?.id);
        reactionsFeedArr.push(reactions.length);
      }
      return { reactionsFeedArr };
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const getFeedData = async (): Promise<any> => {
    try {
      const response = await feedTimeline({
        profileId: "0x016305",
        publicationTypes: ["POST", "COMMENT", "MIRROR"],
        limit: 30,
      });
      const arr: any[] = [...response?.data.publications.items];
      const sortedArr: any[] = arr.sort(
        (a: any, b: any) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
      );
      const reactionsResponse = await checkPostReactions(sortedArr);
      setReactionsFeed(reactionsResponse?.reactionsFeedArr);
      setPublicationsFeed(sortedArr);
      setPageInfo(response?.data.publications.pageInfo);

      return sortedArr;
    } catch (err: any) {
      console.error(err.message);
    }
  };

  console.log(publicationsFeed.length);

  const getMoreFeed = async (): Promise<any> => {
    try {
      const morePublications = await feedTimeline({
        profileId: "0x016305",
        publicationTypes: ["POST", "COMMENT", "MIRROR"],
        limit: 30,
        cursor: pageInfo?.next,
      });

      const arr = [...morePublications?.data.publications.items];
      const sortedArr = arr.sort(
        (a: any, b: any) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
      );
      const reactionsResponse = await checkPostReactions(sortedArr);
      setReactionsFeed([
        ...reactionsFeed,
        ...reactionsResponse?.reactionsFeedArr,
      ]);
      setPublicationsFeed([...publicationsFeed, ...sortedArr]);
      setPageInfo(morePublications?.data.publications.pageInfo);
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
