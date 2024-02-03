import { FunctionComponent, useState } from "react";
import Image from "next/legacy/image";
import Marquee from "react-fast-marquee";
import { INFURA_GATEWAY, SLIDER_IMAGES } from "../../../lib/constants";

const Slider: FunctionComponent = (): JSX.Element => {
  return (
    <div className="min-h-80 h-80 flex relative w-full bg-mainBg overflow-hidden pb-10 pt-10">
      <Marquee
        className="flex"
        pauseOnHover
        gradient={false}
        pauseOnClick
        direction="right"
      >
        {SLIDER_IMAGES.map((image, key) => {
          return (
            <div
              key={key}
              className={`min-h-60 min-w-60 h-60 w-60 relative mr-4`}
            >
              <Image
                src={`${INFURA_GATEWAY}/ipfs/${image}`}
                objectFit="cover"
                layout="fill"
                priority
                objectPosition={"top"}
                draggable={false}
              />
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default Slider;
