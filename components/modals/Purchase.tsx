import { FunctionComponent } from "react";
import { ImCross } from "react-icons/im";
import { AiOutlineLoading } from "react-icons/ai";
import moment from "moment";
import { setPurchase } from "../../redux/reducers/purchaseSlice";
import CollectInfo from "./Lens/CollectInfo";
import { PurchaseProps } from "../../types/general.types";

const Purchase: FunctionComponent<PurchaseProps> = ({
  collectInfoLoading,
  approvalLoading,
  address,
  collectModuleValues,
  lensProfile,
  collectComment,
  collectLoading,
  approveCurrency,
  handleLensSignIn,
  commentId,
  dispatch,
  openConnectModal,
}): JSX.Element => {
  return (
    <div className="inset-0 justify-center fixed z-50 bg-opacity-50 backdrop-blur-sm overflow-y-hidden grid grid-flow-col auto-cols-auto w-full h-auto">
      <div
        className="relative w-full md:w-[22rem] h-fit col-start-1 place-self-center rounded-lg p-px bg-offBlack flex flex-col border border-white"
        id="modal"
      >
        <div
          className="relative w-full h-fit justify-end pr-3 pt-3 cursor-sewingHS flex"
          onClick={() =>
            dispatch(
              setPurchase({
                actionOpen: false,
                actionId: "",
                actionIndex: undefined,
              })
            )
          }
        >
          <ImCross color="white" size={15} />
        </div>
        <div className="relative w-full h-fit flex flex-col p-3">
          {!collectInfoLoading ? (
            collectModuleValues?.canCollect ? (
              <CollectInfo
                buttonText={"Collected"}
                canClick={false}
                collectLoading={collectLoading}
                handleLensSignIn={handleLensSignIn}
                commentId={commentId}
                openConnectModal={openConnectModal}
                address={address}
                lensProfile={lensProfile}
              />
            ) : (
              <CollectInfo
                approvalLoading={approvalLoading}
                buttonText={
                  collectModuleValues?.type === "FreeCollectModule" ||
                  (collectModuleValues?.type === "SimpleCollectModule" &&
                    !collectModuleValues.amount &&
                    !collectModuleValues.optionalCollectLimit &&
                    !collectModuleValues.optionalEndTimestamp)
                    ? "Collect"
                    : (collectModuleValues?.endTime &&
                        !moment(collectModuleValues?.endTime).isAfter()) ||
                      collectModuleValues?.totalCollects ===
                        Number(collectModuleValues?.limit)
                    ? "Collect Period Over"
                    : collectModuleValues?.isApproved &&
                      !collectModuleValues?.canCollect
                    ? "Collect"
                    : "Approve"
                }
                symbol={collectModuleValues?.amount?.asset?.symbol}
                value={collectModuleValues?.amount?.value}
                limit={collectModuleValues?.limit}
                time={collectModuleValues?.endTime}
                totalCollected={collectModuleValues?.totalCollects}
                canClick={
                  (address &&
                    lensProfile &&
                    collectModuleValues?.endTime &&
                    !moment(collectModuleValues?.endTime).isAfter()) ||
                  (address &&
                    lensProfile &&
                    Number(collectModuleValues?.limit) > 0 &&
                    Number(collectModuleValues?.totalCollects) ===
                      Number(collectModuleValues?.limit))
                    ? false
                    : true
                }
                isApproved={collectModuleValues?.isApproved}
                approveCurrency={approveCurrency}
                handleCollect={collectComment}
                collectLoading={collectLoading}
                handleLensSignIn={handleLensSignIn}
                commentId={commentId}
                openConnectModal={openConnectModal}
                address={address}
                lensProfile={lensProfile}
              />
            )
          ) : (
            <div className="relative w-[40vw] md:w-full h-60 flex flex-col">
              <div className="relative w-fit h-fit col-start-1 place-self-center animate-spin">
                <AiOutlineLoading color="black" size={20} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Purchase;
