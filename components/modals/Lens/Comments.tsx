import { FunctionComponent } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import moment from "moment";
import { AiFillFastBackward, AiOutlineLoading } from "react-icons/ai";
import ReactPlayer from "react-player";
import {
  Comment,
  ImageMetadataV3,
  NftImage,
  PublicationMetadataMedia,
  TextOnlyMetadataV3,
  VideoMetadataV3,
} from "../../../types/generated";
import Image from "next/image";
import { INFURA_GATEWAY } from "../../../lib/lens/constants";
import { CommentsProps } from "../../../types/general.types";
import { setSecondaryComment } from "../../../redux/reducers/secondaryCommentSlice";
import FetchMoreLoading from "./FetchMoreLoading";
import createProfilePicture from "../../../lib/lens/helpers/createProfilePicture";
import descriptionRegex from "../../../lib/lens/helpers/descriptionRegex";
import { setPurchase } from "../../../redux/reducers/purchaseSlice";
import { setFollowerOnly } from "../../../redux/reducers/followerOnlySlice";

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
  commentId,
  lensProfile,
}): JSX.Element => {
  return (
    <div className="relative w-full h-full flex flex-col bg-verde">
      <div className="relative w-full h-28  bg-offBlack">
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
              className="relative w-full h-fit text-lg font-vcr flex justify-start break-words"
              id={`record1`}
            >
              {(video?.metadata as VideoMetadataV3)?.title?.includes(
                "Post by @chromadin.lens"
              )
                ? (video?.metadata as VideoMetadataV3)?.content.split("\n\n")[0]
                : (video?.metadata as VideoMetadataV3)?.title}
            </div>
          </div>
          <div
            className="relative w-full h-full flex font-vcr text-sm text-white whitespace-preline"
            dangerouslySetInnerHTML={{
              __html: (video?.metadata as VideoMetadataV3)?.content?.includes(
                "\n\n"
              )
                ? (video?.metadata as VideoMetadataV3)?.content
                    ?.split("\n\n")
                    ?.slice(1)
                    ?.join("<br><br>")
                : (video?.metadata as VideoMetadataV3)?.content,
            }}
          />
        </div>
      </div>
      <div className="relative w-full h-[15rem] xl:h-[27.7rem] border-white border bg-offBlack overflow-y-scroll">
        {commentId !== "" && (
          <div className="sticky z-0 w-full h-10 flex flex-col items-center justify-start px-3 bg-offBlack">
            <div
              className="relative w-full h-full flex items-center cursor-sewingHS"
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
            <div className="relative w-3/4 h-full items-start justify-center flex">
              {commentId !== ""
                ? "Reply to this comment in the message box"
                : "Be the first to comment on this stream :)"}
            </div>
          </div>
        ) : (
          <div className="relative w-full h-full grid grid-flow-row auto-rows-auto gap-5">
            <InfiniteScroll
              className={`relative row-start-1 w-full h-full overflow-y-scroll`}
              hasMore={hasMoreComments}
              height={"27.7rem"}
              loader={<FetchMoreLoading size="3" />}
              dataLength={commentors?.length}
              next={getMorePostComments}
            >
              <div className="relative w-full h-fit grid grid-flow-row auto-rows-auto gap-3">
                {commentors?.map((comment: Comment, index: number) => {
                  const profileImage = createProfilePicture(
                    comment?.by?.metadata?.picture
                  );
                  return (
                    <div
                      key={index}
                      className="relative w-full h-fit flex flex-row font-vcr text-sm items-start gap-3 p-3"
                    >
                      <div className="relative w-fit h-full flex items-start justify-start cursor-sewingHS">
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
                      </div>
                      <div className="relative w-full h-full flex flex-col gap-2">
                        <div className="relative w-full h-full text-ama justify-start flex cursor-sewingHS">
                          {comment?.by?.handle?.suggestedFormatted?.localName}
                        </div>
                        <div className="relative w-full h-full text-verde flex flex-col">
                          <div
                            className="relative w-full h-full flex"
                            dangerouslySetInnerHTML={{
                              __html: descriptionRegex(
                                (comment?.metadata as TextOnlyMetadataV3)
                                  ?.content
                              ),
                            }}
                          ></div>
                          <div className="relative w-44 h-fit overflow-x-scroll grid grid-flow-col auto-cols-auto gap-3 z-10">
                            {(
                              comment?.metadata as ImageMetadataV3
                            )?.attachments?.map(
                              (
                                media: PublicationMetadataMedia,
                                index: number
                              ) => {
                                let formattedImageURL: string;
                                const mediaType =
                                  media.__typename ===
                                  "PublicationMetadataMediaImage"
                                    ? media?.image
                                    : media.__typename ===
                                      "PublicationMetadataMediaVideo"
                                    ? media?.video
                                    : undefined;
                                if (mediaType) {
                                  formattedImageURL = mediaType.optimized?.uri
                                    ? mediaType.optimized?.uri
                                    : mediaType?.raw?.uri?.includes("ipfs://")
                                    ? `${INFURA_GATEWAY}/ipfs/${
                                        mediaType?.raw?.uri.split("ipfs://")[1]
                                      }`
                                    : mediaType?.raw?.uri;
                                } else {
                                  return;
                                }

                                return (
                                  <div
                                    key={index}
                                    className="relative w-24 h-24 grid grid-flow-col auto-cols-auto"
                                  >
                                    {(
                                      media.__typename ===
                                      "PublicationMetadataMediaImage"
                                        ? media
                                        : (media as NftImage).image
                                    ) ? (
                                      <Image
                                        src={formattedImageURL}
                                        layout="fill"
                                        objectFit="cover"
                                        draggable={false}
                                        className="rounded-lg"
                                      />
                                    ) : formattedImageURL?.includes("index") ||
                                      formattedImageURL?.includes(
                                        "gw.ipfs-lens.dev"
                                      ) ? (
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
                            className={`relative w-full h-full grid grid-flow-col auto-cols-auto items-center justify-end flex-row gap-2 ${
                              lensProfile && "cursor-sewingHS"
                            }`}
                            onClick={() => likeComment(comment?.id)}
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
                            ) : commentors?.[index]?.operations?.hasReacted ? (
                              <Image
                                src={`${INFURA_GATEWAY}/ipfs/Qmc3KCKWRgN8iKwwAPM5pYkAYNeVwWu3moa5RDMDTBV6ZS`}
                                width={12}
                                height={12}
                                alt="mirror"
                                draggable={false}
                              />
                            ) : (
                              <Image
                                src={`${INFURA_GATEWAY}/ipfs/QmSX1Y5cKp8p53jv2CnfQBuhu3dgLANjZMTyAMKtgFtvV6`}
                                width={12}
                                height={12}
                                alt="backward"
                                draggable={false}
                              />
                            )}
                            <div className="relative w-fit h-fit font-dosis text-xs text-white flex">
                              {comment?.stats?.reactions}
                            </div>
                          </div>
                          <div
                            className={`relative w-full h-full grid grid-flow-col auto-cols-auto items-center justify-end flex-row gap-2 cursor-sewingHS`}
                            onClick={() =>
                              dispatch(setSecondaryComment(comment?.id))
                            }
                          >
                            <Image
                              src={`${INFURA_GATEWAY}/ipfs/QmeuR9Fzv8QF9R6ntjGKB78GteQgmEcXhBfVPhsTyWbumA`}
                              width={12}
                              height={12}
                              alt="backward"
                              draggable={false}
                            />
                            <div className="relative w-fit h-fit font-dosis text-xs text-white flex">
                              {comment?.stats?.comments}
                            </div>
                          </div>
                        </div>
                        <div className="relative w-full h-full grid grid-cols-2 gap-2 items-center justify-end">
                          <div
                            className={`relative w-full h-full grid grid-flow-col auto-cols-auto items-center justify-end flex-row gap-2 ${
                              comment?.openActionModules?.[0]?.__typename ===
                                "SimpleCollectOpenActionSettings" &&
                              lensProfile &&
                              "cursor-sewingHS"
                            }`}
                            onClick={
                              comment?.openActionModules?.[0]?.__typename ===
                              "SimpleCollectOpenActionSettings"
                                ? Number(
                                    comment.openActionModules[0]?.amount?.value
                                  ) > 0 &&
                                  (!comment.openActionModules[0]
                                    ?.followerOnly ||
                                    (comment.openActionModules[0]
                                      ?.followerOnly &&
                                      lensProfile?.operations?.isFollowedByMe))
                                  ? () => collectComment(comment?.id)
                                  : comment?.openActionModules[0]
                                      ?.followerOnly &&
                                    !lensProfile?.operations?.isFollowedByMe
                                  ? () =>
                                      dispatch(
                                        setFollowerOnly({
                                          actionOpen: true,
                                          actionId: comment?.id,
                                          actionFollowerId: comment?.by?.id,
                                          actionIndex: index,
                                        })
                                      )
                                  : () =>
                                      dispatch(
                                        setPurchase({
                                          actionOpen: true,
                                          actionId: comment?.id,
                                          actionIndex: index,
                                        })
                                      )
                                : () => {}
                            }
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
                            ) : comment?.operations?.actedOn ? (
                              <Image
                                src={`${INFURA_GATEWAY}/ipfs/QmXG1mnHdBDXMzMZ9t1wE1Tqo8DRXQ1oNLUxpETdUw17HU`}
                                width={12}
                                height={12}
                                alt="collect"
                                draggable={false}
                              />
                            ) : (
                              <Image
                                src={`${INFURA_GATEWAY}/ipfs/QmRGf1cz8h9bdw9VKp9zYXZoDfy15nRA1fKc7ARhxnRPwr`}
                                width={12}
                                height={12}
                                alt="collect"
                                draggable={false}
                              />
                            )}
                            <div className="relative w-fit h-fit font-dosis text-xs text-white">
                              {comment?.stats?.countOpenActions}
                            </div>
                          </div>
                          <div
                            className={`relative w-full h-full grid grid-flow-col auto-cols-auto items-center justify-end flex-row gap-2 ${
                              lensProfile && "cursor-sewingHS"
                            }`}
                            onClick={() => mirrorComment(comment?.id)}
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
                            ) : commentors?.[index]?.operations?.hasMirrored ? (
                              <Image
                                src={`${INFURA_GATEWAY}/ipfs/QmcMNSnbKvUfx3B3iHBd9deZCDf7E4J8W6UtyNer3xoMsB`}
                                width={12}
                                height={12}
                                alt="mirror"
                                draggable={false}
                              />
                            ) : (
                              <Image
                                src={`${INFURA_GATEWAY}/ipfs/QmXZi8e6UQaXm3BMMdsAUTnxoQSEr97nvuc19v7kBAgFsY`}
                                width={12}
                                height={12}
                                alt="mirror"
                                draggable={false}
                              />
                            )}
                            <div className="relative w-fit h-fit font-dosis text-xs text-white">
                              {comment?.stats?.mirrors}
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
