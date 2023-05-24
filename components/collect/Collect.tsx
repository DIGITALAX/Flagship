import Image from "next/image";
import { FunctionComponent, useContext, useEffect } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { useAccount } from "wagmi";
import { CollectContext } from "../../pages/collect/[name]";
import { CollectProps } from "../../types/general.types";

const Collect: FunctionComponent<CollectProps> = ({
  connect,
  token,
  errorMessage,
  collectNFT,
  isLoading,
  collectMarket,
  isSuccess,
  loading,
  data,
}): JSX.Element => {
  const { setShowApprovalModal, approvedData, approvedSuccess } =
    useContext(CollectContext);
  const { isConnected } = useAccount();

  useEffect(() => {
  }, [data, collectMarket]);

  let action = "COLLECT";

  const decideStringAction = () => {
    if (errorMessage && isConnected) {
      action = "ERROR";
    }

    if (!isConnected && !errorMessage) {
      action = "NOT_CONNECTED";
    }

    if (
      isConnected &&
      !errorMessage &&
      !approvedData &&
      !isSuccess &&
      !approvedSuccess
    ) {
      action = "APPROVE";
    }

    return action;
  };

  switch (decideStringAction()) {
    case "ERROR":
      return (
        <div className="relative w-28 h-10 row-start-1 font-firaL text-5xl text-black grid grid-flow-col auto-cols-auto border-2 border-black grid grid-flow-col auto-cols-auto p-1 bg-blue-500">
          <div className="col-start-1 relative w-fit h-fit text-[3vw] galaxy:text-[2.2vw] sm:text-[1.6vw] md:text-[1.3vw] lg:text-[1vw] xl:text-[0.7vw] font-fira place-self-center text-white text-center">
            INSUFFICIENT FUNDS{" "}
          </div>
        </div>
      );

    case "NOT_CONNECTED":
      return (
        <div
          className="relative w-28 h-10 row-start-1 font-firaL text-5xl text-black grid grid-flow-col auto-cols-auto border-2 border-black grid grid-flow-col auto-cols-auto p-1 bg-green-500"
          onClick={() => {
            if (connect.current) {
              connect.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
        >
          <div className="col-start-1 relative w-fit h-fit text-[3vw] galaxy:text-[2.2vw] sm:text-[1.6vw] md:text-[1.3vw] lg:text-[1vw] xl:text-[0.8vw] font-fira place-self-center text-white text-center hover:cursor-sewingHS">
            CONNECT WALLET{" "}
          </div>
        </div>
      );

    case "APPROVE":
      return (
        <div
          className="relative w-28 h-10 row-start-1 font-firaL text-5xl text-black grid grid-flow-col auto-cols-auto border-2 border-black grid grid-flow-col auto-cols-auto p-1 hover:bg-midBlue hover:cursor-sewingHS active:scale-95"
          onClick={() => setShowApprovalModal(true)}
        >
          <div className="col-start-1 relative w-fit h-fit hover:opacity-70 text-base font-fira place-self-center pr-2">
            COLLECT{" "}
          </div>
          <div className="col-start-2 w-4 h-4 relative w-fit h-fit place-self-center">
            <Image
              src="/images/expand2.png"
              layout="fill"
              alt="Expand"
              priority
              draggable={false}
            />
          </div>
        </div>
      );

    default:
      return (
        <div
          className="relative w-28 h-10 row-start-1 font-firaL text-5xl text-black grid grid-flow-col auto-cols-auto border-2 border-black grid grid-flow-col auto-cols-auto p-1 hover:bg-midBlue hover:cursor-sewingHS active:scale-95"
          onClick={
            token[0].type === "collection"
              ? () => collectNFT()
              : () => collectMarket()
          }
        >
          <div className="col-start-1 relative w-fit h-fit hover:opacity-70 text-base font-fira place-self-center pr-2">
            {(!isLoading && !isSuccess && !loading && "COLLECT ") ||
              (isSuccess && "SUCCESS ") ||
              ((isLoading || loading) && !isSuccess && (
                <div className="relative w-fit h-fit animate-spin">
                  <AiOutlineLoading color="#131313" />
                </div>
              ))}
          </div>
          <div className="col-start-2 w-4 h-4 relative w-fit h-fit place-self-center">
            <Image
              src="/images/expand2.png"
              layout="fill"
              alt="Expand"
              priority
              draggable={false}
            />
          </div>
        </div>
      );
  }
};

export default Collect;
