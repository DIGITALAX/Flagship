"use client";

import Head from "next/head";
import Image from "next/legacy/image";
import { useContext } from "react";
import { ModalContext } from "@/app/providers";
import { usePathname, useRouter } from "next/navigation";
import useLog from "../hooks/useLog";
import Heart from "../../Common/modules/Heart";
import {
  IMAGE_LOGS,
  INFURA_GATEWAY_INTERNAL,
  LOG,
  QUESTIONS,
} from "@/app/lib/constants";
import descriptionRegex from "@/app/lib/helpers/descriptionRegex";

export default function BuildLogEntry({ dict }: { dict: any }) {
  const context = useContext(ModalContext);
  const router = useRouter();
  const path = usePathname();
  const { currentImage, setCurrentImage } = useLog();
  return (
    <div className="min-w-screen min-h-screen h-full flex flex-col bg-gradient-to-b from-windows to-black justify-start items-center pb-28 gap-32 px-2 sm:px-6">
      <div className="relative w-full h-fit flex flex-col items-center justify-start gap-8">
        <div
          className="relative w-full h-fit flex flex-col sm:flex-row justify-between gap-10 sm:gap-4 pt-4 items-center"
          ref={context?.rewind}
        >
          <h1
            className="relative w-fit h-fit flex font-rain text-white text-4xl mr-0 items-center justify-center cursor-sewingHS"
            onClick={() => router.push("/")}
          >
            DIGITALAX
          </h1>
          <div className="relative w-fit h-fit flex ml-0 items-center justify-center flex-col sm:flex-row gap-3">
            <div className="relative w-fit h-fit flex font-bit text-white text-2xl sm:text-4xl mr-0 items-center justify-center top-1">
              {dict?.log?.build}
            </div>
            <Heart heartColor={"white"} />
          </div>
        </div>
        <div className="relative w-full h-[70rem] sm:h-[50rem] half:h-[40rem] flex items-center justify-between gap-8 flex-col half:flex-row">
          <div className="relative w-fit half:w-100 h-fit half:h-full flex half:flex-nowrap flex-wrap half:flex-col items-start font-bit text-white text-sm justify-start half:justify-between bg-gradient-to-b from-windows rounded-sm to-white/30 gap-4 p-3">
            {[
              dict?.log?.start,
              dict?.log?.cypher,
              dict?.log?.npc,
              dict?.log?.coin,
              dict?.log?.manu,
              "Mona",
              dict?.log?.kinora,
              dict?.log?.vision,
              "Chromadin",
              dict?.log?.lit,
              dict?.log?.dial,
              dict?.log?.legend,
              "TripleA",
              "Skyhunters",
              "Lucidity",
            ].map((item: string, index: number) => {
              return (
                <div
                  className="relative w-fit h-fit flex items-center justify-between flex-row gap-4 cursor-sewingHS"
                  key={index}
                  onClick={() => setCurrentImage(index)}
                >
                  <div className="relative w-fit h-fit flex items-center justify-center">{`${index}.`}</div>
                  <div
                    className={`relative w-fit h-fit flex items-center justify-center ${
                      index == currentImage && "text-black"
                    }`}
                  >
                    {item}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="relative w-full h-full rounded-sm bg-black flex">
            <Image
              key={currentImage}
              draggable={false}
              className="rounded-sm"
              layout="fill"
              objectFit={currentImage > 1 ? "cover" : "contain"}
              src={`${INFURA_GATEWAY_INTERNAL}${IMAGE_LOGS[currentImage].image}`}
            />
            {currentImage > 1 && (
              <div
                className={`absolute bottom-3 right-3 w-48 h-fit border border-white rounded-md bg-black/70 px-2 py-3 flex flex-col items-center gap-5 justify-center text-white text-center ${
                  path.match(/(?<=\/)(en|es)(?=\/)/)?.[0] == "es"
                    ? "font-bit"
                    : "font-mana"
                }`}
              >
                <div className="relative w-fit h-fit flex items-center jutify-center text-lg break-words">
                  {
                    IMAGE_LOGS[currentImage].title[
                      path.match(/(?<=\/)(en|es)(?=\/)/)?.[0] as "en" | "es"
                    ]
                  }
                </div>
                <div
                  className={`relative w-fit h-fit flex items-center jutify-center break-words ${
                    path.match(/(?<=\/)(en|es)(?=\/)/)?.[0] == "es"
                      ? "text-base"
                      : "text-sm"
                  }`}
                >
                  {
                    IMAGE_LOGS[currentImage].description[
                      path.match(/(?<=\/)(en|es)(?=\/)/)?.[0] as "en" | "es"
                    ]
                  }
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Head>
        <title>Build Log</title>
        <meta
          name="description"
          content="We write prompts, design styles & build code for protocol-ecosystems where web3 fashion & latent machines draw distances between ideas & reality closer each day."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:site_name" content="DIGITALAX" />
        <meta
          property="og:image"
          content="https://www.digitalax.xyz/card.png/"
        />
        <meta property="og:type" content="website" />
      </Head>
      <div className="relative w-full h-fit flex flex-col items-center justify-start gap-14 text-white font-bit">
        <div className="relative w-fit h-fit flex items-center justify-center gap-1 text-sm preG:text-2xl flex-col">
          <div className="relative w-fit h-fit flex items-center justify-center break-words">
            ++ {dict?.log?.record} ++
          </div>
          <div className="relative w-fit h-fit flex items-center justify-center break-words">
            ++ {dict?.log?.built} ++
          </div>
          <div className="relative w-fit h-fit flex items-center justify-center break-words">
            ++ {dict?.log?.dev} ++
          </div>
        </div>
        <div className="relative w-full h-fit flex items-start justify-center gap-10 text-left flex-col">
          {QUESTIONS.map(
            (
              item: {
                title: {
                  en: string;
                  es: string;
                };
                description: {
                  en: string;
                  es: string;
                };
              },
              index: number
            ) => {
              return (
                <div
                  className="relative w-fit h-fit flex items-start justify-center flex-col gap-2"
                  key={index}
                >
                  <div className="relative w-fit h-fit flex items-center justify-start text-xl">
                    {
                      item.title[
                        path.match(/(?<=\/)(en|es)(?=\/)/)?.[0] as "en" | "es"
                      ]
                    }
                  </div>
                  <div
                    className={`relative w-fit h-fit flex items-center  break-words whitespace-pre-line justify-start text-solapa ${
                      path.match(/(?<=\/)(en|es)(?=\/)/)?.[0] == "es"
                        ? "font-bit text-sm"
                        : "font-mana text-xs"
                    }`}
                    dangerouslySetInnerHTML={{
                      __html: descriptionRegex(
                        item.description?.[
                          path.match(/(?<=\/)(en|es)(?=\/)/)?.[0] as "en" | "es"
                        ] || "",
                        false
                      ),
                    }}
                  ></div>
                </div>
              );
            }
          )}
        </div>
        <div className="relative w-fit h-fit flex items-center justify-center gap-1 text-4xl flex-col pt-10">
          ++ {dict?.log?.general} ++
        </div>
        <div className="relative w-full h-fit flex items-start justify-center gap-10 text-left flex-col">
          {LOG.map(
            (
              item: {
                title: {
                  en: string;
                  es: string;
                };
                description: {
                  en: string;
                  es: string;
                };
              },
              index: number
            ) => {
              return (
                <div
                  className="relative w-fit h-fit flex items-start justify-center flex-col gap-2"
                  key={index}
                >
                  <div className="relative w-fit h-fit flex items-center justify-start text-xl">
                    {
                      item.title[
                        path.match(/(?<=\/)(en|es)(?=\/)/)?.[0] as "en" | "es"
                      ]
                    }
                  </div>
                  <div
                    className={`relative w-fit h-fit flex items-center whitespace-nowrap break-words whitespace-pre-line	justify-start text-solapa ${
                      path.match(/(?<=\/)(en|es)(?=\/)/)?.[0] == "es"
                        ? "font-bit text-sm"
                        : "font-mana text-xs"
                    }`}
                    dangerouslySetInnerHTML={{
                      __html: descriptionRegex(
                        item.description?.[
                          path.match(/(?<=\/)(en|es)(?=\/)/)?.[0] as "en" | "es"
                        ] || "",
                        false
                      ),
                    }}
                  ></div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
