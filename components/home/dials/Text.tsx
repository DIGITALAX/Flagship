import Image from "next/image";
import { FunctionComponent, useState } from "react";

const Text: FunctionComponent = (): JSX.Element => {
  const [blur, setBlur] = useState<boolean>(true);
  return (
    <div className="relative w-full pb-8 h-full grid grid-flow-col auto-col-auto gap-6">
      <div className="relative place-self-center w-fit lg:w-full h-full row-start-1 col-start-1 text-mainText lg:pl-4">
        <div className="relative w-full h-full grid sm:grid-flow-col sm:auto-col-auto grid-flow-row auto-rows-auto">
          <div className="relative w-full h-full flex flex-row sm:flex-col items-center">
            <div className="relative w-px h-6 sm:w-6 sm:h-px bg-black"></div>
            <div className="relative w-full sm:w-px h-px sm:h-full bg-black justify-self-center"></div>
            <div className="relative w-px h-6 sm:w-6 sm:h-px bg-black"></div>
          </div>
          <div
            className={`relative w-fit place-self-center h-fit  font-libB text-xs whitespace-nowrap pr-14 pl-3 lg:pr-3 sm:rotate-0 rotate-90 ${
              blur && "blur-sm animate-unblur"
            }`}
          >
            <Image
              height={100}
              width={10}
              src="/images/verttext1.png"
              priority
              onLoadingComplete={() => setBlur(false)}
              blurDataURL={"/images/blurred/verttext1.png"}
            />
          </div>
          <div className="relative w-fit sm:w-96 text-center h-fit font-libB text-sm p-6 border border-mainText place-self-center break-word">
            With a public release some timeskip from now, fabric synth in
            Blender changes the narrative from “NFTs, lol, speculative altcoins
            with JPEGs“ to “We like the looks made for material use”
          </div>
          <div
            className={`relative w-fit place-self-center h-fit font-libB text-xs whitespace-nowrap pr-1 pl-14 lg:pl-3 sm:rotate-0 rotate-90 ${
              blur && "blur-sm animate-unblur"
            }`}
          >
            <Image
              height={70}
              width={10}
              src="/images/verttext2.png"
              priority
              onLoadingComplete={() => setBlur(false)}
              blurDataURL={"/images/blurred/verttext2.png"}
            />
          </div>
          <div className="relative w-full h-full flex flex-row sm:flex-col items-center">
            <div className="relative w-px h-6 sm:w-6 sm:h-px bg-black"></div>
            <div className="relative w-full sm:w-px h-px sm:h-full bg-black justify-self-center"></div>
            <div className="relative w-px h-6 sm:w-6 sm:h-px bg-black"></div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-full row-start-2 col-start-1 lg:row-start-1 lg:col-start-2 text-mainText lg:pt-0 pt-12 grid grid-flow-col auto-cols-auto">
        <div className="relative w-fit h-fit text-right text-sm font-gisL justify-self-center">
          Today, fashion designers use CLO, a closed source and very limited
          tool for working with fabric. Blender can be a much more powerful and
          open source tool for working with fabric.
          <br />
          <br />
          But a few things have to happen first.
          <br />
          <br />
          Fabric synth, segmentation, design and materialisation in a tailor
          made Blender plugin? Where we're going, we're going to need a lot more
          GPUs.
        </div>
      </div>
    </div>
  );
};

export default Text;
