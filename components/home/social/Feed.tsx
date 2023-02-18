import { FunctionComponent } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import moment from "moment";
import InfiniteScroll from "react-infinite-scroll-component";
import { FeedProps } from "../../../types/general.types";
import Image from "next/image";
import { AiFillEye, AiOutlineRetweet } from "react-icons/ai";
import { BsCollection, BsSuitHeart } from "react-icons/bs";

const Feed: FunctionComponent<FeedProps> = ({
  publicationsFeed,
  getMoreFeed,
  queryWindowSize,
  queryWindowSizeXL,
  reactionsFeed,
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
          ? "100rem"
          : "50rem"
      }
    >
      {publicationsFeed?.map((publication: any, index: number) => {
        let profileImage: string;
        if (
          !publication?.profile?.picture ||
          publication?.profile?.picture.original?.url.includes("svg") ||
          publication?.profile?.picture.original?.url.includes("object") ||
          publication?.profile?.picture.original?.url === undefined
        ) {
          profileImage = "/images/inaripfp.png";
        } else if (publication.profile.picture.original) {
          if (
            publication?.profile?.picture?.original?.url?.includes("http") ||
            publication?.profile?.picture?.original?.url?.includes("/ipfs/") ||
            publication?.mirrorOf?.profile?.picture?.original?.url?.includes(
              "http"
            ) ||
            publication?.mirrorOf?.profile?.picture?.original?.url?.includes(
              "/ipfs/"
            )
          ) {
            if (publication.__typename !== "Mirror") {
              profileImage = publication.profile.picture.original.url;
            } else {
              profileImage = publication.mirrorOf.profile.picture.original.url;
            }
          } else {
            if (publication.__typename !== "Mirror") {
              const cut = publication.profile.picture.original.url.split("//");
              profileImage = "https://thedial.infura-ipfs.io/ipfs/" + cut[1];
            } else {
              const cut =
                publication.mirrorOf.profile.picture.original.url.split("//");
              profileImage = "https://thedial.infura-ipfs.io/ipfs/" + cut[1];
            }
          }
        } else {
          if (publication.__typename !== "Mirror") {
            profileImage = publication.profile.picture.uri;
          } else {
            profileImage = publication.mirrorOf.profile.picture.uri;
          }
        }
        return (
          <div
            className="relative w-full h-auto row-start-1 grid grid-flow-col auto-cols-auto px-0 sm:px-3 py-4"
            key={index}
          >
            <div className="relative w-full h-fit col-start-1 justify-self-center grid grid-flow-col auto-cols-auto">
              <div
                key={index}
                className={`relative w-full h-fit row-start-${index} flex flex-row flex-wrap xl:flex-nowrap rounded-md z-0 gap-3`}
              >
                <div
                  className={`relative h-auto rounded-md pr-px py-px w-full xl:w-36 min-w-[7.5rem] col-start-1`}
                  id="sideProfile"
                >
                  <div
                    className={`relative w-full h-full bg-shame rounded-md flex flex-col items-center
                       py-1.5 px-1 gap-3
                    `}
                  >
                    <Image
                      src={`https://thedial.infura-ipfs.io/ipfs/QmSjh6dsibg9yDfBwRfC5YSWFTmwpwPxRDTFG8DzLHzFyB`}
                      layout="fill"
                      objectFit="cover"
                      className="absolute w-full h-full rounded-lg"
                    />
                    <div className="relative w-fit h-fit grid grid-flow-col auto-cols-auto justify-self-center">
                      <div
                        className={`w-20 relative h-8 rounded-full flex justify-self-center`}
                      >
                        <Image
                          src={`https://thedial.infura-ipfs.io/ipfs/QmfDmMCcgcseCFzGam9DbmDk5sQRbt6zrQVhvj4nTeuLGq`}
                          layout="fill"
                          alt="backdrop"
                          priority
                          draggable={false}
                          className="rounded-full w-full h-full"
                        />
                      </div>
                      <a
                        className={`absolute rounded-full flex w-8 h-full justify-self-center right-6 col-start-1 cursor-sewingHS active:scale-95 hover:opacity-80`}
                        id="crt"
                        target={"_blank"}
                        rel="noreferrer"
                        href={`/profile/${
                          publication?.__typename !== "Mirror"
                            ? publication?.profile?.handle?.split(".lens")[0]
                            : publication?.mirrorOf?.profile?.handle?.split(
                                ".lens"
                              )[0]
                        }`}
                      >
                        {profileImage !== "" && (
                          <Image
                            src={profileImage}
                            objectFit="cover"
                            alt="pfp"
                            layout="fill"
                            className="relative w-full h-full rounded-full"
                            draggable={false}
                          />
                        )}
                      </a>
                    </div>
                    <div className="relative w-full h-fit grid grid-flow-col auto-cols-auto">
                      <div
                        className={`relative w-fit h-fit font-dosis text-xs justify-self-center`}
                        id={"username"}
                      >
                        {publication?.__typename !== "Mirror"
                          ? publication?.profile?.name
                            ? publication?.profile?.name?.length > 25
                              ? publication?.profile?.name?.substring(0, 25) +
                                "..."
                              : publication?.profile?.name
                            : ""
                          : publication?.mirrorOf?.profile?.name
                          ? publication?.mirrorOf?.profile?.name?.length > 25
                            ? publication?.mirrorOf?.profile?.name?.substring(
                                0,
                                25
                              ) + "..."
                            : publication?.mirrorOf?.profile?.name
                          : ""}
                      </div>
                    </div>
                    <div className="relative w-full h-fit grid grid-flow-col auto-cols-auto">
                      <div
                        className={`relative w-fit h-fit ${
                          publication?.profile?.name
                            ? "row-start-2"
                            : "row-start-1"
                        } font-clash text-xs justify-self-center
                           text-black
                        `}
                      >
                        @
                        {publication?.__typename !== "Mirror"
                          ? publication?.profile?.handle?.length > 15
                            ? publication?.profile?.handle?.substring(0, 15) +
                              "..."
                            : publication?.profile?.handle
                          : publication?.mirrorOf?.profile?.handle?.length > 15
                          ? publication?.mirrorOf?.profile?.handle?.substring(
                              0,
                              15
                            ) + "..."
                          : publication?.mirrorOf?.profile?.handle}
                      </div>
                    </div>
                    <div className="relative w-full h-fit grid grid-flow-col auto-cols-auto">
                      <div
                        className={`relative w-fit h-fit text-offBlack font-dosis justify-self-center fo:pb-0 pb-2 text-xs `}
                      >
                        {moment(`${publication?.createdAt}`).fromNow()}
                      </div>
                    </div>
                    <div className="relative w-full h-full grid grid-flow-col auto-cols-auto items-end pt-3">
                      <div className="relative w-fit h-fit col-start-1 justify-self-center grid grid-flow-col auto-cols-auto gap-4">
                        <div className="relative w-fit h-fit col-start-1 row-start-1 grid grid-flow-col auto-cols-auto gap-2 place-self-center">
                          <div className="relative w-fit h-fit col-start-1 place-self-center  hover:opacity-70 active:scale-95">
                            <BsSuitHeart color={"red"} size={15} />
                          </div>
                          <div
                            className={`relative w-fit h-fit col-start-2 text-black font-dosis text-xs place-self-center`}
                          >
                            {!reactionsFeed?.[index] ? 0 : reactionsFeed[index]}
                          </div>
                        </div>
                        <div
                          className={`relative w-fit h-fit row-start-1 col-start-2 grid grid-flow-col auto-cols-auto gap-2 place-self-center`}
                        >
                          <div className="relative w-fit h-fit col-start-1 place-self-center  hover:opacity-70 active:scale-95">
                            <FaRegCommentDots color={"#0AC7AB"} size={15} />
                          </div>
                          <div
                            className={`relative w-fit h-fit col-start-2 text-black font-dosis text-xs place-self-center`}
                          >
                            {publication?.__typename === "Mirror"
                              ? (publication as any)?.mirrorOf?.stats
                                  ?.totalAmountOfComments
                              : (publication as any)?.stats
                                  ?.totalAmountOfComments}
                          </div>
                        </div>
                        <div
                          className={`relative w-fit h-fit row-start-2 col-start-1 grid grid-flow-col auto-cols-auto gap-2 place-self-center`}
                        >
                          <div className="relative w-fit h-fit col-start-1 place-self-center  hover:opacity-70 active:scale-95">
                            <AiOutlineRetweet color={"#712AF6"} size={15} />
                          </div>
                          <div
                            className={`relative w-fit h-fit col-start-2 text-black font-dosis text-xs place-self-center`}
                          >
                            {publication?.__typename === "Mirror"
                              ? (publication as any)?.mirrorOf?.stats
                                  ?.totalAmountOfMirrors
                              : (publication as any)?.stats
                                  ?.totalAmountOfMirrors}
                          </div>
                        </div>

                        <div
                          className={`relative w-fit h-fit row-start-2 col-start-2 grid grid-flow-col auto-cols-auto gap-2 place-self-center`}
                        >
                          <div className="relative w-fit h-fit col-start-1 place-self-center  hover:opacity-70 active:scale-95">
                            <BsCollection size={15} color={"#81A8F8"} />
                          </div>
                          <div
                            className={`relative w-fit h-fit col-start-2 text-black font-dosis text-xs place-self-center`}
                          >
                            {publication?.__typename === "Mirror"
                              ? (publication as any)?.mirrorOf?.stats
                                  ?.totalAmountOfCollects
                              : (publication as any)?.stats
                                  ?.totalAmountOfCollects}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-auto px-1 galaxy:px-2 py-6 sm:py-6 sm:px-6 bg-gradient-to-r from-offBlack via-gray-600 to-black drop-shadow-xl grid grid-flow-row auto-rows-auto place-self-center col-start-2 rounded-md gap-6">
                  {publication.__typename === "Mirror" && (
                    <div className="relative w-fit h-fit row-start-1 justify-self-end self-center grid grid-flow-col auto-cols-auto gap-2">
                      <div className="relative w-fit h-fit col-start-1 place-self-center text-xs font-dosis      text-offWhite">
                        {`Mirrored by @${publication?.profile?.handle}`}
                      </div>
                      <div className="relative w-fit h-fit col-start-2 place-self-center">
                        <AiOutlineRetweet color={"red"} size={15} />
                      </div>
                    </div>
                  )}
                  <div
                    className={`${
                      publication?.__typename === "Mirror"
                        ? "row-start-2"
                        : "row-start-1"
                    } relative w-full h-fit  text-left font-dosis grid grid-flow-row auto-rows-auto gap-6`}
                  >
                    <div className="relative w-full h-fit row-start-1 relative w-fit h-fit text-white font-dosis self-center text-sm sm:text-base justify-self-start">
                      <div className="relative grid grid-flow-col auto-cols-auto place-self-center">
                        {(publication as any)?.__typename !== "Mirror"
                          ? (publication as any)?.metadata?.description
                            ? (publication as any)?.metadata?.description
                            : (publication as any)?.metadata?.content
                          : (publication as any)?.mirrorOf?.metadata
                              ?.description
                          ? (publication as any)?.mirrorOf?.metadata
                              ?.description
                          : (publication as any)?.mirrorOf?.metadata?.content}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`relative w-fit max-w-full h-fit rounded-lg overflow-x-scroll grid grid-flow-col auto-cols-auto gap-3 ${
                      publication?.__typename === "Mirror"
                        ? "row-start-3"
                        : "row-start-2"
                    }`}
                  >
                    {(publication?.__typename === "Mirror"
                      ? publication?.mirrorOf?.metadata?.media
                      : publication?.metadata?.media
                    )?.map((image: any, index: number) => {
                      let formattedImageURL: string;

                      if (image.original.url.includes("ipfs://")) {
                        formattedImageURL = `https://thedial.infura-ipfs.io/ipfs/${
                          image.original.url?.split("://")[1]
                        }`;
                      } else {
                        formattedImageURL = image.original.url;
                      }

                      return (
                        <a
                          key={index}
                          className={`relative w-60 h-60 border-2 border-black rounded-lg bg-spots grid grid-flow-col auto-cols-auto col-start-${
                            index + 1
                          } cursor-sewingHS hover:opacity-70 active:scale-95`}
                          target="_blank"
                          rel="noreferrer"
                          href={formattedImageURL}
                        >
                          <div className="relative w-full h-full col-start-1 flex">
                            {image?.original?.mimeType !== "video/mp4" ? (
                              <Image
                                src={formattedImageURL}
                                layout="fill"
                                objectFit="cover"
                                objectPosition={"center"}
                                className="rounded-md"
                                draggable={false}
                              />
                            ) : (
                              <video
                                muted
                                controls
                                className="rounded-md absolute w-full h-full object-cover"
                              >
                                <source
                                  src={formattedImageURL}
                                  type="video/mp4"
                                />
                              </video>
                            )}
                          </div>
                        </a>
                      );
                    })}
                  </div>
                  <a
                    className={`relative w-full h-full ${
                      publication?.__typename === "Mirror"
                        ? "row-start-4"
                        : "row-start-3"
                    } grid grid-flow-col auto-cols-auto`}
                    target="_blank"
                    rel="noreferrer"
                    href={`https://lenster.xyz/posts/${publication?.id}`}
                  >
                    <div className="relative w-fit h-full col-start-1 row-start-1 xl:col-start-2 xl:pt-0 pt-3 justify-self-end self-center grid grid-flow-col auto-cols-auto font-dosis gap-1 cursor-sewingHS hover:opacity-70 active:scale-95 text-white">
                      <div className="relative w-fit h-fit self-end col-start-1 text-sm">
                        View Post
                      </div>
                      <div className="relative w-fit h-fit col-start-2 self-end">
                        <AiFillEye color={"white"} size={20} />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </InfiniteScroll>
  );
};

export default Feed;
