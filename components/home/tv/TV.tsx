import Image from "next/image";
import { FunctionComponent, useState } from "react";
import useTV from "./hooks/useTv";
import { motion } from "framer-motion";
import { INFURA_GATEWAY } from "../../../lib/lens/constants";

const TV: FunctionComponent = (): JSX.Element => {
  const { newImages, refreshImages } = useTV();
  const [blur, setBlur] = useState<boolean>(true);
  return (
    <div className="relative flex flex-col w-full min-w-full h-fit py-32 px-3 md:px-10 justify-center">
      <div className="w-full h-full relative place-self-center h-fit sm:h-[57vw]">
        <video
          autoPlay
          muted
          loop
          
          className="absolute h-full w-full object-cover rounded-3xl flex border-8 border-offBlack flex"
        >
          <source src="/videos/glitch.mp4" type="video/mp4"></source>
        </video>
        <div className="relative flex flex-col sm:flex-row w-full h-full gap-6 justify-center self-center items-center py-10">
          {newImages.map((image: string, index: number) => {
            return (
              <a
                key={index}
                target={"_blank"}
                rel="noreferrer"
                className={`relative w-[70vw] h-[100vw] sm:w-[15vw] sm:h-[25vw] lg:w-[20vw] lg:h-[30vw] place-self-center opacity-90 active:scale-95 cursor-sewingHS hover:opacity-70 ${
                  blur && "blur-sm animate-unblur"
                }`}
              >
                <Image
                  src={`${INFURA_GATEWAY}/ipfs/${image}`}
                  layout="fill"
                  priority
                  onLoadingComplete={() => setBlur(false)}
                  draggable={false}
                />
              </a>
            );
          })}
          <motion.div
            whileHover={{
              rotate: 360,
            }}
            onClick={refreshImages}
            className={`absolute bottom-4 right-4 col-fit col-start-4 row-start-1 place-self-end hover:rotate-180 cursor-sewingHS active:mix-blend-color-dodge w-6 h-6 z-10 md:w-10 md:h-10 2xl:w-24 2xl:h-24 ${
              blur && "blur-sm animate-unblur"
            }`}
          >
            <Image
              src={`${INFURA_GATEWAY}/ipfs/QmYdpBCKCGp2rMgWaDePE8UeuCUPywuWTJ9qEE9XwrJmBU`}
              layout="fill"
              width={50}
              height={50}
              priority
              onLoadingComplete={() => setBlur(false)}
              draggable={false}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TV;
