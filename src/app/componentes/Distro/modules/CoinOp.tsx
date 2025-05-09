import Image from "next/legacy/image";
import { FunctionComponent, JSX, useContext } from "react";
import InteractBar from "./InteractBar";
import PrintType from "./PrintType";
import { CoinOpProps, PrintType as PrintTagType } from "../types/distro.types";
import { ModalContext } from "@/app/providers";
import { Post } from "@lens-protocol/client";
import {
  INFURA_GATEWAY_INTERNAL,
  numberToItemTypeMap,
  printTypeToString,
} from "@/app/lib/constants";

const CoinOp: FunctionComponent<CoinOpProps> = ({
  publication,
  filterConstants,
}): JSX.Element => {
  const context = useContext(ModalContext);

  return (
    <div
      className="relative w-full h-fit flex items-end justify-center flex flex-col rounded-sm border border-cost p-4 gap-4 bg-amo/30"
      id={publication?.postId}
    >
      {publication?.metadata?.tags?.includes("kinora") && (
        <div
          className="w-full h-full rounded-sm flex top-0 left-0 absolute bg-nave"
          id="game"
        ></div>
      )}
      <InteractBar publication={publication?.publication as Post} />
      <div
        className="relative flex w-full h-100 items-center justify-center border border-white bg-amo/30 cursor-sewingHS"
        onClick={() =>
          context?.setImageViewer({
            type: "png",
            content: publication?.metadata?.images[0],
          })
        }
      >
        {publication?.metadata?.images?.[0] && (
          <Image
            layout="fill"
            src={`${INFURA_GATEWAY_INTERNAL}${
              publication?.metadata?.images?.[0]?.split("ipfs://")?.[1]
            }`}
            objectFit="cover"
            draggable={false}
          />
        )}
        <div className="absolute right-2 top-2 w-fit h-fit">
          {publication?.origin !== "4" ? (
            <>
              <PrintType
                printType={
                  printTypeToString[
                    Number(publication?.printType) as unknown as PrintTagType
                  ]
                }
              />
              {publication?.metadata?.onChromadin == "yes" && (
                <div
                  className="relative flex pt-3 flex-row gap-2 justify-start items-center w-fit h-full cursor-sewingHS active:scale-95"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(
                      `https://cypher.digitalax.xyz/item/chromadin/${publication?.metadata?.title
                        ?.replaceAll(" ", "_")
                        ?.replaceAll("_(Print)", "")}`
                    );
                  }}
                >
                  <div className="relative w-5 h-5 flex items-center justify-center">
                    <Image
                      layout="fill"
                      src={`${INFURA_GATEWAY_INTERNAL}QmcK1EJdp5HFuqPUds3WjgoSPmoomiWfiroRFa3bQUh5Xj`}
                      draggable={false}
                    />
                  </div>
                  <div className="relative w-5 h-5 flex items-center justify-center">
                    <Image
                      layout="fill"
                      src={`${INFURA_GATEWAY_INTERNAL}QmYzbyMb3okS1RKhxogJZWT56kCFjVcXZWk1aJiA8Ch2xi`}
                      draggable={false}
                    />
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="relative flex w-fit px-1.5 py-1 h-fit text-white font-aust gap-1 items-center justify-center">
              <div
                className="relative flex items-center justify-center w-7 h-7 hover:rotate-45"
                title={
                  filterConstants?.styles?.filter(
                    (item) =>
                      item?.[0]?.toLowerCase() ==
                      publication?.metadata?.style?.toLowerCase()
                  )?.[0]?.[0]
                }
              >
                <Image
                  layout="fill"
                  draggable={false}
                  src={`${INFURA_GATEWAY_INTERNAL}${
                    filterConstants?.styles?.filter(
                      (item) =>
                        item?.[0]?.toLowerCase() ==
                        publication?.metadata?.style?.toLowerCase()
                    )?.[0]?.[1]
                  }`}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="relative flex flex-row justify-between items-center w-full h-fit gap-1.5">
        <div className="relative flex flex-col items-start justify-center w-fit h-fit mr-auto gap-2">
          <div
            className={`relative items-start justify-center uppercase break-words font-bit text-nuba w-fit h-fit text-xl`}
          >
            {publication?.metadata?.title?.length > 20
              ? publication?.metadata?.title?.slice(0, 20) + "..."
              : publication?.metadata?.title}
          </div>
          <div
            className={`relative w-fit h-fit flex text-pez font-bit uppercase cursor-sewingHS text-sm`}
          >
            {publication?.profile?.username?.localName}
          </div>

          <div className="relative flex flex-row justify-start items-center w-fit h-fit gap-2">
            <div
              className="relative w-10 h-10 flex items-center justify-center cursor-sewingHS active:scale-95"
              onClick={() =>
                window.open(
                  `https://cypher.digitalax.xyz/item/${
                    numberToItemTypeMap[Number(publication?.origin)]
                  }/${publication?.metadata?.title?.replaceAll(" ", "_")}`
                )
              }
            >
              <Image
                layout="fill"
                src={`${INFURA_GATEWAY_INTERNAL}QmZ4v5pzdnCBeyKnS9VrjZiEAbUpAVy8ECArNcpxBt6Tw4`}
                draggable={false}
              />
            </div>

            <div
              className={`relative items-center justify-center uppercase break-words font-bit text-nuba w-fit h-fit text-xl`}
            >
              ${Number(publication?.price || 0)}
            </div>
          </div>
        </div>
        {publication?.metadata?.images?.slice(1)?.length > 0 && (
          <div className="relative ml-auto flex items-center justify-center w-20 h-20 rounded-sm border border-white bg-amo/30">
            <Image
              layout="fill"
              src={`${INFURA_GATEWAY_INTERNAL}${
                publication?.metadata?.images?.[1]?.split("ipfs://")?.[1]
              }`}
              objectFit="cover"
              draggable={false}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CoinOp;
