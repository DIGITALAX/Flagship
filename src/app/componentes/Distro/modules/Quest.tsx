import Image from "next/legacy/image";
import { FunctionComponent, JSX } from "react";
import InteractBar from "./InteractBar";
import { QuestProps } from "../types/distro.types";
import { INFURA_GATEWAY_INTERNAL } from "@/app/lib/constants";

const Quest: FunctionComponent<QuestProps> = ({
  publication,
  dict,
}): JSX.Element => {
  return (
    <div
      className="relative w-full h-fit flex items-center justify-center flex rounded-sm border border-cost bg-black"
      id={publication?.pubId}
    >
      <div
        className="relative w-full h-fit items-center justify-center flex flex-col p-4 gap-4"
        id="game"
      >
        <InteractBar publication={publication?.publication} />
        <div className="relative flex flex-row gap-2 flex-wrap w-full h-fit justify-start">
          <div
            className="relative w-fit h-fit flex items-center justify-center cursor-sewingHS"
            onClick={() => window.open(`https://kinora.irrevocable.dev/`)}
          >
            <div className="w-4 h-4 relative flex items-center justify-center">
              <Image
                width={60}
                height={60}
                priority
                draggable={false}
                src={`${INFURA_GATEWAY_INTERNAL}QmbkoC8UbWJS49X6sxyBNfro8guEokUoT74KvaC6DfdmNg`}
              />
            </div>
          </div>
          <div className="font-bit text-sm text-cost">Kinora Quest</div>
        </div>
        <div className="relative w-full h-fit items-center justify-center flex flex-row gap-4">
          <div className="relative p-2 rounded-sm border border-suave w-full h-20 items-center justify-center flex bg-amo/30">
            <div className="absolute top-0 left-0 w-full h-full rounded-sm">
              <Image
                className="rounded-sm"
                layout="fill"
                draggable={false}
                src={`${INFURA_GATEWAY_INTERNAL}${
                  publication?.questMetadata?.cover?.split("ipfs://")?.[1]
                }`}
                objectFit="cover"
              />
            </div>
          </div>
          <div className="relative flex flex-col w-fit h-fit items-center justify-center gap-4">
            <div
              className="relative flex items-center justify-center w-7 h-7 rounded-full cursor-sewingHS"
              onClick={() =>
                window.open(
                  `https://cypher.digitalax.xyz/autograph/${
                    publication?.publication?.author?.username?.localName?.split(
                      "@"
                    )?.[1]
                  }`
                )
              }
              id="pfp"
            >
              {publication?.publication?.author?.metadata?.picture && (
                <Image
                  layout="fill"
                  src={publication?.publication?.author?.metadata?.picture}
                  draggable={false}
                  className="rounded-full"
                  objectFit="cover"
                />
              )}
            </div>
            <div className="relative flex flex-row gap-2 w-fit h-fit items-center justify-center">
              <div
                className="relative w-8 h-8 flex items-center justify-center cursor-sewingHS active:scale-95"
                onClick={() =>
                  window.open(
                    `https://cypher.digitalax.xyz/item/kinora/${publication?.publication?.id}`
                  )
                }
              >
                <Image
                  layout="fill"
                  src={`${INFURA_GATEWAY_INTERNAL}QmZ4v5pzdnCBeyKnS9VrjZiEAbUpAVy8ECArNcpxBt6Tw4`}
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-fit flex flex-col items-start justify-start gap-2 font-vcr text-white text-xxs">
          <div className="relative w-full h-fit flex items-start justify-start flex-col gap-3">
            <div
              className={`relative w-fit h-fit flex items-start justify-start font-vcr text-white text-xl break-words `}
            >
              {publication?.questMetadata?.title?.length > 25
                ? publication?.questMetadata?.title?.slice(0, 15) + "..."
                : publication?.questMetadata?.title}
            </div>
            <div
              className={`relative flex items-start justify-start gap-2 w-full h-fit`}
            >
              <div className="relative w-full flex-1 items-start justify-start font-vcr text-gray-400 text-sm break-words text-overflow-truncate h-[6rem] overflow-y-scroll">
                {publication?.questMetadata?.description?.length > 100
                  ? publication?.questMetadata?.description?.slice(0, 100) +
                    "..."
                  : publication?.questMetadata?.description}
              </div>
            </div>
          </div>
          <div className="relative w-fit h-fit flex">
            <div className="relative w-full h-fit flex flex-row items-center justify-start text-white font-bit text-xs gap-3">
              <div className="relative w-4 h-3.5 flex items-start justify-start ">
                <Image
                  draggable={false}
                  layout="fill"
                  src={`${INFURA_GATEWAY_INTERNAL}QmcopbBnP4dJgRKCHJ7TN7nHFt5wpe6w8VBhztaBXGYvft`}
                />
              </div>
              <div className="relative w-fit h-fit flex items-center justify-center">{`Max Player Count: ${
                Number(publication?.maxPlayerCount) ==
                Number(publication?.players?.length)
                  ? "Limit Reached"
                  : `${Number(publication?.players?.length)} / ${Number(
                      publication?.maxPlayerCount
                    )}`
              }`}</div>
            </div>
          </div>
          <div className="relative w-full h-fit flex flex-row items-center justify-start gap-1 break-words">
            <div className="relative w-fit h-fit flex items-center justify-center">
              {dict?.distro?.mil}
            </div>
            <div className="relative w-fit h-fit flex items-center justify-center text-girasol break-words">
              {publication?.milestoneCount}
            </div>
          </div>
          <div className="relative w-full h-fit flex flex-row items-center justify-start gap-1 break-words">
            <div className="relative w-fit h-fit flex items-center justify-center">
              {dict?.distro?.vid}
            </div>
            <div className="relative w-fit h-fit flex items-center justify-center text-girasol break-words">
              {publication?.milestones?.reduce(
                (acumulador, valorActual) =>
                  acumulador + Number(valorActual.videoLength),
                0
              )}
            </div>
            <div
              className="relative w-3.5 h-3.5 flex items-center justify-center cursor-sewingHS active:scale-95"
              onClick={() => window.open("https://livepeer.studio/")}
            >
              <Image
                draggable={false}
                layout="fill"
                src={`${INFURA_GATEWAY_INTERNAL}QmVa8AWMYyAfcQAEpbqdUoRSxSkntpH1DEMpdyajZWz4AR`}
              />
            </div>
          </div>
          <div className="relative w-full h-fit flex flex-row items-center justify-start gap-px break-words">
            <div className="relative w-fit h-fit flex items-center justify-center">
              {dict?.distro?.rew}
            </div>
            <div className="relative w-fit h-fit flex items-center justify-center text-girasol break-words">
              {(publication?.milestones
                ?.map(
                  (item) =>
                    item?.rewards?.filter((rew) => rew?.type == "0")?.length
                )
                ?.filter(Boolean)?.length! > 0
                ? publication?.milestones?.reduce(
                    (acumulador, valorActual) =>
                      acumulador +
                      Number(
                        valorActual?.rewards?.filter((rew) => rew?.type == "0")
                          ?.length
                      ),
                    0
                  ) + " x ERC20 + "
                : "") +
                (publication?.milestones
                  ?.map(
                    (item) =>
                      item?.rewards?.filter((rew) => rew?.type == "1")?.length
                  )
                  ?.filter(Boolean)?.length! > 0
                  ? publication?.milestones?.reduce(
                      (acumulador, valorActual) =>
                        acumulador +
                        Number(
                          valorActual?.rewards?.filter(
                            (rew) => rew?.type == "1"
                          )?.length
                        ),
                      0
                    ) + " x ERC721"
                  : "")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quest;
