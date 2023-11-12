import { FunctionComponent } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import InfiniteScroll from "react-infinite-scroll-component";
import { FeedProps } from "../../../types/general.types";
import Image from "next/legacy/image";
import { AiFillEye, AiOutlineRetweet } from "react-icons/ai";
import ReactPlayer from "react-player";
import descriptionRegex from "../../../lib/lens/helpers/descriptionRegex";
import {
  Post,
  Comment,
  PublicationMetadataMedia,
  Quote as QuoteType,
  Mirror,
} from "../../../types/generated";
import Quote from "./Quote";
import {
  metadataMedia,
  postMetadata,
} from "../../../lib/lens/helpers/postMetadata";
import { setImageViewer } from "../../../redux/reducers/imageViewerSlice";
import Profile from "./Profile";

const Feed: FunctionComponent<FeedProps> = ({
  publicationsFeed,
  getMoreFeed,
  queryWindowSize,
  queryWindowSizeXL,
  dispatch,
}): JSX.Element => {
  return (
    <InfiniteScroll
      dataLength={publicationsFeed?.length}
      next={getMoreFeed}
      hasMore={true}
      loader={""}
      height={
        queryWindowSize
          ? "35rem"
          : !queryWindowSizeXL && !queryWindowSize
          ? "80rem"
          : "50rem"
      }
      className="relative w-full h-full gap-6 grid grid-flow-row auto-rows-auto"
    >
      {publicationsFeed?.map(
        (publication: Post | Mirror | QuoteType, index: number) => {
          return (
            <div
              className={`relative w-full h-full flex flex-row flex-wrap sm:flex-nowrap gap-6 rounded-md z-0`}
              data-post-id={publication?.id}
              id={publication?.id}
              key={index}
            >
              <Profile publication={publication} dispatch={dispatch} />
              <div
                className={`relative w-full h-auto grow rounded-md grid grid-flow-row auto-rows-auto p-3 preG:p-6 gap-6 border-2  bg-gradient-to-r ${
                  (publication as any)?.gated
                    ? "from-gray-400 via-gray-600 to-gray-800 border-white"
                    : "from-offBlack via-gray-600 to-black border-black"
                }`}
              >
                {publication?.__typename === "Mirror" && (
                  <div
                    className={`relative w-fit h-fit row-start-1 justify-self-end self-center grid grid-flow-col auto-cols-auto gap-2`}
                  >
                    <div
                      className={`relative w-fit h-fit col-start-1 place-self-center text-xs font-dosis text-offWhite`}
                    >
                      Mirrored by
                      {
                        publication?.by?.handle?.suggestedFormatted?.localName?.split(
                          "@"
                        )[1]
                      }
                    </div>
                    <div className="relative w-fit h-fit col-start-2 place-self-center">
                      {publication?.__typename === "Mirror" ? (
                        <AiOutlineRetweet color={"red"} size={15} />
                      ) : (
                        <FaRegCommentDots color={"red"} size={15} />
                      )}
                    </div>
                  </div>
                )}
                <div
                  className={`${
                    publication?.__typename === "Mirror"
                      ? "row-start-2"
                      : "row-start-1"
                  } relative w-full h-fit text-left font-dosis grid grid-flow-row auto-rows-auto gap-6`}
                >
                  <div
                    className={`relative w-full h-fit row-start-1 relative h-fit text-white font-dosis self-center justify-self-start break-all preG:break-words`}
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: descriptionRegex(
                          (publication as any)?.gated
                            ? (publication as any)?.result?.content
                            : publication?.__typename !== "Mirror"
                            ? (publication as Post)?.metadata?.content
                            : publication?.mirrorOn?.metadata?.content
                        ),
                      }}
                      className="relative place-self-center whitespace-preline break-all preG:break-words"
                    ></div>
                  </div>
                </div>
                <div
                  className={`relative w-fit max-w-full h-fit rounded-lg overflow-x-scroll grid grid-flow-col auto-cols-auto gap-3 z-10 ${
                    publication?.__typename === "Mirror"
                      ? "row-start-3"
                      : "row-start-2"
                  }`}
                >
                  {postMetadata(publication) &&
                    postMetadata(publication)?.map(
                      (item: PublicationMetadataMedia, index: number) => {
                        const media = metadataMedia(item);
                        return (
                          <div
                            key={index}
                            className={`${
                              media?.type !== "Audio"
                                ? "h-40 preG:h-60 border-2 border-black rounded-lg bg-black"
                                : "h-10"
                            } w-40  preG:w-60 relative grid grid-flow-col auto-cols-auto col-start-${
                              index + 1
                            } ${
                              media?.type === "Image" &&
                              "cursor-sewingHS hover:opacity-70 active:scale-95"
                            } `}
                            onClick={() =>
                              media?.type === "Image" &&
                              dispatch(
                                setImageViewer({
                                  actionType: media?.type,
                                  actionValue: true,
                                  actionImage: media?.url,
                                })
                              )
                            }
                          >
                            <div className="relative w-full h-full col-start-1 flex rounded-md">
                              {media?.type === "Image" ? (
                                <Image
                                  src={media?.url}
                                  layout="fill"
                                  objectFit="cover"
                                  objectPosition={"center"}
                                  className="rounded-md"
                                  draggable={false}
                                />
                              ) : media?.type === "Audio" ? (
                                <audio
                                  muted
                                  controls
                                  className="rounded-md absolute w-full h-full object-cover"
                                >
                                  <source src={media?.url} />
                                </audio>
                              ) : media?.url?.includes("index") ||
                                media?.url?.includes("gw.ipfs-lens.dev") ? (
                                <div className="rounded-md absolute w-full h-full object-cover">
                                  <ReactPlayer
                                    url={media?.url}
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
                                  className="rounded-md absolute w-full h-full object-cover"
                                >
                                  <source src={media?.url} />
                                </video>
                              )}
                            </div>
                          </div>
                        );
                      }
                    )}
                </div>
                {publication?.__typename === "Quote" && (
                  <div
                    className="relative w-full h-fit px-3 py-1 flex items-start justify-center"
                    id="fadedQuote"
                  >
                    <div className="relative w-full h-fit p-2 flex items-center justify-start flex-col from-gray-400 via-gray-600 to-gray-800 bg-gradient-to-r rounded-md gap-5">
                      <div className="relative w-full h-fit flex items-end justify-end">
                        <div
                          className={`relative w-fit h-fit row-start-1 justify-self-end self-center grid grid-flow-col auto-cols-auto gap-2 cursor-sewingHS`}
                        >
                          <div
                            className={`relative w-fit h-fit col-start-1 place-self-center text-xs font-dosis text-offWhite`}
                          >
                            Quote on{" "}
                            {publication?.quoteOn?.metadata?.content?.slice(
                              0,
                              10
                            ) + "..."}
                          </div>
                          <div className="relative w-fit h-fit col-start-2 place-self-center">
                            <AiOutlineRetweet color={"white"} size={15} />
                          </div>
                        </div>
                      </div>
                      <div className="relative w-full h-fit flex cursor-sewingHS">
                        <Quote publication={publication?.quoteOn} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        }
      )}
    </InfiniteScroll>
  );
};

export default Feed;
