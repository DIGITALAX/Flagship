import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CommentOrderingTypes,
  CommentRankingFilter,
  Publication,
} from "../../../types/lens.types";
import { RootState } from "../../../redux/store";
import {
  whoCommentedPublications,
  whoCommentedPublicationsAuth,
} from "../../../graphql/queries/whoComment";
import whoCollectedPublications from "../../../graphql/queries/whoCollectedPublications";
import canCommentPub from "../../../graphql/queries/canCommentPub";
import { setCanComment } from "../../../redux/reducers/canCommentSlice";
import checkIfMirrored from "../../../lib/lens/helpers/checkIfMirrored";
import checkPostReactions from "../../../lib/lens/helpers/checkPostReactions";

const useInteractions = () => {
  const [commentsLoading, setCommentsLoading] = useState<boolean>(false);
  const [paginated, setPaginated] = useState<any>();
  const [commentors, setCommentors] = useState<Publication[]>([]);
  const [hasMirrored, setHasMirrored] = useState<boolean[]>([]);
  const [hasReacted, setHasReacted] = useState<boolean[]>([]);
  const [collectors, setCollectors] = useState<any[]>([]);
  const [collectPageInfo, setCollectPageInfo] = useState<any>();
  const [hasMoreCollects, setHasMoreCollects] = useState<boolean>(true);
  const [hasMoreComments, setHasMoreComments] = useState<boolean>(true);
  const [commentsOpen, setCommentsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const profileId = useSelector(
    (state: RootState) => state.app.profileReducer.profile?.id
  );
  const mainVideo = useSelector(
    (state: RootState) => state.app.mainVideoReducer
  );
  const commentId = useSelector(
    (state: RootState) => state.app.secondaryCommentReducer.value
  );
  const index = useSelector((state: RootState) => state.app.indexModalReducer);

  const getPostComments = async (): Promise<void> => {
    setCommentsLoading(true);
    try {
      let comments: any;

      if (profileId) {
        comments = await whoCommentedPublicationsAuth({
          commentsOf: commentId !== "" ? commentId : mainVideo.id,
          limit: 20,
          commentsOfOrdering: CommentOrderingTypes.Ranking,
          commentsRankingFilter: CommentRankingFilter.Relevant,
        });
      } else {
        comments = await whoCommentedPublications({
          commentsOf: commentId !== "" ? commentId : mainVideo.id,
          limit: 20,
          commentsOfOrdering: CommentOrderingTypes.Ranking,
          commentsRankingFilter: CommentRankingFilter.Relevant,
        });
      }
      if (!comments || !comments?.data || !comments?.data?.publications) {
        setCommentsLoading(false);
        return;
      }
      const sortedArr: any[] = [...comments?.data?.publications?.items];
      if (sortedArr?.length < 20) {
        setHasMoreComments(false);
      } else {
        setHasMoreComments(true);
      }
      setCommentors(sortedArr);
      setPaginated(comments?.data?.publications?.pageInfo);
      if (profileId) {
        const hasMirroredArr = await checkIfMirrored(sortedArr, profileId);
        setHasMirrored(hasMirroredArr);
        const response = await checkPostReactions(
          {
            commentsOf: commentId !== "" ? commentId : mainVideo.id,
            limit: 20,
            commentsOfOrdering: CommentOrderingTypes.Ranking,
            commentsRankingFilter: CommentRankingFilter.Relevant,
          },
          profileId,
          undefined,
          true
        );
        setHasReacted(response);
      }
    } catch (err: any) {
      console.error(err.message);
    }
    setCommentsLoading(false);
  };

  const getMorePostComments = async (): Promise<void> => {
    try {
      if (!paginated?.next) {
        // fix apollo duplications on null next
        setHasMoreComments(false);
        return;
      }
      let comments: any;
      if (profileId) {
        comments = await whoCommentedPublicationsAuth({
          commentsOf: commentId !== "" ? commentId : mainVideo.id,
          limit: 20,
          cursor: paginated?.next,
          commentsOfOrdering: CommentOrderingTypes.Ranking,
          commentsRankingFilter: CommentRankingFilter.Relevant,
        });
      } else {
        comments = await whoCommentedPublications({
          commentsOf: commentId !== "" ? commentId : mainVideo.id,
          limit: 20,
          cursor: paginated?.next,
          commentsOfOrdering: CommentOrderingTypes.Ranking,
          commentsRankingFilter: CommentRankingFilter.Relevant,
        });
      }
      if (
        !comments ||
        !comments?.data ||
        !comments?.data?.publications ||
        comments?.data?.publications?.items?.length < 1
      ) {
        setHasMoreComments(false);
        setCommentsLoading(false);
        return;
      }
      const sortedArr: any[] = [...comments?.data?.publications?.items];
      if (sortedArr?.length < 20) {
        setHasMoreComments(false);
      }
      setCommentors([...commentors, ...sortedArr]);
      setPaginated(comments?.data?.publications?.pageInfo);
      if (profileId) {
        const hasMirroredArr = await checkIfMirrored(sortedArr, profileId);
        setHasMirrored([...hasMirrored, ...hasMirroredArr]);
        const hasReactedArr = await checkPostReactions(
          {
            commentsOf: commentId !== "" ? commentId : mainVideo.id,
            limit: 20,
            cursor: paginated?.next,
            commentsOfOrdering: CommentOrderingTypes.Ranking,
            commentsRankingFilter: CommentRankingFilter.Relevant,
          },
          profileId,
          undefined,
          true
        );
        setHasReacted([...hasReacted, ...hasReactedArr]);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const getMorePostCollects = async (): Promise<void> => {
    if (!collectPageInfo?.next) {
      setHasMoreCollects(false);
      return;
    }
    try {
      const collects = await whoCollectedPublications({
        publicationId: mainVideo?.id,
        limit: 30,
        cursor: collectPageInfo?.next,
      });
      const arr: any[] = [...collects.data.whoCollectedPublication.items];
      const sortedArr: any[] = arr.sort(
        (a: any, b: any) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
      );
      if (sortedArr?.length < 2) {
        setHasMoreCollects(false);
      }
      setCollectors([...collectors, ...sortedArr]);
      setCollectPageInfo(collects?.data?.whoCollectedPublication?.pageInfo);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const canComment = async () => {
    try {
      const res = await canCommentPub(
        {
          publicationId: commentId,
        },
        profileId
      );
      if (!res.data.publication.canComment.result) {
        dispatch(setCanComment(false));
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    if (commentId !== "" && profileId) {
      canComment();
    } else {
      dispatch(setCanComment(true));
    }
  }, [commentId]);

  useEffect(() => {
    if (mainVideo.id) {
      getPostComments();
    }
  }, [mainVideo.id, profileId, commentId]);
  useEffect(() => {
    if (index.message === "Successfully Indexed") {
      getPostComments();
    }
  }, [index.message]);

  return {
    commentors,
    getMorePostComments,
    commentsLoading,
    hasMoreCollects,
    hasMoreComments,
    hasMirrored,
    hasReacted,
    commentsOpen,
    setCommentsOpen,
  };
};

export default useInteractions;
