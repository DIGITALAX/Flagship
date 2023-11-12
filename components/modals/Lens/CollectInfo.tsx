import Image from "next/legacy/image";
import { FunctionComponent, useEffect } from "react";
import moment from "moment";
import { AiOutlineLoading } from "react-icons/ai";
import { INFURA_GATEWAY } from "../../../lib/lens/constants";
import { CollectInfoProps } from "../../../types/general.types";

const CollectInfo: FunctionComponent<CollectInfoProps> = ({
  buttonText,
  symbol,
  value,
  limit,
  time,
  totalCollected,
  canClick,
  isApproved,
  handleCollect,
  approveCurrency,
  collectLoading,
  approvalLoading,
  handleLensSignIn,
  commentId,
  openConnectModal,
  lensProfile,
  address,
}): JSX.Element => {
  useEffect(() => {
    //collect refresh
  }, [approvalLoading]);
  return (
    <div className="relative w-full h-full flex flex-row text-center gap-3 items-center">
      <div className="relative w-full h-60 flex p-2">
        <Image
          src={`${INFURA_GATEWAY}/ipfs/QmcHYeemWE3z8qy7m42pJbasYzyvMRWNPRMfXvSNz6XKoK`}
          layout="fill"
          objectFit="cover"
          className="relative w-fit h-fit flex rounded-md"
          draggable={false}
        />
      </div>
      <div className="relative w-full h-full flex flex-col font-xs text-white text-center gap-3 items-center">
        <div className="relative w-full h-fit text-ama font-xs text-lg items-center text-center justify-center text-sm">
          {value} {symbol}
        </div>
        {(limit || time) && (
          <div className="relative w-full h-full items-center text-center justify-center gap-2 flex flex-col">
            {limit && (
              <div className="relative w-fit h-fitplace-self-center flex">
                Limited Edition:
                <br />
                {totalCollected} / {limit}
              </div>
            )}
            {time && moment(time).isAfter() && (
              <div
                className={`relative w-fit h-fit place-self-center grid grid-flow-row auto-rows-auto text-xs`}
              >
                <div className="relative w-fit h-fit row-start-1 place-self-center">
                  Time Left to Collect:
                </div>
                <div className="relative w-fit h-fit row-start-2 place-self-center">
                  {moment(`${time}`).fromNow().includes("in")
                    ? moment(`${time}`).fromNow().split("in")[1]
                    : moment(`${time}`).fromNow()}
                </div>
              </div>
            )}
          </div>
        )}
        <div
          className={`relative w-20 h-10 rounded-md grid grid-flow-col auto-cols-auto text-white font-vcr text-xs place-self-center text-center bg-moda ${
            canClick && "cursor-sewingHS hover:opacity-70 active:scale-95"
          } row-start-2`}
        >
          {collectLoading || approvalLoading ? (
            <div className="relative w-fit h-fit animate-spin col-start-1 place-self-center text-center">
              <AiOutlineLoading color="white" size={15} />
            </div>
          ) : !canClick ? (
            <div className="relative w-full h-fit col-start-1 place-self-center text-center">
              {buttonText}
            </div>
          ) : !address ? (
            <div
              className="relative w-full h-fit col-start-1 place-self-center text-center"
              onClick={openConnectModal}
            >
              Connect
            </div>
          ) : !lensProfile ? (
            <div
              className="relative w-full h-fit col-start-1 place-self-center text-center"
              onClick={() => handleLensSignIn()}
            >
              Sign In
            </div>
          ) : (
            <div
              className="relative w-full h-fit col-start-1 place-self-center text-center"
              onClick={() => {
                isApproved
                  ? handleCollect && handleCollect(commentId)
                  : approveCurrency && approveCurrency();
              }}
            >
              {buttonText}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollectInfo;
