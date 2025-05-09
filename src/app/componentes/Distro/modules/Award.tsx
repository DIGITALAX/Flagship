import { FunctionComponent, JSX, useContext } from "react";
import Image from "next/legacy/image";
import { AwardProps } from "../types/distro.types";
import { INFURA_GATEWAY, INFURA_GATEWAY_INTERNAL } from "@/app/lib/constants";
import { ModalContext } from "@/app/providers";

const Award: FunctionComponent<AwardProps> = ({
  publication,
  dict,
}): JSX.Element => {
  const context = useContext(ModalContext);

  return (
    <div className="relative w-full h-fit sm:h-80 border border-cost rounded-sm p-2 flex">
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-0">
        <Image
          layout="fill"
          objectFit="cover"
          draggable={false}
          src={`${INFURA_GATEWAY_INTERNAL}${
            publication?.questMetadata?.cover?.split("ipfs://")?.[1]
          }`}
        />
      </div>
      <div className="bg-black relative w-full h-full rounded-sm p-2 flex items-start justify-start flex-col gap-5">
        <div className="relative w-full h-fit flex items-start justify-between flex flex-row flex-wrap gap-2">
          <div className="relative w-fit h-fit flex items-center justify-start text-white font-bit text-xs break-words">
            {publication?.questMetadata?.title?.length > 15
              ? publication?.questMetadata?.title?.slice(0, 10) + "..."
              : publication?.questMetadata?.title}
          </div>
          <div className="relative w-fit h-fit flex items-center justify-center gap-1.5 flex-row">
            <div className="relative w-fit h-fit flex items-center justify-center text-cost font-bit text-xs break-words">
              {`Milestone ${publication?.milestone}`}
            </div>
            <div
              className="relative w-fit h-fit flex items-center justify-center cursor-sewingHS"
              // onClick={() =>
              //   window.open(
              //     `https://cypher.digitalax.xyz/item/kinora/${toHexWithLeadingZero(
              //       Number(publication?.p)
              //     )}-${toHexWithLeadingZero(Number(publication?.pubId))}`
              //   )
              // }
            >
              <div className="relative w-4 h-4 flex items-end justify-end">
                <Image
                  src={`${INFURA_GATEWAY_INTERNAL}QmRkAoLMAh2hxZfh5WvaxuxRUMhs285umdJWuvLa5wt6Ht`}
                  draggable={false}
                  layout="fill"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-px bg-gray-700"></div>
        <div className="relative flex flex-col sm:flex-row gap-2 justify-start sm:justify-between items-center sm:items-start w-full h-full">
          <div
            className="relative w-full h-60 sm:h-full flex rounded-sm items-center justify-center border border-suave cursor-sewingHS active:scale-95 bg-amo/30"
            onClick={() =>
              context?.setImageViewer({
                type: "png",
                content: `${INFURA_GATEWAY}/ipfs/${
                  publication?.rewardMetadata?.images?.[0]?.split(
                    "ipfs://"
                  )?.[1]
                }`,
              })
            }
          >
            <Image
              className="rounded-sm"
              draggable={false}
              layout="fill"
              objectFit="cover"
              src={`${INFURA_GATEWAY_INTERNAL}${
                publication?.rewardMetadata?.images?.[0]?.split("ipfs://")?.[1]
              }`}
            />
          </div>
          <div className="relative w-full h-fit flex items-end justify-start gap-2 flex-col font-vcr overflow-y-scroll">
            <div className="relative w-fit h-fit flex flex-col gap-1 items-end justify-end">
              <div className="relative text-xs text-girasol flex items-center justify-center w-fit h-fit">
                {dict?.distro?.tile}
              </div>
              <div className="relative w-fit h-fit flex items-center justify-center w-fit h-fit text-xxs text-white">
                {publication?.rewardMetadata?.title}
              </div>
            </div>
            <div className="relative w-fit h-fit flex flex-col gap-1 items-end justify-end">
              <div className="relative text-xs text-girasol flex items-center justify-center w-fit h-fit">
                {dict?.distro?.descrip}
              </div>
              <div className="relative w-fit h-fit flex items-start justify-end text-right w-fit h-fit text-xxs text-white max-h-[10rem] overflow-y-scroll">
                {publication?.rewardMetadata?.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Award;
