import Image from "next/legacy/image";
import { FunctionComponent, JSX } from "react";
import numeral from "numeral";
import { InteractBarProps } from "../types/distro.types";
import { INFURA_GATEWAY_INTERNAL } from "@/app/lib/constants";

const InteractBar: FunctionComponent<InteractBarProps> = ({
  col,
  publication,
}): JSX.Element => {
  return (
    <div
      className={`relative w-full h-fit rounded-sm border border-frio font-vcr text-mar flex gap-4 p-2 items-center justify-center bg-fuego flex-wrap z-10 flex-row text-base`}
    >
      {[
        {
          title: "Mirrors",
          image: "QmPRRRX1S3kxpgJdLC4G425pa7pMS1AGNnyeSedngWmfK3",
          stat: publication?.stats?.reposts,
        },
        {
          title: "Likes",
          image: "QmT1aZypVcoAWc6ffvrudV3JQtgkL8XBMjYpJEfdFwkRMZ",
          stat: publication?.stats?.upvotes,
        },
        {
          title: "Comments",
          image: "QmXD3LnHiiLSqG2TzaNd1Pmhk2nVqDHDqn8k7RtwVspE6n",
          stat: publication?.stats?.comments,
        },
        {
          title: "Acts",
          image: "QmNomDrWUNrcy2SAVzsKoqd5dPMogeohB8PSuHCg57nyzF",
          stat: publication?.stats?.collects,
        },
      ].map(
        (
          item: { title: string; image: string; stat: number },
          indexTwo: number
        ) => {
          return (
            <div
              className="relative w-full h-full flex flex-row items-center justify-center gap-2"
              key={indexTwo}
              title={item.title}
            >
              <div
                className={`relative w-fit h-fit flex items-center justify-center`}
              >
                <div
                  className={`relative w-4 h-4 flex items-center justify-center`}
                >
                  <Image
                    layout="fill"
                    src={`${INFURA_GATEWAY_INTERNAL}${item.image}`}
                    draggable={false}
                  />
                </div>
              </div>
              <div
                className={`relative w-fit h-fit flex items-center justify-center text-center`}
              >
                {numeral(item.stat).format("0a")}
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default InteractBar;
