import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import lodash from "lodash";
import { ApolloQueryResult } from "@apollo/client";
import json from "./../../../public/videos/local.json";
import { RootState } from "../../../redux/store";
import { setVideoSync } from "../../../redux/reducers/videoSyncSlice";
import {
  profilePublications,
  profilePublicationsAuth,
} from "../../../graphql/queries/whoComment";
import { setHasMoreVideosRedux } from "../../../redux/reducers/hasMoreVideoSlice";
import { setChannelsRedux } from "../../../redux/reducers/channelsSlice";
import { setVideoCount } from "../../../redux/reducers/videoCountSlice";
import { Publication } from "../../../types/lens.types";
import { setMainVideo } from "../../../redux/reducers/mainVideoSlice";
import checkIfMirrored from "../../../lib/lens/helpers/checkIfMirrored";
import checkPostReactions from "../../../lib/lens/helpers/checkPostReactions";
import { setReactId } from "../../../redux/reducers/reactIdSlice";

const useChannels = () => {
  const authStatus = useSelector(
    (state: RootState) => state.app.authStatusReducer.value
  );
  const mainVideo = useSelector(
    (state: RootState) => state.app.mainVideoReducer
  );
  const lensProfile = useSelector(
    (state: RootState) => state.app.profileReducer.profile?.id
  );
  const channelsDispatched = useSelector(
    (state: RootState) => state.app.channelsReducer.value
  );
  const indexer = useSelector(
    (state: RootState) => state.app.indexModalReducer.message
  );
  const reactId = useSelector(
    (state: RootState) => state.app.reactIdReducer.value
  );
  const videoSync = useSelector(
    (state: RootState) => state.app.videoSyncReducer
  );
  const videoCount = useSelector(
    (state: RootState) => state.app.videoCountReducer
  );
  const dispatch = useDispatch();
  const [paginated, setPaginated] = useState<any>();
  const [videoLoading, setVideoLoading] = useState<boolean>(false);

  const getVideos = async (): Promise<void> => {
    dispatch(
      setVideoSync({
        actionHeart: videoSync.heart,
        actionDuration: videoSync.duration,
        actionCurrentTime: videoSync.currentTime,
        actionIsPlaying: videoSync.isPlaying,
        actionLikedArray: videoSync.likedArray,
        actionMirroredArray: videoSync.mirroredArray,
        actionCollectedArray: videoSync.collectedArray,
        actionVideosLoading: true,
      })
    );
    let data: ApolloQueryResult<any>,
      hasReactedArr: any[] = [],
      hasMirroredArr: any[] = [],
      sortedArr: any[] = [];
    try {
      if (authStatus && lensProfile) {
        data = await profilePublicationsAuth(
          {
            profileId: "0x01c6a9",
            publicationTypes: ["POST"],
            limit: 10,
          },
          lensProfile
        );
      } else {
        data = await profilePublications({
          profileId: "0x01c6a9",
          publicationTypes: ["POST"],
          limit: 10,
        });
      }
      if (!data || !data?.data || data?.data.publications?.items?.length < 1) {
        return;
      }
      const arr: any[] = [...data?.data.publications?.items];
      sortedArr = arr.sort(
        (a: any, b: any) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
      );
      if (sortedArr?.length < 10) {
        dispatch(setHasMoreVideosRedux(false));
      } else {
        dispatch(setHasMoreVideosRedux(true));
      }
      setPaginated(data?.data.publications?.pageInfo);
      dispatch(setChannelsRedux(sortedArr));
      dispatch(
        setVideoCount({
          actionLike: sortedArr.map(
            (obj: Publication) => obj.stats.totalUpvotes
          ),
          actionMirror: sortedArr.map(
            (obj: Publication) => obj.stats.totalAmountOfMirrors
          ),
          actionCollect: sortedArr.map(
            (obj: Publication) => obj.stats.totalAmountOfCollects
          ),
        })
      );
      if (authStatus && lensProfile) {
        hasReactedArr = await checkPostReactions(
          {
            profileId: "0x01c6a9",
            publicationTypes: ["POST"],
            limit: 10,
          },
          lensProfile
        );
        hasMirroredArr = await checkIfMirrored(sortedArr, lensProfile);
      }
      dispatch(
        setMainVideo({
          actionCollected: sortedArr[0]?.hasCollectedByMe,
          actionLiked: hasReactedArr?.[0],
          actionMirrored: hasMirroredArr?.[0],
          actionId: sortedArr[0].id,
          actionLocal: `${json[0].link}`,
        })
      );
    } catch (err: any) {
      console.error(err.message);
    }
    dispatch(
      setVideoSync({
        actionHeart: videoSync.heart,
        actionDuration: videoSync.duration,
        actionCurrentTime: videoSync.currentTime,
        actionIsPlaying: videoSync.isPlaying,
        actionLikedArray: hasReactedArr?.length > 0 ? hasReactedArr : [],
        actionMirroredArray: hasMirroredArr?.length > 0 ? hasMirroredArr : [],
        actionCollectedArray: sortedArr?.map(
          (obj: Publication) => obj?.hasCollectedByMe
        ),
        actionVideosLoading: false,
      })
    );
  };

  const fetchMoreVideos = async () => {
    let data: ApolloQueryResult<any>,
      hasReactedArr: any[] = [],
      hasMirroredArr: any[] = [],
      sortedArr: any[] = [];
    if (!paginated?.next) {
      dispatch(setHasMoreVideosRedux(false));
      return;
    }
    try {
      if (authStatus && lensProfile) {
        data = await profilePublicationsAuth(
          {
            profileId: "0x01c6a9",
            publicationTypes: ["POST"],
            limit: 10,
            cursor: paginated?.next,
          },
          lensProfile
        );
      } else {
        data = await profilePublications({
          profileId: "0x01c6a9",
          publicationTypes: ["POST"],
          limit: 10,
          cursor: paginated?.next,
        });
      }
      const arr: any[] = [...data?.data.publications?.items];
      sortedArr = arr.sort(
        (a: any, b: any) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
      );

      if (sortedArr?.length < 10) {
        dispatch(setHasMoreVideosRedux(false));
      } else {
        dispatch(setHasMoreVideosRedux(true));
      }
      setPaginated(data?.data.publications?.pageInfo);
      dispatch(setChannelsRedux([...channelsDispatched, ...sortedArr]));
      dispatch(
        setVideoCount({
          actionLike: [
            ...videoCount.like,
            ...sortedArr.map((obj: Publication) => obj.stats.totalUpvotes),
          ],
          actionMirror: [
            ...videoCount.mirror,
            ...sortedArr.map(
              (obj: Publication) => obj.stats.totalAmountOfMirrors
            ),
          ],
          actionCollect: [
            ...videoCount.collect,
            ...sortedArr.map(
              (obj: Publication) => obj.stats.totalAmountOfCollects
            ),
          ],
        })
      );
      if (authStatus && lensProfile) {
        hasReactedArr = await checkPostReactions(
          {
            profileId: "0x01c6a9",
            publicationTypes: ["POST"],
            limit: 10,
            cursor: paginated?.next,
          },
          lensProfile
        );
        hasMirroredArr = await checkIfMirrored(sortedArr, lensProfile);
      }
    } catch (err: any) {
      console.error(err.message);
    }
    dispatch(
      setVideoSync({
        actionHeart: videoSync.heart,
        actionDuration: videoSync.duration,
        actionCurrentTime: videoSync.currentTime,
        actionIsPlaying: videoSync.isPlaying,
        actionLikedArray: [
          ...videoSync.likedArray,
          ...(hasReactedArr?.length > 0 ? hasReactedArr : []),
        ],
        actionMirroredArray: [
          ...videoSync.mirroredArray,
          ...(hasMirroredArr?.length > 0 ? hasMirroredArr : []),
        ],
        actionCollectedArray: [
          ...videoSync.collectedArray,
          ...sortedArr?.map((obj: Publication) => obj?.hasCollectedByMe),
        ],
        actionVideosLoading: videoSync.videosLoading,
      })
    );
    return {
      videos: [...channelsDispatched, ...sortedArr],
      mirrors: [
        ...videoSync.mirroredArray,
        ...(hasMirroredArr?.length > 0 ? hasMirroredArr : []),
      ],
      collects: [
        ...videoSync.collectedArray,
        ...sortedArr?.map((obj: Publication) => obj?.hasCollectedByMe),
      ],
      likes: [
        ...videoSync.likedArray,
        ...(hasReactedArr?.length > 0 ? hasReactedArr : []),
      ],
    };
  };

  const refetchInteractions = async () => {
    let data: ApolloQueryResult<any>;
    try {
      if (authStatus && lensProfile) {
        data = await profilePublicationsAuth(
          {
            profileId: "0x01c6a9",
            publicationTypes: ["POST"],
            limit: 10,
          },
          lensProfile
        );
      } else {
        data = await profilePublications({
          profileId: "0x01c6a9",
          publicationTypes: ["POST"],
          limit: 10,
        });
      }
      const arr: any[] = [...data?.data.publications?.items];
      const sortedArr: any[] = arr.sort(
        (a: any, b: any) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
      );
      const hasReactedArr = await checkPostReactions(
        {
          profileId: "0x01c6a9",
          publicationTypes: ["POST"],
          limit: 10,
        },
        lensProfile
      );
      const hasMirroredArr = await checkIfMirrored(
        channelsDispatched,
        lensProfile
      );
      const hasCollectedArr = sortedArr.map(
        (obj: Publication) => obj.hasCollectedByMe
      );
      dispatch(
        setVideoSync({
          actionHeart: videoSync.heart,
          actionDuration: videoSync.duration,
          actionCurrentTime: videoSync.currentTime,
          actionIsPlaying: videoSync.isPlaying,
          actionLikedArray: hasReactedArr,
          actionMirroredArray: hasMirroredArr,
          actionCollectedArray: hasCollectedArr,
          actionVideosLoading: videoSync.videosLoading,
        })
      );
      dispatch(
        setVideoCount({
          actionLike: sortedArr.map(
            (obj: Publication) => obj.stats.totalUpvotes
          ),
          actionMirror: sortedArr.map(
            (obj: Publication) => obj.stats.totalAmountOfMirrors
          ),
          actionCollect: sortedArr.map(
            (obj: Publication) => obj.stats.totalAmountOfCollects
          ),
        })
      );
      if (reactId === mainVideo.id) {
        const currentIndex = lodash.findIndex(channelsDispatched, {
          id: reactId,
        });
        dispatch(
          setMainVideo({
            actionCollected: hasCollectedArr?.[currentIndex],
            actionLiked: hasReactedArr?.[currentIndex],
            actionMirrored: hasMirroredArr?.[currentIndex],
            actionId: mainVideo.id,
            actionLocal: mainVideo.local,
          })
        );
      }
      dispatch(setReactId(""));
    } catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    if (indexer === "Successfully Indexed" && reactId !== "") {
      refetchInteractions();
    }
  }, [indexer]);

  useEffect(() => {
    if (!channelsDispatched || channelsDispatched?.length < 1) {
      getVideos();
    }
  }, [lensProfile]);

  return {
    fetchMoreVideos,
    videoLoading,
    setVideoLoading,
  };
};

export default useChannels;
