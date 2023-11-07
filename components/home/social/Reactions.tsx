import { FunctionComponent } from "react";
import {
  BsSuitHeartFill,
  BsSuitHeart,
  BsCollection,
  BsFillCollectionFill,
} from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { setReactionState } from "../../../redux/reducers/reactionStateSlice";
import {
  OpenActionModuleType,
  Post,
  SimpleCollectOpenActionSettings,
} from "../../../types/generated";
import { ReactionProps } from "../../../types/general.types";

const Reactions: FunctionComponent<ReactionProps> = ({
  textColor,
  commentColor,
  mirrorColor,
  heartColor,
  collectColor,
  dispatch,
  publication,
  hasMirrored,
  hasReacted,
  hasCollected,
  reactAmount,
  collectAmount,
  mirrorAmount,
  commentAmount,
}): JSX.Element => {
  return (
    <div
      className={`relative w-fit h-fit col-start-1 justify-self-center grid grid-flow-col auto-cols-auto gap-4`}
    >
      <div className="relative w-fit h-fit col-start-1 row-start-1 grid grid-flow-col auto-cols-auto gap-2 place-self-center">
        <div
          className={`relative w-fit h-fit col-start-1 place-self-center hover:opacity-70 active:scale-95`}
        >
          {reactAmount > 0 && hasReacted ? (
            <BsSuitHeartFill size={15} color={heartColor} />
          ) : (
            <BsSuitHeart color={heartColor} size={15} />
          )}
        </div>
        <div
          className={`relative w-fit h-fit col-start-2 text-${textColor} font-dosis text-xs place-self-center ${
            reactAmount > 0 && "cursor-sewingHS"
          }`}
          onClick={() =>
            reactAmount > 0 &&
            dispatch(
              setReactionState({
                actionOpen: true,
                actionType: "heart",
                actionValue:
                  publication?.__typename === "Mirror"
                    ? publication?.mirrorOn?.id
                    : publication?.id,
                actionResponseReact: hasReacted,
              })
            )
          }
        >
          {reactAmount}
        </div>
      </div>
      <div
        className={`relative w-fit h-fit row-start-1 col-start-2 grid grid-flow-col auto-cols-auto gap-2 place-self-center`}
      >
        <div
          className={`relative w-fit h-fit col-start-1 place-self-center hover:opacity-70 active:scale-95`}
        >
          <FaRegCommentDots color={commentColor} size={15} />
        </div>
        <div
          className={`relative w-fit h-fit col-start-2 text-${textColor} font-dosis text-xs place-self-center ${
            commentAmount > 0 && "cursor-sewingHS"
          }`}
        >
          {commentAmount}
        </div>
      </div>
      <div
        className={`relative w-fit h-fit row-start-2 col-start-1 grid grid-flow-col auto-cols-auto gap-2 place-self-center`}
      >
        <div
          className={`relative w-fit h-fit col-start-1 place-self-center hover:opacity-70 active:scale-95`}
        >
          <AiOutlineRetweet
            color={mirrorAmount > 0 && hasMirrored ? "red" : mirrorColor}
            size={15}
          />
        </div>
        <div
          className={`relative w-fit h-fit col-start-2 text-${textColor} font-dosis text-xs place-self-center`}
          onClick={() =>
            mirrorAmount > 0 &&
            dispatch(
              setReactionState({
                actionOpen: true,
                actionType: "mirror",
                actionValue:
                  publication?.__typename === "Mirror"
                    ? publication?.mirrorOn?.id
                    : publication?.id,
                actionResponseMirror: hasMirrored,
                actionFollower:
                  publication?.__typename === "Mirror"
                    ? (
                        publication?.mirrorOn
                          ?.openActionModules?.[0] as SimpleCollectOpenActionSettings
                      )?.followerOnly
                    : (
                        (publication as Post)
                          ?.openActionModules?.[0] as SimpleCollectOpenActionSettings
                      )?.followerOnly,
              })
            )
          }
        >
          {mirrorAmount}
        </div>
      </div>
      {(publication?.__typename === "Mirror"
        ? publication?.mirrorOn
        : (publication as Post)
      )?.openActionModules?.[0]?.type ==
        OpenActionModuleType.SimpleCollectOpenActionModule && (
        <div
          className={`relative w-fit h-fit row-start-2 col-start-2 grid grid-flow-col auto-cols-auto gap-2 place-self-center`}
        >
          <div
            className={`relative w-fit h-fit col-start-1 place-self-center hover:opacity-70 active:scale-95`}
          >
            {hasCollected ? (
              <BsFillCollectionFill size={15} color={collectColor} />
            ) : (
              <BsCollection size={15} color={collectColor} />
            )}
          </div>
          <div
            onClick={() =>
              collectAmount > 0 &&
              dispatch(
                setReactionState({
                  actionOpen: true,
                  actionType: "collect",
                  actionValue:
                    publication?.__typename === "Mirror"
                      ? publication?.mirrorOn?.id
                      : publication?.id,
                })
              )
            }
            className={`relative w-fit h-fit col-start-2 text-${textColor} font-dosis text-xs place-self-center ${
              collectAmount > 0 && "cursor-sewingHS"
            }`}
          >
            {collectAmount}
          </div>
        </div>
      )}
    </div>
  );
};

export default Reactions;
