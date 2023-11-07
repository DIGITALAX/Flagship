import moment from "moment";
import Image from "next/image";
import { INFURA_GATEWAY } from "../../../lib/lens/constants";
import createProfilePicture from "../../../lib/lens/helpers/createProfilePicture";
import { FunctionComponent } from "react";
import { ProfileSideBarProps } from "../../../types/general.types";
import { Post } from "../../../types/generated";
import Reactions from "./Reactions";

const Profile: FunctionComponent<ProfileSideBarProps> = ({
  publication,
  dispatch
}): JSX.Element => {
  const profileImage = createProfilePicture(
    publication?.__typename === "Mirror"
      ? publication?.mirrorOn?.by?.metadata?.picture
      : publication?.by?.metadata?.picture
  );
  return (
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
            className={`absolute rounded-full flex bg-white w-8 h-full justify-self-center sm:right-6 col-start-1 cursor-sewingHS active:scale-95 hover:opacity-80`}
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
            {publication?.__typename !== "Mirror"
              ? publication?.by?.handle?.suggestedFormatted?.localName
                ? publication?.by?.handle?.suggestedFormatted?.localName
                    .length > 25
                  ? publication?.by?.handle?.suggestedFormatted?.localName.substring(
                      0,
                      20
                    ) + "..."
                  : publication?.by?.handle?.suggestedFormatted?.localName
                : ""
              : publication?.mirrorOn?.by?.handle?.suggestedFormatted?.localName
              ? publication?.mirrorOn?.by?.handle?.suggestedFormatted?.localName
                  ?.length > 20
                ? publication?.mirrorOn?.by?.handle?.suggestedFormatted?.localName?.substring(
                    0,
                    25
                  ) + "..."
                : publication?.mirrorOn?.by?.handle?.suggestedFormatted
                    ?.localName
              : ""}
          </div>
        </div>
        <div className="relative w-full h-fit grid grid-flow-col auto-cols-auto">
          <div
            className={`relative w-fit h-fit ${
              publication?.by?.handle?.localName ? "row-start-2" : "row-start-1"
            } font-clash text-xs justify-self-center text-black`}
          >
            {publication?.__typename !== "Mirror"
              ? publication?.by?.handle?.localName?.length! > 15
                ? publication?.by?.handle?.localName?.substring(0, 10) + "..."
                : publication?.by?.handle?.suggestedFormatted?.localName
              : publication?.mirrorOn?.by?.handle?.suggestedFormatted?.localName
                  .length! > 15
              ? publication?.mirrorOn?.by?.handle?.suggestedFormatted?.localName?.substring(
                  0,
                  10
                ) + "..."
              : publication?.mirrorOn?.by?.handle?.suggestedFormatted
                  ?.localName}
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
          <Reactions
            dispatch={dispatch}
            publication={publication}
            textColor={"black"}
            commentColor={"#0AC7AB"}
            mirrorColor={"#712AF6"}
            collectColor={"#81A8F8"}
            heartColor={"red"}
            reactAmount={
              publication?.__typename === "Mirror"
                ? publication?.mirrorOn?.stats?.reactions
                : (publication as Post)?.stats?.reactions
            }
            collectAmount={
              publication?.__typename === "Mirror"
                ? publication?.mirrorOn?.stats?.countOpenActions
                : (publication as Post)?.stats?.countOpenActions
            }
            mirrorAmount={
              publication?.__typename === "Mirror"
                ? publication?.mirrorOn?.stats?.mirrors
                : (publication as Post)?.stats?.mirrors
            }
            commentAmount={
              publication?.__typename === "Mirror"
                ? publication?.mirrorOn?.stats?.comments
                : (publication as Post)?.stats?.comments
            }
            hasCollected={
              publication?.__typename === "Mirror"
                ? publication?.mirrorOn?.operations?.hasActed
                    ?.isFinalisedOnchain
                : (publication as Post)?.operations?.hasActed
                    ?.isFinalisedOnchain
            }
            hasMirrored={
              publication?.__typename === "Mirror"
                ? publication?.mirrorOn?.operations?.hasMirrored
                : (publication as Post)?.operations?.hasMirrored
            }
            hasReacted={
              publication?.__typename === "Mirror"
                ? publication?.mirrorOn?.operations?.hasReacted
                : (publication as Post)?.operations?.hasReacted
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
