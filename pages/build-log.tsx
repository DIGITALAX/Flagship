import Heart from "@/components/Layout/modules/Heart";
import useLog from "@/components/Log/hooks/useLog";
import { LogProps } from "@/components/Log/types/log.types";
import { IMAGE_LOGS, INFURA_GATEWAY, LOG, QUESTIONS } from "@/lib/constants";
import descriptionRegex from "@/lib/lens/helpers/descriptionRegex";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/legacy/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const BuildLog: NextPage<LogProps> = ({ rewind, router }): JSX.Element => {
  const { t } = useTranslation("log");
  const { currentImage, setCurrentImage } = useLog();
  return (
    <div className="min-w-screen min-h-screen h-full flex flex-col bg-gradient-to-b from-windows to-black justify-start items-center pb-28 gap-32 px-2 sm:px-6">
      <div className="relative w-full h-fit flex flex-col items-center justify-start gap-8">
        <div
          className="relative w-full h-fit flex flex-col sm:flex-row justify-between gap-10 sm:gap-4 pt-4 items-center"
          ref={rewind}
        >
          <div
            className="relative w-fit h-fit flex font-rain text-white text-4xl mr-0 items-center justify-center cursor-sewingHS"
            onClick={() => router.push("/")}
          >
            DIGITALAX
          </div>
          <div className="relative w-fit h-fit flex ml-0 items-center justify-center flex-col sm:flex-row gap-3">
            <div className="relative w-fit h-fit flex font-bit text-white text-2xl sm:text-4xl mr-0 items-center justify-center top-1">
              {t("build")}
            </div>
            <Heart heartColor={"white"} />
          </div>
        </div>
        <div className="relative w-full h-[70rem] sm:h-[50rem] half:h-[40rem] flex items-center justify-between gap-8 flex-col half:flex-row">
          <div className="relative w-fit half:w-100 h-fit half:h-full flex half:flex-nowrap flex-wrap half:flex-col items-start font-bit text-white text-lg justify-start half:justify-between bg-gradient-to-b from-windows rounded-sm to-white/30 gap-4 p-3">
            {[
              t("start"),
              t("cypher"),
              t("npc"),
              t("coin"),
              t("manu"),
              t("mona"),
              t("kinora"),
              t("vision"),
              t("chromadin"),
              t("lit"),
              t("dial"),
              t("legend"),
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
              src={`${INFURA_GATEWAY}/ipfs/${IMAGE_LOGS[currentImage].image}`}
            />
            {currentImage > 1 && (
              <div
                className={`absolute bottom-3 right-3 w-48 h-fit border border-white rounded-md bg-black/70 px-2 py-3 flex flex-col items-center gap-5 justify-center text-white text-center ${
                  router.locale == "es" ? "font-bit" : "font-mana"
                }`}
              >
                <div className="relative w-fit h-fit flex items-center jutify-center text-lg break-words">
                  {
                    IMAGE_LOGS[currentImage].title[
                      router.locale! as "en" | "es"
                    ]
                  }
                </div>
                <div
                  className={`relative w-fit h-fit flex items-center jutify-center break-words ${
                    router.locale == "es" ? "text-base" : "text-sm"
                  }`}
                >
                  {
                    IMAGE_LOGS[currentImage].description[
                      router.locale! as "en" | "es"
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
            ++ {t("record")} ++
          </div>
          <div className="relative w-fit h-fit flex items-center justify-center break-words">
            ++ {t("built")} ++
          </div>
          <div className="relative w-fit h-fit flex items-center justify-center break-words">
            ++ {t("dev")} ++
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
                    {item.title[router.locale as "en" | "es"]}
                  </div>
                  <div
                    className={`relative w-fit h-fit flex items-center  break-words whitespace-pre-line justify-start text-solapa ${
                      router.locale == "es"
                        ? "font-bit text-sm"
                        : "font-mana text-xs"
                    }`}
                    dangerouslySetInnerHTML={{
                      __html: descriptionRegex(
                        item.description?.[router.locale as "en" | "es"] || "",
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
          ++ {t("general")} ++
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
                    {item.title[router.locale as "en" | "es"]}
                  </div>
                  <div
                    className={`relative w-fit h-fit flex items-center whitespace-nowrap break-words whitespace-pre-line	justify-start text-solapa ${
                      router.locale == "es"
                        ? "font-bit text-sm"
                        : "font-mana text-xs"
                    }`}
                    dangerouslySetInnerHTML={{
                      __html: descriptionRegex(
                        item.description?.[router.locale as "en" | "es"] || "",
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
};

export default BuildLog;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["log", "footer"])),
  },
});
