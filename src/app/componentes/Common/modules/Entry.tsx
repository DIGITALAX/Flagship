"use client";

import { FunctionComponent, JSX, useContext } from "react";
import Header from "./Header";
import Head from "next/head";
import Display from "../../Gallery/modules/Display";
import Library from "../../Library/modules/Library";
import Slider from "./Slider";
import Banner from "./Banner";
import Image from "next/legacy/image";
import { INFURA_GATEWAY, INFURA_GATEWAY_INTERNAL } from "@/app/lib/constants";
import useEntry from "../hooks/useEntry";
import { ModalContext } from "@/app/providers";

const Entry: FunctionComponent<{ dict: any }> = ({ dict }): JSX.Element => {
  const { shop, handleShop } = useEntry();
  const context = useContext(ModalContext);
  return (
    <div className="w-full h-full flex flex-col gap-2 items-center justify-start">
      <Banner dict={dict} />
      <div className="relative w-full h-fit flex pt-3 items-start justify-start flex-row gap-1">
        <div className="relative w-fit h-fit flex">
          <div
            className="relative w-12 h-8 flex cursor-sewingHS"
            onClick={() => context?.setTimeline(!context?.timeline)}
          >
            <Image
              src={`${INFURA_GATEWAY_INTERNAL}QmWSm9JrQN4h9DG6wA9qLLFUbw2LtznNaW4GRBMJhDfZTH`}
              draggable={false}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="relative w-fit h-fit flex">
          <div
            className="relative w-9 h-8 flex cursor-sewingHS"
            onClick={() => window.open("http://bridge.digitalax.xyz/")}
          >
            <Image
              src={`${INFURA_GATEWAY_INTERNAL}QmVceMKvPLRnyWHdHJnDiL13YuzdmqW5jwLhsXC3RWUGfa`}
              draggable={false}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col gap-12 items-center justify-start">
        <Header dict={dict} handleShop={handleShop} />

        <Display dict={dict} shop={shop} />
        <div className="w-[95vw] half:w-[80vw] relative flex items-center justify-center min-h-[120vw] h-[120vh]  md:h-[180vh] border-2 md:border-8 bg-mainText border-diy">
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              layout="fill"
              objectFit="cover"
              src={`${INFURA_GATEWAY_INTERNAL}QmXnDtWEvHA2PNZeQWxVd1KotF5JGvfBp4hbcvgTuE3pdk`}
              draggable={false}
            />
          </div>
          <div className="absolute left-6 2xl:bottom-1/3 bottom-32 sm:bottom-60 w-fit h-fit flex flex-col gap-6 items-center justify-center">
            {[
              "QmaU44DD7KEPAfQfrYB1hGs8KJVr2G2Ua7BzkNd9iRcC47",
              "QmQoDj9jjU81mgBfdXT8P83EZmyrXRQmL6scNGgaMTivys",
              "QmSztbqHjXyghFm6xr9vT89Yw68aq6BZPsEu9g5eGBNmZG",
            ].map((video: string, index: number) => {
              return (
                <div
                  key={index}
                  className="relative items-center justify-center w-20 sm:w-40 md:w-48 lg:w-72 h-20 sm:h-40 md:h-48 lg:h-60 flex rounded-xl p-0.5"
                  id="crt"
                >
                  <div className="relative bg-offBlack w-full h-full rounded-xl flex items-center justify-center">
                    <video
                      autoPlay
                      muted
                      loop
                      className="object-cover w-full h-full flex rounded-xl"
                    >
                      <source
                        src={`${INFURA_GATEWAY}/ipfs/${video}`}
                        type="video/mp4"
                        key={`${INFURA_GATEWAY}/ipfs/${video}`}
                        draggable={false}
                      ></source>
                    </video>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="absolute w-full h-fit bottom-10 left-0 flex items-center justify-center px-3 sm:px-10 py-3 bg-diy">
            <div className="relative text-diyText text-[7.1vw] whitespace-nowrap text-center w-full font-mag flex items-center justify-center">
              {dict.common?.threads}
            </div>
          </div>
        </div>
        <Library />
        <Slider />
        <div className="relative w-full h-full text-mainText bg-mainBg font-lib sm:text-[1.8vw] text-[4vw] lg:text-[1.5vw] xl:text-[1vw] text-center pb-28 break-word px-2 flex items-center justify-center">
          {dict.common?.cc0}
        </div>
      </div>
    </div>
  );
};

export default Entry;
