import {
  INFURA_GATEWAY,
  POSTER_IMAGES,
  PRINT_IMAGES,
  TV_IMAGES,
} from "@/lib/constants";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/legacy/image";
import Heart from "@/components/Layout/modules/Heart";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { PrintsProps } from "@/components/Prints/types/prints.types";

const Prints: NextPage<PrintsProps> = ({
  heartColor,
  changeColor,
  rewind,
  router,
}): JSX.Element => {
  const { t } = useTranslation("prints");
  return (
    <div className="min-w-screen min-h-full h-full flex flex-col bg-mainBg justify-start items-center pb-28 gap-32">
      <div className="relative w-full h-fit flex flex-col items-center justify-start gap-3">
        <div
          className="relative w-full h-fit flex flex-col sm:flex-row justify-between gap-10 sm:gap-4 pt-4 px-2 sm:px-6 items-center"
          ref={rewind}
        >
          <div
            className="relative w-fit h-fit flex font-rain text-mainText text-4xl mr-0 items-center justify-center cursor-sewingHS"
            onClick={() => router.push("/")}
          >
            DIGITALAX
          </div>
          <div className="relative w-fit h-fit flex ml-0 items-center justify-center flex-col sm:flex-row gap-3">
            <div className="relative w-fit h-fit flex font-bit text-mainText text-2xl sm:text-4xl mr-0 items-center justify-center top-1">
              {t("prints")}
            </div>
            <Heart changeColor={changeColor} heartColor={heartColor} />
          </div>
        </div>
      </div>

      <Head>
        <title>{t("prints")}</title>
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
      <div className="relative w-1/2 h-fit flex items-start justify-start flex-col">
        {PRINT_IMAGES.map((image, index) => {
          return (
            <div className="relative w-full" key={index}>
              <Image
                layout="responsive"
                draggable={false}
                src={`${INFURA_GATEWAY}/ipfs/${image}`}
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
            src={`${INFURA_GATEWAY}/ipfs/QmZCkTKy86qV8BiZwxjbCoSQxeGoaGVLVZcBUtgbECMwez`}
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
            src={`${INFURA_GATEWAY}/ipfs/QmXdpVMP9c1whwfmq8J4qtcHUTMwTu2HK3ekKaZ2DfLnPQ`}
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
            src={`${INFURA_GATEWAY}/ipfs/QmPAUJTJDdjmWWwVuY93ihWEyQcGyY6vKXnzx7TSzHKaqe`}
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
            src={`${INFURA_GATEWAY}/ipfs/QmasNRJJQpbYu9dmp6zyGQN61AuLjWpwmbtaa7tFhe8U8d`}
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
            src={`${INFURA_GATEWAY}/ipfs/Qmb2dNxfbZAKhCgkyRNusgQYtYE95ngEQL291uTre3yBsz`}
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
            src={`${INFURA_GATEWAY}/ipfs/QmP2wbPYNBzxkATSFkSjqE9KaeYudCKe9HNEcNdNJXqbMc`}
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
            src={`${INFURA_GATEWAY}/ipfs/QmcmP1TXb1xsNDTzPgm9ott1YQ64ZSR8rPwsXJhm1pRT3S`}
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
                src={`${INFURA_GATEWAY}/ipfs/${image}`}
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
                src={`${INFURA_GATEWAY}/ipfs/${image}`}
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
};

export default Prints;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["prints", "footer"])),
  },
});
