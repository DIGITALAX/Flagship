"use client";

import Head from "next/head";
import Image from "next/legacy/image";
import Marquee from "react-fast-marquee";
import { useContext } from "react";
import { ModalContext } from "@/app/providers";
import Heart from "../../Common/modules/Heart";
import {
  INFURA_GATEWAY,
  INFURA_GATEWAY_INTERNAL,
  TEMPLATES,
  TV_IMAGES,
} from "@/app/lib/constants";
import { usePathname, useRouter } from "next/navigation";
import useDistro from "../hooks/useDistro";
import useCypherSearch from "../hooks/useCypherSearch";
import Tiles from "./Tiles";
import Blender from "./Blender";

export default function DistroKitEntry({ dict }: { dict: any }) {
  const context = useContext(ModalContext);
  const router = useRouter();
  const path = usePathname();
  const { tvImages, setBlenderPage, setTvImages, blenderPage } = useDistro();
  const { searchLoading, searchItems, filterConstants } = useCypherSearch();
  return (
    <div className="min-w-screen min-h-full h-full flex flex-col bg-mainBg justify-start items-center pb-28 gap-32">
      <div className="relative w-full h-fit flex flex-col items-center justify-start gap-3">
        <div
          className="relative w-full h-fit flex flex-col sm:flex-row justify-between gap-10 sm:gap-4 pt-4 px-2 sm:px-6 items-center"
          ref={context?.rewind}
        >
          <h1
            className="relative w-fit h-fit flex font-rain text-mainText text-4xl mr-0 items-center justify-center cursor-sewingHS"
            onClick={() => router.push("/")}
          >
            DIGITALAX
          </h1>
          <div className="relative w-fit h-fit flex ml-0 items-center justify-center flex-col sm:flex-row gap-3">
            <div className="relative w-fit h-fit flex font-bit text-mainText text-2xl sm:text-4xl mr-0 items-center justify-center top-1">
              {dict?.distro?.distro}
            </div>
            <Heart
              changeColor={context?.changeColor}
              heartColor={context?.heartColor!}
            />
          </div>
        </div>
        <div className="relative w-full h-[30rem] md:h-[50rem] flex items-center justify-center px-2 md:px-8">
          <div className="relative w-full sm:w-4/5 flex items-center justify-center h-48 sm:h-4/5">
            <Image
              draggable={false}
              src={`${INFURA_GATEWAY_INTERNAL}QmReLFeUVH6yjTbmyF3buLYgHamYHqJBKF8zKmy5GjsEL2`}
              layout="fill"
              priority
            />
          </div>
        </div>
      </div>

      <div className="relative w-full h-fit flex justify-center items-center px-2 sm:px-8">
        <div className="relative w-full h-fit md:h-[30rem] flex flex-col md:flex-row justify-between gap-10 items-center">
          <div className="relative w-full h-full font-bit text-mainText flex items-center justify-between border-2 border-verde flex-col p-2">
            <div
              className={`relative w-fit h-fit flex items-center justify-center break-all text-center ${
                path.match(/(?<=\/)(en|es)(?=\/)/)?.[0] == "es"
                  ? "text-[7vw] sm:text-[3.3vw]"
                  : "text-[7vw] sm:text-[5vw] 2xl:text-[5rem]"
              }`}
            >
              {dict?.distro?.distribution}
            </div>
            <div
              className={`relative w-fit h-fit flex items-center justify-center break-word text-center ${
                path.match(/(?<=\/)(en|es)(?=\/)/)?.[0] == "es"
                  ? "text-[7vw] sm:text-[3.3vw] md:text-[2vw]"
                  : "text-[6.5vw] sm:text-[4.5vw] 2xl:text-[4rem]"
              }`}
            >
              {dict?.distro?.need}
            </div>
            <div className="relative w-full h-fit flex items-start justify-center pt-3">
              <div className="relative flex flex-col gap-3 items-start justify-between w-fit h-full">
                {[
                  dict?.distro?.social,
                  dict?.distro?.micro,
                  dict?.distro?.pub,
                  dict?.distro?.street,
                  dict?.distro?.tool,
                ].map((item: string, index: number) => {
                  return (
                    <div
                      key={index}
                      className="relative w-full h-fit flex flex-row gap-2 items-center justify-center"
                    >
                      <div className="relative w-fit h-fit flex items-center justify-center">
                        <div className="relative h-2 w-2 md:w-4 md:h-4 rounded rounded-full flex items-center justify-center border-2 border-amarillo"></div>
                      </div>
                      <div className="relative w-fit h-fit flex items-center justify-center text-base md:text-lg xl:text-2xl">
                        {item}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="relative w-full h-[20rem] md:h-full flex items-center justify-center border-2 border-amarillo bg-amarillo">
            <Image
              layout="fill"
              objectFit="cover"
              draggable={false}
              src={`${INFURA_GATEWAY_INTERNAL}QmVW9yFu54JqPX8otXvdSEdhud2S44axyztXbifAQSqcgW`}
            />
          </div>
        </div>
      </div>
      <div className="relative w-full h-fit flex flex-col items-center justify-center">
        <div className="relative w-full h-fit flex items-center justify-center bg-gradient-to-r from-grad1 via-grad2 to-grad3 py-0.5">
          <div className="text-center flex items-center justify-center font-lib text-offBlack bg-offWhite text-[4vw] break-all sm:text-[2.1vw] sm:whitespace-nowrap py-3 w-full h-full">
            {dict?.distro?.tomorrow}
          </div>
        </div>
        <div className="bg-offBlack w-full h-fit md:h-[90rem] relative flex flex-col md:flex-row gap-3 px-2 items-center md:items-start justify-start md:justify-center">
          <div className="relative w-fit h-full flex flex-col items-start justify-start">
            <div className="relative flex w-full h-fit border-mainText text-foot font-thun">
              <Image
                layout="fill"
                objectFit="cover"
                src={`${INFURA_GATEWAY_INTERNAL}QmSD1oBGb7wXrT4BJVxShL1DEWDAyXx4hwjLZg76Hq82vL`}
                draggable={false}
              />
              <div className="relative flex w-full h-fit midi:h-full">
                <div
                  className={`relative hidden midi:flex w-full midi:w-80 h-fit p-2 leading-normal break-words ml-0 ${
                    path.match(/(?<=\/)(en|es)(?=\/)/)?.[0] == "es"
                      ? "text-3xl"
                      : "text-4xl"
                  }`}
                >
                  {dict?.distro?.new}
                </div>
              </div>
            </div>
            <div className="relative w-full h-fit flex flex-col items-center justify-start text-white font-bit px-2 py-4 gap-10">
              <div className="relative w-fit h-fit flex items-center justify-center text-3xl">
                {dict?.distro?.online}
              </div>
              <div className="relative flex flex-col items-center justify-start gap-6 h-fit w-full text-base">
                {[
                  dict?.distro?.robot,
                  dict?.distro?.reach,
                  dict?.distro?.real,
                  dict?.distro?.watch,
                  dict?.distro?.afraid,
                  dict?.distro?.count,
                ].map((item, index: number) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-center gap-2 flex-row relative h-fit w-full"
                    >
                      <div className="flex rounded-full items-center justify-center w-3 h-3 border-2 border-amarillo"></div>
                      <div className="relative w-fit h-fit flex items-center justify-center">
                        {item}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="relative w-full h-fit flex flex-col gap-1.5 items-center justify-center text-lg">
                <div className="relative w-fit h-fit  flex items-center justify-center">
                  {dict?.distro?.kit}
                </div>
                <div className="relative w-1/2 h-1 flex items-center justify-center bg-brille"></div>
                <div className="relative w-fit h-fit flex items-center justify-center">
                  {dict?.distro?.build}
                </div>
              </div>
            </div>
            <div className="relative w-full h-full flex items-center justify-center bg-amo/30">
              <Image
                objectFit="cover"
                layout="fill"
                objectPosition={"top"}
                src={`${INFURA_GATEWAY_INTERNAL}Qme8xXmkD3ktvzK2NeopaDQEHu5ALrsgZfHy9TchwULdgP`}
                draggable={false}
              />
            </div>
          </div>
          <div className="relative w-full md:w-fit h-fit md:h-full flex flex-col gap-2 py-1">
            <div
              id="static"
              className="relative flex w-full md:w-8 h-8 md:h-full border border-amarillo rounded-sm"
            ></div>
            <div
              id="static2"
              className="relative flex  w-full md:w-8 h-8 md:h-full  saturate-0 border border-amarillo rounded-sm"
            ></div>
            <div className="relative w-8 h-fit bg-offWhite hidden md:flex items-center justify-center p-1 rounded-sm">
              <div
                className="relative w-6 h-8 hover:rotate-12 cursor-sewingHS flex items-center justify-center"
                title="https://web3fashion.medium.com/"
                onClick={() => window.open("https://web3fashion.medium.com/")}
              >
                <Image
                  layout="fill"
                  src={`${INFURA_GATEWAY_INTERNAL}QmZ8bkkHce5sv1PjmhpYNPZDTyAQ5cskjFPvYg1KQ1YWKQ`}
                  className="justify-center"
                  draggable={false}
                />
              </div>
            </div>
          </div>
          <Tiles
            searchItems={searchItems}
            searchLoading={searchLoading}
            filterConstants={filterConstants!}
            dict={dict}
          />
        </div>
        <div className="relative w-full h-fit flex bg-diy py-3 border-y-4 border-deep justify-center items-center z-20">
          <div className="relative flex h-fit font-mag text-diyText text-[4.1vw] break-words text-center items-center justify-center">
            {dict?.distro?.diy}
          </div>
        </div>
      </div>
      <div className="w-full relative flex flex-col h-full items-center justify-center px-2 sm:px-12 text-xs md:text-base">
        <div className="w-full h-fit text-center font-lib text-mainText flex items-center justify-center relative text-lg font-libB 2xl:text-[1.8vw]">
          <div
            className="relative w-fit h-fit flex items-center justify-center cursor-sewingHS"
            onClick={() => window.open("https://www.themanufactory.xyz/")}
          >
            {dict?.distro?.local}
          </div>
        </div>
        <div className="relative flex flex-col w-full h-fit items-center justify-center text-mainText pt-10 text-center gap-2">
          <div className="relative px-1.5 sm:px-0 w-full md:w-1/2 h-fit flex items-center justify-center text-xs sm:text-sm md:text-base">
            <div
              className="relative h-full flex flex-row py-4 px-2 gap-10 overflow-x-scroll items-center justify-start"
              id="scrollMicro"
            >
              {[
                [
                  "QmRvJQiQaeExbGds6SZDcv2Tz7sVF71NW3UKMuDTzYb3QJ",
                  "f3manifesto",
                ],
                [
                  "Qmd1oiVbG21L3mx4ZWBmPmv9RK7RTrUvW4nX81fCphZ8w6",
                  "futurememory",
                ],
                ["QmPVLYbYJyQotkd8dZTWYcLh8yy8kdbdTptU3DWe4MmKdK", "hiro"],
                [
                  "QmQkdx8SmRoyJGah6xUTWt7MX45kCNjXG3UbmtBNmDgbq9",
                  "synthetic futures",
                ],
                ["QmbG7GpD3Z7G5Jb4bUBP6z1bNWtXFX7MKSCxipd88hdF5E", "put2"],
                ["QmV7wtTuWsdvJEdL43Tvqv1LMPzvEjtvEAFsU64Qgbaod2", "stryke"],
                ["QmfEU1pC8VEpHS6on69r189JaRC4TVrC1YBzV4JETk8QvH", "0xqbit"],
                [
                  "QmbCVtS9ckd6pz8oAx6tRTsNjWEA9v3DKD6Y5zuaMSUC4u",
                  "verbandden",
                ],
                ["QmNU6dKghcYNTUNbc4kYTG5BQgEFm58JNt5Ch7GP2aRxgs", "dos2048"],
                ["QmZ5Xnu4Y8vo2yr3R67ouf2ZYK7NrQCiiQFt6MEnri94PF", "w111th"],
                ["QmafTkiaae4nujF6sGbzLJYscGv6ZbRyFmYHv3NV6ukMSM", "yawp11"],
                ["QmQuKdSrUf2fPX6u8H3FSfADzQ1n9VbwkrVZ7ZpuTzm5jy", "skecz98"],
                ["QmQHdxXYev989zkK1Wtem245XusViRKZELzZR7bGpRU8iH", "re_de"],
                ["QmZEbmji9qNHUCVeGgMqXDWLpQXC68hm8WmyWr4or5CNa3", "e2evhs"],
                ["QmdPkUaUoLmS7bVwsoTUsLcjwB1pg2VLRM88TxB4vV2tde", "أنا"],
              ].map((image: string[], index: number) => {
                return (
                  <a
                    className="flex-shrink-0 relative w-20 h-20 md:h-28 md:w-28 2xl:w-32 2xl:h-32 cursor-sewingHS"
                    draggable={false}
                    key={index}
                    target="_blank"
                    rel="noreferrer"
                    href={`https://cypher.digitalax.xyz/item/microbrand/${image[1]?.replaceAll(
                      " ",
                      "_"
                    )}`}
                  >
                    <div className="relative w-full h-full flex flex-col items-center justify-center">
                      <Image
                        layout="fill"
                        objectFit="contain"
                        src={`${INFURA_GATEWAY_INTERNAL}${image[0]}`}
                        draggable={false}
                      />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="relative flex flex-col gap-2 items-center justify-center w-full h-fit">
            <div className="relative px-1.5 sm:px-0 w-full md:w-1/2 h-fit flex items-center justify-center font-gisL">
              {dict?.distro?.auth}
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col w-full min-w-full h-fit px-3 md:px-10 justify-center">
        <div className="w-full h-full relative h-fit sm:h-[57vw]">
          <video
            autoPlay
            muted
            loop
            className="absolute h-full w-full object-cover rounded-3xl flex border-4 md:border-8 border-mainText bg-mainText items-center"
          >
            <source
              src={`${INFURA_GATEWAY_INTERNAL}QmQ4M9Xou5oemWyMKVTU9HrkVdMqNNy2r5tTxxomqnnpL7`}
              type="video/mp4"
            ></source>
          </video>
          <div className="relative flex flex-col sm:flex-row w-full h-full gap-6 justify-center items-center py-20 sm:py-10">
            {tvImages.map((image: string, index: number) => {
              return (
                <a
                  key={index}
                  target={"_blank"}
                  rel="noreferrer"
                  className={`relative w-[70vw] h-[100vw] sm:w-[15vw] sm:h-[25vw] lg:w-[20vw] lg:h-[30vw] opacity-90 active:scale-95 cursor-sewingHS hover:opacity-70 bg-mainBg`}
                  onClick={() =>
                    context?.setImageViewer({
                      type: "image/png",
                      content: `${INFURA_GATEWAY}/ipfs/${image}`,
                    })
                  }
                >
                  <Image
                    src={`${INFURA_GATEWAY_INTERNAL}${image}`}
                    layout="fill"
                    priority
                    draggable={false}
                  />
                </a>
              );
            })}
            <div
              onClick={() =>
                setTvImages(
                  TV_IMAGES?.sort(() => Math.random() - 0.5).slice(0, 4)
                )
              }
              className={`absolute flex items-center justify-center bottom-4 right-4 hover:rotate-180 cursor-sewingHS active:mix-blend-color-dodge z-10 w-10 h-10 2xl:w-14 2xl:h-14`}
            >
              <Image
                src={`${INFURA_GATEWAY_INTERNAL}QmYdpBCKCGp2rMgWaDePE8UeuCUPywuWTJ9qEE9XwrJmBU`}
                layout="fill"
                priority
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-fit flex items-center justify-center">
        <div className="relative flex w-40 sm:w-60 h-28">
          <Image
            layout="fill"
            draggable={false}
            className="cursor-sewingHS hover:opacity-70"
            onClick={() => router.push("/prints")}
            src={`${INFURA_GATEWAY_INTERNAL}QmTLtTsCa2tDGf6FiN4jRtmT6fNffjtaG1htPEFWQMgRi7`}
            objectFit="contain"
            priority
          />
        </div>
      </div>
      <div className="relative w-full h-fit min-h-fit bg-diy py-3 border-y-4 border-deep 2xl:py-5 justify-between items-center px-10 sm:px-40 min-w-full flex items-center flex-row gap-6">
        <div className="relative w-fit sm:w-full h-fit gap-2 sm:gap-8 flex flex-row items-center justify-start">
          {[
            "Qmd3RZRxe7NZagHJarV2nigbra3k1KsK7pHjK8q5KqPxoJ",
            "QmXJpJFYp51WgzVLNZ995aa2BxVxehrkLUpDoCnSfw6s8s",
            "QmPMgAYDT738PgFVPygyYJymzVE8knB6bYkbtXbpXy2HXK",
          ].map((image: string, index: number) => {
            return (
              <div
                className="relative w-fit h-fit flex items-center justify-center"
                key={index}
              >
                <div className="relative w-[10vw] h-[10vw] sm:w-14 sm:h-14 2xl:w-[6vw] 2xl:h-[6vw] rounded-full border-2 border-mainText flex items-center justify-center hover:rotate-45 cursor-sewingHS bg-mainText">
                  <Image
                    layout="fill"
                    className={`rounded-full`}
                    src={`${INFURA_GATEWAY_INTERNAL}${image}`}
                    priority
                    draggable={false}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="relative w-fit h-fit flex items-center justify-center">
          <div className="relative w-[15vw] h-[15vw] sm:w-24 sm:h-24 2xl:w-[8vw] 2xl:h-[8vw] rounded-full border-2 border-mainText hover:rotate-180 cursor-sewingHS bg-mainText">
            <Image
              layout="fill"
              objectFit="cover"
              className={`rounded-full`}
              src={`${INFURA_GATEWAY_INTERNAL}QmV6abRqyRq1hs82LV226fgjUHn8pa9roiA4K8PYwHfw9f`}
              priority
              draggable={false}
            />
          </div>
        </div>
      </div>
      <div className="w-full relative flex flex-col h-full px-2 sm:px-12 text-xs md:text-base">
        <div className="w-full h-fit font-lib text-mainText relative flex flex-row justify-between items-center">
          <div className="w-fit h-fit relative items-center justify-center ml-0">
            212
          </div>
          <div className="w-fit h-fit relative tems-center justify-center mr-0">
            917 646
          </div>
        </div>
        <div className="w-full h-full relative flex items-center justify-center">
          <div
            className={`relative flex border-4 md:border-8 w-full h-[57vw] pb-2 rounded-xl border-mainText bg-mainText`}
          >
            <Image
              src={`${INFURA_GATEWAY_INTERNAL}Qme1kXGZZWYQQVWRXYarxdHn97PwKorxyyXm8g237Fav8u`}
              layout="fill"
              className="w-full rounded-xl"
              priority
              draggable={false}
            />
            <div className="relative w-full h-full flex flex-row items-center justify-center">
              <video
                autoPlay
                muted
                loop
                className="relative max-w-none border-gray-900 border-4 md:border-8 w-[14vw] h-[18vw] object-cover flex  bg-offBlack"
              >
                <source
                  src={`${INFURA_GATEWAY_INTERNAL}Qmf8TfPYHbUUbaeVmpGwRQRYXENfNz3JEVwa76nRAt6BjR`}
                  type="video/mp4"
                ></source>
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full wide:w-fit flex items-center justify-center h-fit text-mainText flex-col midi:px-12 sm:px-2 gap-4">
        <div className="relative w-full h-fit flex flex-col preG:flex-row items-center preG:items-end justify-center preG:justify-between gap-1.5 text-mainText preG:px-0 px-2">
          <div className="relative w-full preG:w-fit h-fit flex items-start justify-center font-lib text-xs flex gap-1 flex-col">
            <div className="relative w-fit h-fit flex items-center justify-start">
              x03.m-4
            </div>
            <div className="relative w-fit h-fit flex items-center justify-start">
              <Image
                height={15}
                width={60}
                src={`${INFURA_GATEWAY_INTERNAL}QmUcmM6bagB18xKFhSgqpBPxvMuuD7VkTW89on5guyLYsE`}
                priority
                draggable={false}
              />
            </div>
            <div className="relative w-52 h-fit flex items-center justify-start font-mag text-lg">
              {dict?.distro?.mesh}
            </div>
          </div>
          <div className="relative w-full preG:w-fit h-fit flex items-end justify-end preG:justify-center font-lib">
            {dict?.distro?.source}
          </div>
        </div>
        <div className="relative w-full h-fit justify-center items-center flex">
          <Blender
            dict={dict}
            blenderPage={blenderPage}
            setBlenderPage={setBlenderPage}
          />
        </div>
      </div>
      <div className="relative w-full h-fit flex flex-col gap-12">
        <div className="relative w-full h-full flex flex-col half:flex-row gap-12 sm:px-12 px-2 justify-between items-center">
          <div className="relative sm:w-full w-fit h-fit sm:h-40 flex flex-col sm:flex-row gap-2 items-center justify-between">
            <div className="relative h-fit sm:w-fit w-full sm:h-full flex items-center justify-center flex-row sm:flex-col">
              <div className="relative h-3 w-px sm:w-3 sm:h-px  bg-mainText flex items-center justify-center"></div>
              <div className="relative w-full sm:w-px h-px sm:h-full bg-mainText flex items-center justify-center"></div>
              <div className="relative h-3 w-px sm:w-3 sm:h-px bg-mainText flex items-center justify-center"></div>
            </div>
            <div
              className={`relative w-1 sm:w-1.5 h-8 sm:h-1/2 whitespace-nowrap rotate-90 sm:rotate-0`}
            >
              <Image
                layout="fill"
                src={`${INFURA_GATEWAY_INTERNAL}QmNMLRCxVeubxtYNzaTaVciTKcBYtSp1c1UaN2yFDhduiD`}
                priority
                draggable={false}
              />
            </div>
            <div className="relative w-fit  text-center h-fit font-libB text-sm p-6 border border-mainText flex items-center justify-center break-word text-mainText">
              {dict?.distro?.public}
            </div>
            <div
              className={`relative w-1 sm:w-1.5 h-8 sm:h-1/2 whitespace-nowrap rotate-90 sm:rotate-0`}
            >
              <Image
                layout="fill"
                src={`${INFURA_GATEWAY_INTERNAL}QmWoJ4fvb9uojxiPKadtY83r8jTAuSiPKEZZrcb5jqDFRq`}
                priority
                draggable={false}
              />
            </div>
            <div className="relative h-fit sm:w-fit w-full sm:h-full flex items-center justify-center flex-row sm:flex-col">
              <div className="relative h-3 w-px sm:w-3 sm:h-px  bg-mainText flex items-center justify-center"></div>
              <div className="relative w-full sm:w-px h-px sm:h-full bg-mainText flex items-center justify-center"></div>
              <div className="relative h-3 w-px sm:w-3 sm:h-px bg-mainText flex items-center justify-center"></div>
            </div>
          </div>
          <div className="relative w-full h-fit flex items-center justify-center half:justify-end font-gisL text-mainText text-center half:text-right half:mr-0">
            <div className="relative w-3/4 h-fit flex items-center justify-center half:justify-end">
              {dict?.distro?.fashion}
            </div>
          </div>
        </div>
        <div className="relative w-full h-fit flex flex-row overflow-x-hidden justify-start items-center py-4 gap-4">
          <Marquee
            style={{
              gap: "4px",
              position: "relative",
              display: "flex",
            }}
            gradient={false}
            speed={30}
            direction={"right"}
          >
            {TEMPLATES.map((image, index) => {
              return (
                <div
                  key={index}
                  className="relative w-60 h-60 flex items-center justify-center rounded-md mr-3"
                >
                  <Image
                    src={`${INFURA_GATEWAY_INTERNAL}${image}`}
                    objectFit={"contain"}
                    layout={"fill"}
                    objectPosition="top"
                    draggable={false}
                  />
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
