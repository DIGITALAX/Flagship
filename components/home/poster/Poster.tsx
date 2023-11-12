import Image from "next/legacy/image";
import { FunctionComponent, useState } from "react";
import { INFURA_GATEWAY } from "../../../lib/lens/constants";

const Poster: FunctionComponent = (): JSX.Element => {
  const [blur, setBlur] = useState<boolean>(true);
  return (
    <div className="w-full relative sm:grid grid-flow-col auto-cols-auto min-h-[120vw] h-[180vh] place-items-center pb-20">
      <div
        className={`h-full relative flex col-start-1 md:border-8 border-diy place-self-center bg-offBlack border-2 ${
          blur && "blur-sm animate-unblur"
        }`}
      >
        <Image
          layout="fill"
          objectFit="cover"
          src={`${INFURA_GATEWAY}/ipfs/QmXnDtWEvHA2PNZeQWxVd1KotF5JGvfBp4hbcvgTuE3pdk`}
          priority
          onLoadingComplete={() => setBlur(false)}
          draggable={false}
        />
        <div className="relative w-full h-full grid grid-flow-col auto-cols-auto">
          <div className="relative w-full h-fit place-self-end col-start-1">
            <div className="grid relative grid-flow-row auto-rows-auto w-full h-fit">
              <div className="relative row-start-1 w-[74vw] h-[62vw] sm:w-72 sm:h-60 self-end pb-3 pl-10">
                <div
                  id="crt"
                  className="relative bg-offBlack w-full h-full rounded-xl"
                >
                  <video
                    autoPlay
                    muted
                    loop
                    id="crt"
                    
                    className="relative p-0.5 h-full w-full object-cover rounded-xl flex"
                  >
                    <source src="/videos/crt1.mp4" type="video/mp4"></source>
                  </video>
                </div>
              </div>
              <div className="relative row-start-2 w-[74vw] h-[62vw] sm:w-72 sm:h-60 self-end pb-3 pl-10">
                <div
                  id="crt"
                  className="relative w-full h-full rounded-xl  bg-offBlack"
                >
                  <video
                    autoPlay
                    muted
                    loop
                    id="crt"
                    
                    className="relative p-0.5 h-full w-full object-cover rounded-xl flex"
                  >
                    <source src="/videos/crt2.mp4" type="video/mp4"></source>
                  </video>
                </div>
              </div>
              <div className="relative row-start-3 w-[74vw] h-[62vw] sm:w-72 sm:h-60 self-end pl-10">
                <div
                  id="crt"
                  className="relative bg-offBlack w-full h-full rounded-xl"
                >
                  <video
                    autoPlay
                    muted
                    loop
                    
                    className="relative p-0.5 h-full w-full object-cover rounded-xl flex"
                  >
                    <source src="/videos/crt3.mp4" type="video/mp4"></source>
                  </video>
                </div>
              </div>
              <div className="relative row-start-4 w-full h-fit pt-10 sm:pt-10 pb-8">
                <div className="relative text-diyText text-[8.1vw] whitespace-nowrap text-center pl-3 pr-3 sm:pl-10 sm:pr-10 w-full font-mag bg-diy pt-3 pb-3">
                  LATENT THREADS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
