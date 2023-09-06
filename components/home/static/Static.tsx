import Image from "next/image";
import { FunctionComponent, useState } from "react";

const Static: FunctionComponent = (): JSX.Element => {
  const [blur, setBlur] = useState<boolean>(true);
  return (
    <div className="w-full relative flex flex-col h-full place-items-center py-12 px-2 sm:px-12 text-xs md:text-base">
      <div className="row-start-1 w-full h-fit font-lib text-mainText relative">
        <div className="w-full h-fit grid grid-flow-col auto-cols-auto relative">
          <div className="col-start-1 w-full h-fit relative text-left">212</div>
          <div className="col-start-2 w-full h-fit relative text-right">
            917 646
          </div>
        </div>
      </div>
      <div className="w-full h-full row-start-2 relative place-self-center">
        <div
          className={`relative flex border-8 w-full h-[57vw] pb-2 rounded-xl border-offBlack ${
            blur && "blur-sm animate-unblur"
          }`}
        >
          <Image
            src="/images/static.png"
            layout="fill"
            className="w-full rounded-sm"
            priority
            onLoadingComplete={() => setBlur(false)}
            blurDataURL={`/images/blurred/static.png`}
            draggable={false}
          />
          <div className="relative w-full h-full grid grid-flow-col auto-cols-auto">
            <video
              autoPlay
              muted
              loop
              placeholder="blur"
              className="relative max-w-none border-gray-900 border-8 w-[14vw] h-[18vw] object-cover flex place-self-center bg-offBlack"
            >
              <source src="/videos/static.mp4" type="video/mp4"></source>
            </video>
          </div>
        </div>
      </div>
      <div className="row-start-3 w-full h-fit text-center font-lib text-mainText flex items-center justify-center relative pt-20 text-lg font-libB 2xl:text-[1.8vw]" >
        <div className="relative w-fit h-fit flex items-center justify-center cursor-sewingHS" onClick={() => window.open("https://www.themanufactory.xyz/")}>
        x005.m-3 – MICROFACTORY LOCAL CO•OP
        </div>
      </div>
    </div>
  );
};

export default Static;
