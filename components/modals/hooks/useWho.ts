import { useEffect, useState } from "react";
import lodash from "lodash";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import whoReactedublications from "../../../graphql/queries/whoReactedPublications";
import { whoMirroredPublications } from "../../../graphql/queries/whoMirroredPublications";
import whoCollectedPublications from "../../../graphql/queries/whoCollectedPublications";

const useWho = () => {
  const [reactInfoLoading, setReactInfoLoading] = useState<boolean>(false);
  const [reacters, setReacters] = useState<any[]>([]);
  const [reactionPageInfo, setReactionPageInfo] = useState<any>();
  const [mirrorers, setMirrorers] = useState<any[]>([]);
  const [mirrorInfoLoading, setMirrorInfoLoading] = useState<any>();
  const [mirrorPageInfo, setMirrorPageInfo] = useState<any>();
  const [collectors, setCollectors] = useState<any[]>([]);
  const [collectInfoLoading, setCollectInfoLoading] = useState<any>();
  const [collectPageInfo, setCollectPageInfo] = useState<any>();
  const [hasMoreReact, setHasMoreReact] = useState<boolean>(true);
  const [hasMoreMirror, setHasMoreMirror] = useState<boolean>(true);
  const [hasMoreCollect, setHasMoreCollect] = useState<boolean>(true);

  const pubId = useSelector(
    (state: RootState) => state.app.reactionStateReducer.value
  );
  const reaction = useSelector(
    (state: RootState) => state.app.reactionStateReducer
  );

  const getPostReactions = async (): Promise<void> => {
    setReactInfoLoading(true);
    try {
      const reactions = await whoReactedublications({
        publicationId: pubId,
        limit: 10,
      });
      const upvoteArr = lodash.filter(
        reactions?.data?.whoReactedPublication.items,
        (item) => item.reaction === "UPVOTE"
      );
      const arr: any[] = [...upvoteArr];
      const sortedArr: any[] = arr.sort(
        (a: any, b: any) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
      );
      if (sortedArr?.length < 10) {
        setHasMoreReact(false);
      } else {
        setHasMoreReact(true);
      }
      setReacters(sortedArr);
      setReactionPageInfo(reactions?.data?.whoReactedPublication?.pageInfo);
    } catch (err: any) {
      console.error(err.message);
    }
    setReactInfoLoading(false);
  };

  const getMorePostReactions = async (): Promise<void> => {
    try {
      if (!reactionPageInfo?.next) {
        // fix apollo duplications on null next
        setHasMoreReact(false);
        return;
      }
      const reactions = await whoReactedublications({
        publicationId: pubId,
        limit: 10,
        cursor: reactionPageInfo?.next,
      });
      const arr: any[] = [...reactions?.data?.whoReactedPublication?.items];
      const sortedArr: any[] = arr.sort(
        (a: any, b: any) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
      );
      if (sortedArr?.length < 10) {
        setHasMoreReact(false);
      } else {
        setHasMoreReact(true);
      }
      setReacters([...reacters, ...sortedArr]);
      setReactionPageInfo(reactions?.data.whoReactedPublication.pageInfo);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const getPostMirrors = async (): Promise<void> => {
    setMirrorInfoLoading(true);
    try {
      const mirrors = await whoMirroredPublications({
        whoMirroredPublicationId: pubId,
        limit: 10,
      });
      const arr: any[] = [...mirrors.data.profiles.items];
      const sortedArr: any[] = arr.sort(
        (a: any, b: any) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
      );
      if (sortedArr?.length < 10) {
        setHasMoreMirror(false);
      } else {
        setHasMoreMirror(true);
      }
      setMirrorers(sortedArr);
      setMirrorPageInfo(mirrors?.data.profiles.pageInfo);
    } catch (err: any) {
      console.error(err.message);
    }
    setMirrorInfoLoading(false);
  };

  const getMorePostMirrors = async (): Promise<void> => {
    try {
      if (!mirrorPageInfo?.next) {
        // fix apollo duplications on null next
        setHasMoreMirror(false);
        return;
      }
      const mirrors = await whoMirroredPublications({
        whoMirroredPublicationId: pubId,
        limit: 10,
        cursor: mirrorPageInfo?.next,
      });
      const arr: any[] = [...mirrors.data.profiles.items];
      const sortedArr: any[] = arr.sort(
        (a: any, b: any) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
      );
      if (sortedArr?.length < 10) {
        setHasMoreMirror(false);
      } else {
        setHasMoreMirror(true);
      }
      setMirrorers([...mirrorers, ...sortedArr]);
      setMirrorPageInfo(mirrors?.data.profiles.pageInfo);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const getPostCollects = async (): Promise<void> => {
    setCollectInfoLoading(true);
    try {
      const collects = await whoCollectedPublications({
        publicationId: pubId,
        limit: 10,
      });
      const arr: any[] = [...collects.data.whoCollectedPublication.items];
      const sortedArr: any[] = arr.sort(
        (a: any, b: any) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
      );
      if (sortedArr?.length < 10) {
        setHasMoreCollect(false);
      } else {
        setHasMoreCollect(true);
      }
      setCollectors(sortedArr);
      setCollectPageInfo(collects?.data.whoCollectedPublication.pageInfo);
    } catch (err: any) {
      console.error(err.message);
    }
    setCollectInfoLoading(false);
  };

  const getMorePostCollects = async (): Promise<void> => {
    try {
      if (!collectPageInfo?.next) {
        // fix apollo duplications on null next
        setHasMoreCollect(false);
        return;
      }
      const collects = await whoCollectedPublications({
        publicationId: pubId,
        limit: 10,
        cursor: collectPageInfo?.next,
      });
      const arr: any[] = [...collects.data.whoCollectedPublication.items];
      const sortedArr: any[] = arr.sort(
        (a: any, b: any) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
      );
      if (sortedArr?.length < 10) {
        setHasMoreCollect(false);
      } else {
        setHasMoreCollect(true);
      }
      setCollectors([...collectors, ...sortedArr]);
      setCollectPageInfo(collects?.data.whoCollectedPublication.pageInfo);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    if (reaction.open) {
      if (reaction.type === "heart") {
        getPostReactions();
      } else if (reaction.type === "mirror") {
        getPostMirrors();
      } else {
        getPostCollects();
      }
    }
  }, [reaction.open]);

  return {
    getMorePostReactions,
    reactInfoLoading,
    reacters,
    mirrorers,
    mirrorInfoLoading,
    getMorePostMirrors,
    getMorePostCollects,
    collectors,
    collectInfoLoading,
    hasMoreCollect,
    hasMoreMirror,
    hasMoreReact,
  };
};

export default useWho;
