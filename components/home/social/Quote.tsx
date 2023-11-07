import { FunctionComponent } from "react";
import ReactPlayer from "react-player";
import moment from "moment";
import createProfilePicture from "../../../lib/lens/helpers/createProfilePicture";
import Image from "next/image";
import { INFURA_GATEWAY } from "../../../lib/lens/constants";
import { FaRegCommentDots } from "react-icons/fa";
import { PublicationMetadataMedia, Comment } from "../../../types/generated";
import {
  metadataMedia,
  postMetadata,
} from "../../../lib/lens/helpers/postMetadata";
import descriptionRegex from "../../../lib/lens/helpers/descriptionRegex";
import { QuoteProps } from "../../../types/general.types";

const Quote: FunctionComponent<QuoteProps> = ({ publication }): JSX.Element => {
  const profileImage = createProfilePicture(publication?.by?.metadata?.picture);
  return (
    <div
      className={`relative w-full h-fit flex flex-row flex-wrap sm:flex-nowrap gap-6 rounded-md z-0`}
      data-post-id={publication?.id}
      id={publication?.id}
    >
      <div
        className={`relative h-auto rounded-md pr-px py-px w-full sm:w-40 preG:min-w-[7.5rem]`}
        id="sideProfile"
      >
        <div
          className={`relative w-full h-full bg-shame rounded-md flex flex-col items-start sm:items-center py-1.5 px-1 gap-3`}
        >
          <Image
            src={`${INFURA_GATEWAY}/ipfs/QmSjh6dsibg9yDfBwRfC5YSWFTmwpwPxRDTFG8DzLHzFyB`}
            layout="fill"
            objectFit="cover"
            className="absolute w-full h-full rounded-lg"
            draggable={false}
          />
          <div className="relative w-full h-fit grid grid-flow-col auto-cols-auto">
            <div
              className={`w-20 relative h-8 rounded-full flex justify-self-center`}
            >
              <Image
                src={`${INFURA_GATEWAY}/ipfs/QmfDmMCcgcseCFzGam9DbmDk5sQRbt6zrQVhvj4nTeuLGq`}
                layout="fill"
                alt="backdrop"
                priority
                draggable={false}
                className="rounded-full w-full h-full"
              />
            </div>
            <div
              className={`absolute rounded-full flex bg-white w-8 h-full justify-self-center sm:right-6 col-start-1`}
              id="crt"
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
            </div>
          </div>
          <div className="relative w-full h-fit grid grid-flow-col auto-cols-auto">
            <div
              className={`relative w-fit h-fit font-dosis text-xs justify-self-center`}
              id={"username"}
            >
              {publication?.by?.handle?.suggestedFormatted?.localName
                ? publication?.by?.handle?.suggestedFormatted?.localName
                    .length > 25
                  ? publication?.by?.handle?.suggestedFormatted?.localName.substring(
                      0,
                      20
                    ) + "..."
                  : publication?.by?.handle?.suggestedFormatted?.localName
                : ""}
            </div>
          </div>
          <div className="relative w-full h-fit grid grid-flow-col auto-cols-auto">
            <div
              className={`relative w-fit h-fit ${
                publication?.by?.handle?.localName
                  ? "row-start-2"
                  : "row-start-1"
              } font-clash text-xs justify-self-center text-black`}
            >
              {publication?.by?.handle?.localName?.length! > 15
                ? publication?.by?.handle?.localName?.substring(0, 10) + "..."
                : publication?.by?.handle?.suggestedFormatted?.localName}
            </div>
          </div>
          <div className="relative w-full h-fit grid grid-flow-col auto-cols-auto">
            <div
              className={`relative w-fit h-fit text-offBlack font-dosis justify-self-center fo:pb-0 pb-2 text-xs `}
            >
              {moment(`${publication?.createdAt}`).fromNow()}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`relative w-full h-auto grow rounded-md grid grid-flow-row auto-rows-auto p-3 preG:p-6 gap-6 border-2  bg-gradient-to-r ${
          (publication as any)?.gated
            ? "from-gray-400 via-gray-600 to-gray-800 border-white"
            : "from-offBlack via-gray-600 to-black border-black"
        }`}
      >
        {publication?.__typename === "Comment" && (
          <div
            className={`relative w-fit h-fit row-start-1 justify-self-end self-center grid grid-flow-col auto-cols-auto gap-2`}
          >
            <div
              className={`relative w-fit h-fit col-start-1 place-self-center text-xs font-dosis text-offWhite`}
            >
              Comment of{" "}
              {(publication as Comment)?.commentOn?.metadata?.content?.slice(
                0,
                10
              ) + "..."}
            </div>
            <div className="relative w-fit h-fit col-start-2 place-self-center">
              <FaRegCommentDots color={"red"} size={15} />
            </div>
          </div>
        )}
        <div
          className={`${
            publication?.__typename === "Comment"
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
                    : publication?.metadata?.content
                ),
              }}
              className="relative place-self-center whitespace-preline break-all preG:break-words"
            ></div>
          </div>
        </div>
        <div
          className={`relative w-fit max-w-full h-fit rounded-lg overflow-x-scroll grid grid-flow-col auto-cols-auto gap-3 z-10 ${
            publication?.__typename === "Comment"
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
                    } `}
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
      </div>
    </div>
  );
};

export default Quote;
