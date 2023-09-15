import Image from "next/image";
import { FunctionComponent, useState } from "react";
import { INFURA_GATEWAY } from "../../../lib/lens/constants";

const Glass: FunctionComponent = (): JSX.Element => {
  const [blur, setBlur] = useState<boolean>(true);
  return (
    <div className="relative w-full h-fit min-h-fit bg-diy py-3 border-y-4 border-deep 2xl:py-5 justify-center px-10 sm:px-40 min-w-full">
      <div className="relative w-full h-fit flex flex-row gap-6 justify-center">
        <div className="relative w-fit sm:w-full h-fit gap-2 sm:gap-8 flex flex-row self-center justify-start">
          <div className="relative w-fit h-fit">
            <div className="relative w-[10vw] h-[10vw] sm:w-14 sm:h-14 2xl:w-[6vw] 2xl:h-[6vw] rounded-full border-2 border-offBlack  hover:rotate-45 active:rotate-45 cursor-sewingHS">
              <Image
                layout="fill"
                className={`rounded-full ${blur && "blur-sm animate-unblur"}`}
                src={`${INFURA_GATEWAY}/ipfs/Qmd3RZRxe7NZagHJarV2nigbra3k1KsK7pHjK8q5KqPxoJ`}
                priority
                onLoadingComplete={() => setBlur(false)}
                draggable={false}
              />
            </div>
          </div>
          <div className="relative w-fit h-fit">
            <div className="relative w-[10vw] h-[10vw] sm:w-14 sm:h-14 2xl:w-[6vw] 2xl:h-[6vw] rounded-full border-2 border-offBlack place-self-center hover:rotate-180 active:rotate-180 cursor-sewingHS">
              <Image
                layout="fill"
                className={`rounded-full ${blur && "blur-sm animate-unblur"}`}
                src={`${INFURA_GATEWAY}/ipfs/QmXJpJFYp51WgzVLNZ995aa2BxVxehrkLUpDoCnSfw6s8s`}
                priority
                onLoadingComplete={() => setBlur(false)}
                draggable={false}
              />
            </div>
          </div>
          <div className="relative w-fit h-fit">
            <div className="relative w-[10vw] h-[10vw]  sm:w-14 sm:h-14 2xl:w-[6vw] 2xl:h-[6vw] rounded-full border-2 border-offBlack place-self-center hover:rotate-90 active:rotate-90 cursor-sewingHS">
              <Image
                layout="fill"
                className={`rounded-full ${blur && "blur-sm animate-unblur"}`}
                src={`${INFURA_GATEWAY}/ipfs/QmPMgAYDT738PgFVPygyYJymzVE8knB6bYkbtXbpXy2HXK`}
                priority
                onLoadingComplete={() => setBlur(false)}
                draggable={false}
              />
            </div>
          </div>
        </div>
        <div className="relative w-fit h-fit">
          <div className="relative w-[15vw] h-[15vw] sm:w-24 sm:h-24 2xl:w-[8vw] 2xl:h-[8vw] col-start-4 rounded-full border-2 border-offBlack place-self-center hover:rotate-180 active:rotate-180 cursor-sewingHS">
            <Image
              layout="fill"
              objectFit="cover"
              className={`rounded-full ${blur && "blur-sm animate-unblur"}`}
              src={`${INFURA_GATEWAY}/ipfs/QmV6abRqyRq1hs82LV226fgjUHn8pa9roiA4K8PYwHfw9f`}
              priority
              onLoadingComplete={() => setBlur(false)}
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Glass;
