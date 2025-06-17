"use client";

import { ModalContext } from "@/app/providers";
import Head from "next/head";
import Image from "next/legacy/image";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import Heart from "../Common/modules/Heart";
import {
  INFURA_GATEWAY_INTERNAL,
  POSTER_IMAGES,
  PRINT_IMAGES,
  TV_IMAGES,
} from "@/app/lib/constants";

export default function PrintsEntry({ dict }: { dict: any }) {
  const context = useContext(ModalContext);
  const router = useRouter();
  return (
    <div
      className="min-w-screen min-h-full h-full flex flex-col bg-mainBg justify-start items-center pb-28 gap-32"
      id="noScroll"
    >
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
              {dict?.prints?.prints}
            </div>
            <Heart
              changeColor={context?.changeColor}
              heartColor={context?.heartColor!}
            />
          </div>
        </div>
      </div>
      <div className="relative w-1/2 h-fit flex items-start justify-start flex-col">
        {PRINT_IMAGES.map((image, index) => {
          return (
            <div className="relative w-full" key={index}>
              <Image
                layout="responsive"
                draggable={false}
                src={`${INFURA_GATEWAY_INTERNAL}${image}`}
                objectFit="contain"
                priority
                width={512}
                height={798}
              />
            </div>
          );
        })}
        <div className="relative w-full">
          <Image
            layout="responsive"
            draggable={false}
            src={`${INFURA_GATEWAY_INTERNAL}QmZCkTKy86qV8BiZwxjbCoSQxeGoaGVLVZcBUtgbECMwez`}
            objectFit="contain"
            priority
            width={512}
            height={787}
          />
        </div>
        <div className="relative w-full">
          <Image
            layout="responsive"
            draggable={false}
            src={`${INFURA_GATEWAY_INTERNAL}QmXdpVMP9c1whwfmq8J4qtcHUTMwTu2HK3ekKaZ2DfLnPQ`}
            objectFit="contain"
            priority
            width={512}
            height={538}
          />
        </div>
        <div className="relative w-full">
          <Image
            layout="responsive"
            draggable={false}
            src={`${INFURA_GATEWAY_INTERNAL}QmPAUJTJDdjmWWwVuY93ihWEyQcGyY6vKXnzx7TSzHKaqe`}
            objectFit="contain"
            priority
            width={512}
            height={493}
          />
        </div>
        <div className="relative w-full">
          <Image
            layout="responsive"
            draggable={false}
            src={`${INFURA_GATEWAY_INTERNAL}QmasNRJJQpbYu9dmp6zyGQN61AuLjWpwmbtaa7tFhe8U8d`}
            objectFit="contain"
            priority
            width={512}
            height={358}
          />
        </div>
        <div className="relative w-full">
          <Image
            layout="responsive"
            draggable={false}
            src={`${INFURA_GATEWAY_INTERNAL}Qmb2dNxfbZAKhCgkyRNusgQYtYE95ngEQL291uTre3yBsz`}
            objectFit="contain"
            priority
            width={512}
            height={358}
          />
        </div>
        <div className="relative w-full">
          <Image
            layout="responsive"
            draggable={false}
            src={`${INFURA_GATEWAY_INTERNAL}QmP2wbPYNBzxkATSFkSjqE9KaeYudCKe9HNEcNdNJXqbMc`}
            objectFit="contain"
            priority
            width={512}
            height={336}
          />
        </div>
        <div className="relative w-full">
          <Image
            layout="responsive"
            draggable={false}
            src={`${INFURA_GATEWAY_INTERNAL}QmcmP1TXb1xsNDTzPgm9ott1YQ64ZSR8rPwsXJhm1pRT3S`}
            objectFit="contain"
            priority
            width={512}
            height={661}
          />
        </div>
        {POSTER_IMAGES.map((image, index) => {
          return (
            <div className="relative w-full" key={index}>
              <Image
                layout="responsive"
                draggable={false}
                src={`${INFURA_GATEWAY_INTERNAL}${image}`}
                objectFit="contain"
                priority
                width={512}
                height={797}
              />
            </div>
          );
        })}
        {TV_IMAGES.map((image, index) => {
          return (
            <div className="relative w-full" key={index}>
              <Image
                layout="responsive"
                draggable={false}
                src={`${INFURA_GATEWAY_INTERNAL}${image}`}
                objectFit="contain"
                priority
                width={512}
                height={712.5}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
