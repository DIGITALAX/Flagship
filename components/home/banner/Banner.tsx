import { FunctionComponent } from "react";
import Marquee from "react-fast-marquee";

const Banner: FunctionComponent = (): JSX.Element => {
  return (
    <div className="pt-8 pb-8 relative grid grid-flow-row auto-rows-auto w-full h-fit">
      <div className="bg-mainText w-full h-fit pt-1 pb-1 sm:pt-3 sm:pb-3 font-fira text-md md:text-[1.7vw] text-mevText whitespace-nowrap overflow-x-hidden">
        <Marquee gradient={false} speed={30} direction={"right"}>
          <p className="mr-4 whitespace-nowrap w-fit h-fit">
            Collection of the Week{" "}
            <span className="font-firaM">
              <span className="text-mevSlash font-fira">//</span> Jidōka Imprint{" "}
              <span className="text-mevSlash font-fira">//</span> 0.32 ETH
            </span>
          </p>
          <p className="mr-4 whitespace-nowrap w-fit h-fit">
            Collection of the Week{" "}
            <span className="font-firaM">
              <span className="text-mevSlash font-fira">//</span> Jidōka Imprint{" "}
              <span className="text-mevSlash font-fira">//</span> 0.32 ETH
            </span>
          </p>
          <p className="mr-4 whitespace-nowrap w-fit h-fit">
            Collection of the Week{" "}
            <span className="font-firaM">
              <span className="text-mevSlash font-fira">//</span> Jidōka Imprint{" "}
              <span className="text-mevSlash font-fira">//</span> 0.32 ETH
            </span>
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default Banner;
