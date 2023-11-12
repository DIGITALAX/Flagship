import { useEffect, useState } from "react";
import {
  LimitType,
  Profile,
  ProfileWhoReactedResult,
  PublicationReactionType,
} from "../../../types/generated";
import { whoActed } from "../../../graphql/queries/whoActed";
import getProfiles from "../../../graphql/queries/getProfiles";
import { whoReacted } from "../../../graphql/queries/reactor";
import { ReactionStateState } from "../../../redux/reducers/reactionStateSlice";

const useWho = (reaction: ReactionStateState) => {
  const [reactInfoLoading, setReactInfoLoading] = useState<boolean>(false);
  const [reacters, setReacters] = useState<ProfileWhoReactedResult[]>([]);
  const [reactionPageInfo, setReactionPageInfo] = useState<any>();
  const [mirrorers, setMirrorers] = useState<Profile[]>([]);
  const [mirrorInfoLoading, setMirrorInfoLoading] = useState<any>();
  const [mirrorPageInfo, setMirrorPageInfo] = useState<any>();
  const [collectors, setCollectors] = useState<Profile[]>([]);
  const [collectInfoLoading, setCollectInfoLoading] = useState<any>();
  const [collectPageInfo, setCollectPageInfo] = useState<any>();
  const [hasMoreReact, setHasMoreReact] = useState<boolean>(true);
  const [hasMoreMirror, setHasMoreMirror] = useState<boolean>(true);
  const [hasMoreCollect, setHasMoreCollect] = useState<boolean>(true);

  const getPostReactions = async (): Promise<void> => {
    setReactInfoLoading(true);
    try {
      const reactions = await whoReacted({
        for: reaction?.value,
        limit: LimitType.Ten,
        where: {
          anyOf: [PublicationReactionType.Upvote],
        },
      });

      const arr: ProfileWhoReactedResult[] = [
        ...(reactions?.data?.whoReactedPublication.items || []),
      ] as ProfileWhoReactedResult[];
      if (arr?.length < 10) {
        setHasMoreReact(false);
      } else {
        setHasMoreReact(true);
      }
      setReacters(arr as ProfileWhoReactedResult[]);
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
      const reactions = await whoReacted({
        for: reaction?.value,
        limit: LimitType.Ten,
        where: {
          anyOf: [PublicationReactionType.Upvote],
        },
        cursor: reactionPageInfo?.next,
      });

      const arr: ProfileWhoReactedResult[] = [
        ...(reactions?.data?.whoReactedPublication?.items || []),
      ] as ProfileWhoReactedResult[];

      if (arr?.length < 10) {
        setHasMoreReact(false);
      } else {
        setHasMoreReact(true);
      }
      setReacters([...reacters, ...arr]);
      setReactionPageInfo(reactions?.data?.whoReactedPublication?.pageInfo);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const getPostMirrors = async (): Promise<void> => {
    setMirrorInfoLoading(true);
    try {
      const mirrors = await getProfiles({
        where: {
          whoMirroredPublication: reaction?.value,
        },
        limit: LimitType.Ten,
      });

      const arr: Profile[] = [
        ...(mirrors.data?.profiles?.items || []),
      ] as Profile[];

      if (arr?.length < 10) {
        setHasMoreMirror(false);
      } else {
        setHasMoreMirror(true);
      }
      setMirrorers(arr);
      setMirrorPageInfo(mirrors?.data?.profiles.pageInfo);
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
      const mirrors = await getProfiles({
        where: {
          whoMirroredPublication: reaction?.value,
        },
        limit: LimitType.Ten,
        cursor: mirrorPageInfo?.next,
      });

      const arr: Profile[] = [
        ...(mirrors?.data?.profiles?.items || []),
      ] as Profile[];

      if (arr?.length < 10) {
        setHasMoreMirror(false);
      } else {
        setHasMoreMirror(true);
      }
      setMirrorers([...mirrorers, ...arr]);
      setMirrorPageInfo(mirrors?.data?.profiles.pageInfo);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const getPostCollects = async (): Promise<void> => {
    setCollectInfoLoading(true);
    try {
      const collects = await whoActed({
        on: reaction?.value,
        limit: LimitType.Ten,
      });
      const arr: Profile[] = [
        ...(collects.data?.whoActedOnPublication?.items || []),
      ] as Profile[];

      if (arr?.length < 10) {
        setHasMoreCollect(false);
      } else {
        setHasMoreCollect(true);
      }
      setCollectors(arr);
      setCollectPageInfo(collects?.data?.whoActedOnPublication.pageInfo);
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
      const collects = await whoActed({
        on: reaction?.value,
        limit: LimitType.Ten,
        cursor: collectPageInfo?.next,
      });
      const arr: Profile[] = [
        ...(collects.data?.whoActedOnPublication?.items || []),
      ] as Profile[];
      if (arr?.length < 10) {
        setHasMoreCollect(false);
      } else {
        setHasMoreCollect(true);
      }
      setCollectors([...collectors, ...arr]);
      setCollectPageInfo(collects?.data?.whoActedOnPublication?.pageInfo);
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
