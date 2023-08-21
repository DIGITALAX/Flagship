import { FunctionComponent } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import moment from "moment";
import Image from "next/image";
import { AiFillFastBackward, AiOutlineLoading } from "react-icons/ai";
import ReactPlayer from "react-player";
import FetchMoreLoading from "./FetchMoreLoading";
import { INFURA_GATEWAY } from "../../../lib/lens/constants";
import { setSecondaryComment } from "../../../redux/reducers/secondaryCommentSlice";
import { setReactionState } from "../../../redux/reducers/reactionStateSlice";
import { setFollowerOnly } from "../../../redux/reducers/followerOnlySlice";
import { setPurchase } from "../../../redux/reducers/purchaseSlice";
import createProfilePicture from "../../../lib/lens/helpers/createProfilePicture";
import descriptionRegex from "../../../lib/lens/helpers/descriptionRegex";
import { MediaSet } from "../../../types/lens.types";
import { CommentsProps } from "../../../types/general.types";

const Comments: FunctionComponent<CommentsProps> = ({
  commentors,
  video,
  getMorePostComments,
  commentsLoading,
  hasMoreComments,
  mirrorCommentLoading,
  likeCommentLoading,
  collectCommentLoading,
  mirrorComment,
  collectComment,
  likeComment,
  dispatch,
  hasMirrored,
  hasReacted,
  commentId,
}): JSX.Element => {
  return (
    <div className="relative w-full h-full flex flex-col bg-verde">
      <div className="relative w-full h-28 bg-black">
        <div className="relative p-2 w-full h-full border border-white flex flex-col items-center gap-2 overflow-y-scroll">
          <div className="relative w-full h-fit flex flex-row items-center justify-start gap-2">
            <div className="relative w-fit h-1/2 flex justify-start">
              <Image
                src={`${INFURA_GATEWAY}/ipfs/QmfXzGt2RHdEfwgiLiYqEmdsDdSHm1SBdq1Cpys1gHTe5s`}
                height={5}
                width={10}
                alt="stripes"
                draggable={false}
              />
            </div>
            <div
              className="relative w-full h-fit text-sm font-vcr flex justify-start break-words"
              id={`record1`}
            >
              {video?.metadata?.content?.split("\n\n")[0]}
            </div>
          </div>
          <div
            className="relative w-full h-full flex font-vcr text-xs text-white whitespace-preline"
            dangerouslySetInnerHTML={{
              __html: video?.metadata?.content
                ?.split("\n\n")
                .slice(1)
                .join("<br><br>"),
            }}
          />
        </div>
      </div>
      <div className="relative w-full h-[24rem] border-white border bg-black overflow-y-scroll">
        {commentId !== "" && (
          <div className="sticky z-0 w-full h-10 flex flex-col items-center justify-start px-3 bg-black">
            <div
              className="relative w-full h-full flex items-center cursor-pointer"
              onClick={() => {
                dispatch(setSecondaryComment(""));
              }}
            >
              <AiFillFastBackward color="white" size={20} />
            </div>
          </div>
        )}
        {commentsLoading ? (
          <div className="relative w-full h-full justify-center items-center flex">
            <FetchMoreLoading size="6" />
          </div>
        ) : !commentsLoading && commentors?.length < 1 ? (
          <div className="relative text-white font-vcr w-full h-full justify-center items-center py-3 flex text-center">
            <div className="relative w-3/4 h-full items-start justify-center flex text-sm">
              {"No comments yet :)"}
            </div>
          </div>
        ) : (
          <div className="relative w-full h-full grid grid-flow-row auto-rows-auto gap-5">
            <InfiniteScroll
              className={`relative row-start-1 w-full h-full overflow-y-scroll`}
              hasMore={hasMoreComments}
              height={"18rem"}
              loader={<FetchMoreLoading size="3" />}
              dataLength={commentors?.length}
              next={getMorePostComments}
            >
              <div className="relative w-full h-fit grid grid-flow-row auto-rows-auto gap-3">
                {commentors?.map((comment: any, index: number) => {
                  const profileImage = createProfilePicture(comment, true);
                  return (
                    <div
                      key={index}
                      className="relative w-full h-fit flex flex-row font-vcr text-xs items-start gap-3 p-3"
                    >
                      <a
                        href={`https://www.chromadin.xyz/#chat?option=history&profile=${
                          comment?.profile?.handle?.split(".lens")[0]
                        }`}
                        target="_blank"
                        rel="noreferrer"
                        className="relative w-fit h-full flex items-start justify-start cursor-pointer"
                      >
                        <div
                          className="relative w-6 h-6 border border-white"
                          id="crt"
                        >
                          {profileImage !== "" && (
                            <Image
                              objectFit="cover"
                              alt="pfp"
                              layout="fill"
                              className="relative w-full h-full flex"
                              src={profileImage}
                              draggable={false}
                            />
                          )}
                        </div>
                      </a>
                      <div className="relative w-full h-full flex flex-col gap-2">
                        <a
                          href={`https://www.chromadin.xyz/#chat?option=history&profile=${
                            comment?.profile?.handle?.split(".lens")[0]
                          }`}
                          target="_blank"
                          rel="noreferrer"
                          className="relative w-full h-full text-ama justify-start flex cursor-pointer"
                        >
                          @{comment?.profile?.handle?.split(".lens")[0]}
                        </a>
                        <div className="relative w-full h-full text-verde flex flex-col">
                          <div
                            className="relative w-full h-full text-white flex"
                            dangerouslySetInnerHTML={{
                              __html: descriptionRegex(
                                comment?.metadata?.content
                              ),
                            }}
                          ></div>
                          <div className="relative w-44 h-fit overflow-x-scroll grid grid-flow-col auto-cols-auto gap-3 z-10">
                            {comment?.metadata?.media?.map(
                              (media: MediaSet, index: number) => {
                                let formattedImageURL: string;
                                if (media?.original?.url?.includes("ipfs://")) {
                                  formattedImageURL = `${INFURA_GATEWAY}/ipfs/${
                                    media?.original?.url?.split("://")[1]
                                  }`;
                                } else {
                                  formattedImageURL = media?.original?.url;
                                }
                                return (
                                  <div
                                    key={index}
                                    className="relative w-24 h-24 grid grid-flow-col auto-cols-auto"
                                  >
                                    {!media?.original?.mimeType.includes(
                                      "video"
                                    ) ? (
                                      <Image
                                        src={formattedImageURL}
                                        layout="fill"
                                        objectFit="cover"
                                        draggable={false}
                                        className="rounded-lg"
                                      />
                                    ) : formattedImageURL.includes("index") ? (
                                      <div className="rounded-md absolute w-full h-full object-cover">
                                        <ReactPlayer
                                          url={formattedImageURL}
                                          controls={true}
                                          muted={true}
                                          playsinline
                                          loop
                                          style={{
                                            borderRadius: "0.375rem",
                                            objectFit: "cover",
                                          }}
                                          width="100%"
                                          height="100%"
                                          className="rounded-md"
                                        />
                                      </div>
                                    ) : (
                                      <video
                                        muted
                                        controls
                                        playsInline
                                        autoPlay
                                        loop
                                        className="rounded-md absolute w-full h-full object-cover"
                                      >
                                        <source
                                          src={formattedImageURL}
                                          type="video/mp4"
                                        />
                                      </video>
                                    )}
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                        <div className="relative w-full h-full text-moda justify-start flex">
                          {moment(`${comment?.createdAt}`).fromNow()}
                        </div>
                      </div>
                      <div className="relative grid grid-rows-2 w-full h-full gap-2 items-end justify-end flex-wrap">
                        <div className="relative w-full h-full grid grid-cols-2 gap-2 items-center justify-end">
                          <div
                            className={`relative w-full h-full grid grid-flow-col auto-cols-auto items-center justify-end flex-row gap-2 cursor-pointer`}
                          >
                            {likeCommentLoading[index] ? (
                              <AiOutlineLoading
                                size={9}
                                color="white"
                                className={`${
                                  likeCommentLoading?.[index] && "animate-spin"
                                }
                                `}
                              />
                            ) : hasReacted?.[index] ? (
                              <Image
                                src={`${INFURA_GATEWAY}/ipfs/Qmc3KCKWRgN8iKwwAPM5pYkAYNeVwWu3moa5RDMDTBV6ZS`}
                                width={12}
                                height={12}
                                alt="mirror"
                                draggable={false}
                                onClick={() => likeComment(comment?.id)}
                              />
                            ) : (
                              <Image
                                src={`${INFURA_GATEWAY}/ipfs/QmSX1Y5cKp8p53jv2CnfQBuhu3dgLANjZMTyAMKtgFtvV6`}
                                width={12}
                                height={12}
                                alt="backward"
                                draggable={false}
                                onClick={() => likeComment(comment?.id)}
                              />
                            )}
                            <div
                              className="relative w-fit h-fit font-vcr text-xs text-white flex"
                              onClick={() =>
                                comment?.stats?.totalUpvotes > 0 &&
                                dispatch(
                                  setReactionState({
                                    actionOpen: true,
                                    actionType: "heart",
                                    actionValue: comment?.id,
                                    actionResponseReact: hasReacted,
                                  })
                                )
                              }
                            >
                              {comment?.stats?.totalUpvotes}
                            </div>
                          </div>
                          <div
                            className={`relative w-full h-full grid grid-flow-col auto-cols-auto items-center justify-end flex-row gap-2 cursor-pointer`}
                          >
                            <Image
                              src={`${INFURA_GATEWAY}/ipfs/QmeuR9Fzv8QF9R6ntjGKB78GteQgmEcXhBfVPhsTyWbumA`}
                              width={12}
                              height={12}
                              alt="backward"
                              draggable={false}
                              onClick={() =>
                                dispatch(setSecondaryComment(comment?.id))
                              }
                            />
                            <div className="relative w-fit h-fit font-vcr text-xs text-white flex">
                              {comment?.stats?.totalAmountOfComments}
                            </div>
                          </div>
                        </div>
                        <div className="relative w-full h-full grid grid-cols-2 gap-2 items-center justify-end">
                          <div
                            className={`relative w-full h-full grid grid-flow-col auto-cols-auto items-center justify-end flex-row gap-2`}
                          >
                            {collectCommentLoading[index] ? (
                              <AiOutlineLoading
                                size={9}
                                color="white"
                                className={`${
                                  collectCommentLoading?.[index] &&
                                  "animate-spin"
                                }
                                `}
                              />
                            ) : comment?.hasCollectedByMe ? (
                              <Image
                                src={`${INFURA_GATEWAY}/ipfs/QmXG1mnHdBDXMzMZ9t1wE1Tqo8DRXQ1oNLUxpETdUw17HU`}
                                width={12}
                                height={12}
                                alt="collect"
                                draggable={false}
                                onClick={
                                  comment?.collectModule?.type ===
                                  "RevertCollectModule"
                                    ? () => {}
                                    : comment?.collectModule?.followerOnly &&
                                      !comment?.profile?.isFollowedByMe
                                    ? () =>
                                        dispatch(
                                          setFollowerOnly({
                                            actionOpen: true,
                                            actionFollowerId:
                                              comment?.profile?.id,
                                            actionId: comment?.id,
                                            actionIndex: index,
                                          })
                                        )
                                    : comment?.collectModule?.type ===
                                        "FreeCollectModule" ||
                                      ((comment?.collectModule?.__typename ===
                                        "SimpleCollectModuleSettings" ||
                                        comment?.collectModule?.type ===
                                          "SimpleCollectModule") &&
                                        !comment?.collectModule?.amount &&
                                        !comment?.collectModule
                                          ?.optionalCollectLimit &&
                                        !comment?.collectModule
                                          ?.optionalEndTimestamp)
                                    ? () => collectComment(comment?.id)
                                    : () =>
                                        dispatch(
                                          setPurchase({
                                            actionOpen: true,
                                            actionId: comment?.id,
                                            actionIndex: index,
                                          })
                                        )
                                }
                                className={`${
                                  comment?.collectModule?.type !==
                                    "RevertCollectModule" && "cursor-pointer"
                                }`}
                              />
                            ) : (
                              <Image
                                src={`${INFURA_GATEWAY}/ipfs/QmRGf1cz8h9bdw9VKp9zYXZoDfy15nRA1fKc7ARhxnRPwr`}
                                width={12}
                                height={12}
                                alt="collect"
                                draggable={false}
                                className={`${
                                  comment?.collectModule?.type !==
                                    "RevertCollectModule" && "cursor-pointer"
                                }`}
                                onClick={
                                  comment?.collectModule?.type ===
                                  "RevertCollectModule"
                                    ? () => {}
                                    : comment?.collectModule?.followerOnly &&
                                      !comment?.profile?.isFollowedByMe
                                    ? () =>
                                        dispatch(
                                          setFollowerOnly({
                                            actionOpen: true,
                                            actionFollowerId:
                                              comment?.profile?.id,
                                            actionId: comment?.id,
                                            actionIndex: index,
                                          })
                                        )
                                    : comment?.collectModule?.type ===
                                        "FreeCollectModule" ||
                                      ((comment?.collectModule?.__typename ===
                                        "SimpleCollectModuleSettings" ||
                                        comment?.collectModule?.type ===
                                          "SimpleCollectModule") &&
                                        !comment?.collectModule?.amount &&
                                        !comment?.collectModule
                                          ?.optionalCollectLimit &&
                                        !comment?.collectModule
                                          ?.optionalEndTimestamp)
                                    ? () => collectComment(comment?.id)
                                    : () =>
                                        dispatch(
                                          setPurchase({
                                            actionOpen: true,
                                            actionId: comment?.id,
                                            actionIndex: index,
                                          })
                                        )
                                }
                              />
                            )}
                            <div
                              className="relative w-fit h-fit font-vcr text-xs text-white cursor-pointer"
                              onClick={() =>
                                comment?.stats?.totalAmountOfCollects > 0 &&
                                dispatch(
                                  setReactionState({
                                    actionOpen: true,
                                    actionType: "collect",
                                    actionValue: comment?.id,
                                  })
                                )
                              }
                            >
                              {comment?.stats?.totalAmountOfCollects}
                            </div>
                          </div>
                          <div
                            className={`relative w-full h-full grid grid-flow-col auto-cols-auto items-center justify-end flex-row gap-2 cursor-pointer`}
                          >
                            {mirrorCommentLoading?.[index] ? (
                              <AiOutlineLoading
                                size={9}
                                color="white"
                                className={`${
                                  mirrorCommentLoading?.[index] &&
                                  "animate-spin"
                                }
                                `}
                              />
                            ) : hasMirrored?.[index] ? (
                              <Image
                                src={`${INFURA_GATEWAY}/ipfs/QmcMNSnbKvUfx3B3iHBd9deZCDf7E4J8W6UtyNer3xoMsB`}
                                width={12}
                                height={12}
                                alt="mirror"
                                draggable={false}
                                onClick={() => mirrorComment(comment?.id)}
                              />
                            ) : (
                              <Image
                                src={`${INFURA_GATEWAY}/ipfs/QmXZi8e6UQaXm3BMMdsAUTnxoQSEr97nvuc19v7kBAgFsY`}
                                width={12}
                                height={12}
                                alt="mirror"
                                draggable={false}
                                onClick={() => mirrorComment(comment?.id)}
                              />
                            )}
                            <div
                              className="relative w-fit h-fit font-vcr text-xs text-white"
                              onClick={() =>
                                comment?.stats?.totalAmountOfMirrors > 0 &&
                                dispatch(
                                  setReactionState({
                                    actionOpen: true,
                                    actionType: "mirror",
                                    actionValue: comment?.id,
                                    actionResponseMirror: hasMirrored,
                                    actionFollower:
                                      comment.referenceModule?.type ===
                                      "FollowerOnlyReferenceModule"
                                        ? true
                                        : false,
                                  })
                                )
                              }
                            >
                              {comment?.stats?.totalAmountOfMirrors}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </InfiniteScroll>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comments;
