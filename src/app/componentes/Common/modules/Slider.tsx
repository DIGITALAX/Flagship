import { FunctionComponent, JSX } from "react";
import Image from "next/legacy/image";
import Marquee from "react-fast-marquee";
import { INFURA_GATEWAY_INTERNAL, SLIDER_IMAGES } from "../../../lib/constants";

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
        {SLIDER_IMAGES.map((image: string, index: number) => {
          return (
            <div
              key={index}
              className="relative w-fit h-fit flex items-center justify-center mr-4"
            >
              <div
                className={`h-60 w-60 relative flex items-center justify-center`}
              >
                <Image
                  src={`${INFURA_GATEWAY_INTERNAL}${image}`}
                  objectFit="cover"
                  layout="fill"
                  priority
                  objectPosition={"top"}
                  draggable={false}
                />
              </div>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default Slider;
