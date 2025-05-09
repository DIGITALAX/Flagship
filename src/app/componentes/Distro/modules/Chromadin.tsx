import Image from "next/legacy/image";
import { FunctionComponent, JSX, useContext } from "react";
import InteractBar from "./InteractBar";
import MediaSwitch from "./MediaSwitch";
import { ChromadinProps } from "../types/distro.types";
import { Post } from "@lens-protocol/client";
import { ModalContext } from "@/app/providers";
import { INFURA_GATEWAY, INFURA_GATEWAY_INTERNAL } from "@/app/lib/constants";

const Chromadin: FunctionComponent<ChromadinProps> = ({
  publication,
}): JSX.Element => {
  const context = useContext(ModalContext);

  return (
    <div
      className="relative w-full h-fit flex items-end justify-center flex flex-col rounded-sm border border-cost p-4 gap-4 bg-amo/30"
      id={publication?.postId}
    >
      <InteractBar publication={publication?.publication as Post} />
      <div className="relative flex flex-col items-center justify-start w-full h-fit gap-5">
        <div className="relative flex flex-row w-full justifty-between items-start h-fit gap-4">
          <div
            className="w-full h-72 rounded-sm bg-amo/30 border border-white cursor-sewingHS relative"
            onClick={() =>
              context?.setImageViewer({
                type: publication?.metadata?.mediaTypes?.[0],
                content: `${INFURA_GATEWAY}/ipfs/${
                  publication?.metadata?.mediaTypes?.[0] == "video"
                    ? publication?.metadata?.video?.split(
                        "ipfs://"
                      )?.[1]
                    : publication?.metadata?.mediaTypes?.[0] ==
                      "audio"
                    ? publication?.metadata?.mediaCover?.split(
                        "ipfs://"
                      )?.[1]
                    : publication?.metadata?.images?.[0]?.split(
                        "ipfs://"
                      )?.[1]
                }`,
              })
            }
          >
            <MediaSwitch
              type={publication?.metadata?.mediaTypes?.[0]}
              srcUrl={
                publication?.metadata?.mediaTypes?.[0] == "video"
                  ? publication?.metadata?.video
                  : publication?.metadata?.mediaTypes?.[0] == "audio"
                  ? `${INFURA_GATEWAY}/ipfs/${
                      publication?.metadata?.audio?.split(
                        "ipfs://"
                      )?.[1]
                    }`
                  : `${INFURA_GATEWAY}/ipfs/${
                      publication?.metadata?.images?.[0]?.split(
                        "ipfs://"
                      )?.[1]
                    }`
              }
              classNameVideo={{
                objectFit: "cover",
                display: "flex",
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyItems: "center",
                position: "relative",
              }}
              srcCover={
                publication?.metadata?.mediaTypes?.[0] == "video" ||
                publication?.metadata?.mediaTypes?.[0] == "audio"
                  ? `${INFURA_GATEWAY}/ipfs/${
                      publication?.metadata?.mediaCover?.split(
                        "ipfs://"
                      )?.[1]
                    }`
                  : undefined
              }
              hidden
            />
          </div>
        </div>
        <div className="relative flex flex-row justify-between gap-2 w-full h-fit items-center">
          <div className="relative gap-1 flex flex-col items-start justify-center">
            <div className="relative flex w-fit h-fit break-words text-nuba font-bit text-lg uppercase">
              {publication?.metadata?.title}
            </div>
            <div className="relative w-fit h-fit flex text-mos text-sm font-bit uppercase cursor-sewingHS">
              {publication?.profile?.username?.localName}
            </div>
          </div>
          <div
            className="relative w-fit h-fit flex items-end justify-center mb-0 cursor-sewingHS active:scale-95"
            onClick={() =>
              window.open(
                `https://cypher.digitalax.xyz/item/chromadin/${publication?.metadata?.title?.replaceAll(
                  " ",
                  "_"
                )}`
              )
            }
          >
            <div className="relative w-10 h-10 flex">
              <Image
                layout="fill"
                src={`${INFURA_GATEWAY_INTERNAL}QmZ4v5pzdnCBeyKnS9VrjZiEAbUpAVy8ECArNcpxBt6Tw4`}
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chromadin;
