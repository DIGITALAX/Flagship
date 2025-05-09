import Image from "next/legacy/image";
import { FunctionComponent, JSX, useContext } from "react";
import InteractBar from "./InteractBar";
import PrintType from "./PrintType";
import {
  ListenerProps,
  PrintType as PrintTagType,
} from "./../types/distro.types";
import { INFURA_GATEWAY, INFURA_GATEWAY_INTERNAL, printTypeToString } from "@/app/lib/constants";
import { Post } from "@lens-protocol/client";
import { ModalContext } from "@/app/providers";

const Listener: FunctionComponent<ListenerProps> = ({
  publication,
}): JSX.Element => {
  const context = useContext(ModalContext);
  return (
    <div
      className="relative w-full h-fit flex items-end justify-center flex rounded-sm border border-cost bg-amo/30"
      id={publication?.postId}
    >
      <div
        id="explainerBg"
        className="relative w-full h-full flex items-end justify-center flex-col gap-4 p-4"
      >
        <div className="absolute w-full h-full mix-blend-hard-light bg-listener opacity-60 bg-center bg-cover right-0 top-0"></div>
        <InteractBar publication={publication?.publication as Post} />
        <div
          className="relative flex w-full h-100 items-center justify-center border border-white bg-amo/30 cursor-sewingHS"
          onClick={() =>
            context?.setImageViewer({
              type: publication?.metadata?.mediaTypes?.[0],
              content: `${INFURA_GATEWAY}/ipfs/${
                publication?.metadata?.images?.[0]?.split(
                  "ipfs://"
                )?.[1]
              }`,
            })
          }
        >
          {publication?.metadata?.images && (
            <Image
              layout="fill"
              src={`${INFURA_GATEWAY_INTERNAL}${
                publication?.metadata?.images?.[0]?.split(
                  "ipfs://"
                )?.[1]
              }`}
              objectFit="cover"
              draggable={false}
            />
          )}
          <div className="absolute right-2 top-2 w-fit h-fit">
            <PrintType
              printType={
                printTypeToString[
                  Number(publication?.printType) as unknown as PrintTagType
                ]
              }
            />
          </div>
        </div>
        <div className="relative flex flex-row justify-between items-center w-full h-fit gap-1.5">
          <div className="relative flex flex-col items-start justify-center w-fit h-fit mr-auto gap-2">
            <div
              className={`relative items-start justify-center uppercase break-words font-ignite w-fit h-fit text-xl`}
              id="noCode"
            >
              {publication?.metadata?.title?.length > 20
                ? publication?.metadata?.title?.slice(0, 20) + "..."
                : publication?.metadata?.title}
            </div>
            <div
              className={`relative w-fit h-fit flex text-white font-vcr uppercase text-sm`}
            >
              {publication?.profile?.username?.localName}
            </div>

            <div className="relative flex flex-row justify-start items-center w-fit h-fit gap-2">
              <div
                className="relative w-10 h-10 flex items-center justify-center cursor-sewingHS active:scale-95"
                onClick={() =>
                  window.open(
                    `https://cypher.digitalax.xyz/item/listener/${publication?.metadata?.title?.replaceAll(
                      " ",
                      "_"
                    )}`
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
                className={`relative items-center justify-center uppercase break-words font-vcr text-ballena w-fit h-fit text-2xl`}
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
                  publication?.metadata?.images?.[1]?.split(
                    "ipfs://"
                  )?.[1]
                }`}
                objectFit="cover"
                draggable={false}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Listener;
