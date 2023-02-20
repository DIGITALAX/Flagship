import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, useState } from "react";
import useTV from "./hooks/useTv";
import { motion } from "framer-motion";

const TV: FunctionComponent = (): JSX.Element => {
  const { newImages, refreshImages } = useTV();
  const [blur, setBlur] = useState<boolean>(true);
  return (
    <div className="relative flex flex-col w-full min-w-full h-fit py-32 px-3 md:px-10 justify-center">
      <div className="w-full h-full relative place-self-center h-[57vw]">
        <video
          autoPlay
          muted
          loop
          placeholder="blur"
          className="absolute h-full w-full object-cover rounded-3xl flex border-8 border-offBlack flex"
        >
          <source src="/videos/glitch.mp4" type="video/mp4"></source>
        </video>
        <div className="relative flex flex-row w-full h-full gap-6 justify-center self-center items-center">
          {newImages.map((image: string, index: number) => {
            return (
              <Link href={"https://digifizzy.xyz"} key={index}>
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  className={`relative w-[15vw] h-[25vw] lg:w-[20vw] lg:h-[30vw] place-self-center opacity-90 active:scale-95 cursor-sewingHS hover:opacity-70 ${
                    blur && "blur-sm animate-unblur"
                  }`}
                >
                  <Image
                    src={`/images/digifizzy/${image}.png`}
                    layout="fill"
                    priority
                    onLoadingComplete={() => setBlur(false)}
                    blurDataURL={`/images/blurred/${image}.png`}
                  />
                </a>
              </Link>
            );
          })}
          <motion.div
            whileHover={{
              rotate: 360,
            }}
            onClick={refreshImages}
            className={`absolute bottom-4 right-4 w-fit col-fit col-start-4 row-start-1 place-self-end h-fit hover:rotate-180 cursor-sewingHS active:mix-blend-color-dodge w-6 h-6 z-10 md:w-10 md:h-10 xl:w-24 xl:h-24 ${
              blur && "blur-sm animate-unblur"
            }`}
          >
            <Image
              src="/images/digifizzy/disk.png"
              layout="fill"
              width={50}
              height={50}
              priority
              onLoadingComplete={() => setBlur(false)}
              blurDataURL={`/images/blurred/disk.png`}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TV;
