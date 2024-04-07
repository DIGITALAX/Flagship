import type { NextPage } from "next";
import Head from "next/head";
import useGallery from "../components/Home/hooks/useGallery";
import Image from "next/legacy/image";
import { INFURA_GATEWAY } from "@/lib/constants";
import { HomeProps } from "@/components/Home/types/home.types";
import useLibrary from "@/components/Home/hooks/useLibrary";
import Library from "@/components/Home/components/Library";
import Slider from "@/components/Home/components/Slider";
import Display from "@/components/Home/components/Display";
import Header from "@/components/Layout/modules/Header";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import useHeader from "@/components/Layout/hooks/useHeader";
import { useAccount } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: NextPage<HomeProps> = ({
  router,
  rewind,
  changeColor,
  heartColor,
}) => {
  const { t, i18n } = useTranslation("common");
  const dispatch = useDispatch();
  const { address } = useAccount();
  const { openConnectModal } = useConnectModal();
  const fullScreenVideo = useSelector(
    (state: RootState) => state.app.fullScreenVideoReducer
  );
  const {
    currentIndex,
    setCurrentIndex,
    setMore,
    more,
    handleShop,
    shop,
    galleryLoading,
    gallery,
  } = useGallery();
  const { currentBook, setCurrentBook, lastBook, handleLastBook } =
    useLibrary();
  const {
    videoLoading,
    currentVideo,
    changeVideo,
    setVideoLoading,
    handleSendMessage,
    message,
    messageLoading,
    setMessage,
    chosenLanguage,
    setChosenLanguage,
  } = useHeader(address, i18n, t);

  return (
    <div className="w-full h-full flex flex-col bg-mainBg gap-12 items-center justify-start">
      <Header
        chosenLanguage={chosenLanguage}
        setChosenLanguage={setChosenLanguage}
        changeVideo={changeVideo}
        fullScreenVideo={fullScreenVideo}
        dispatch={dispatch}
        rewind={rewind}
        i18n={i18n}
        changeColor={changeColor}
        heartColor={heartColor}
        handleShop={handleShop}
        currentVideo={currentVideo}
        videoLoading={videoLoading}
        setVideoLoading={setVideoLoading}
        address={address}
        handleSendMessage={handleSendMessage}
        message={message}
        setMessage={setMessage}
        messageLoading={messageLoading}
        openConnectModal={openConnectModal}
        t={t}
      />
      <Head>
        <title>DIGITALAX</title>
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
      <Display
        shop={shop}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        router={router}
        setMore={setMore}
        more={more}
        dispatch={dispatch}
        galleryLoading={galleryLoading}
        gallery={gallery}
        t={t}
      />
      <div className="w-[95vw] half:w-[80vw] relative flex items-center justify-center min-h-[120vw] h-[80vh] md:h-[180vh] border-2 md:border-8 bg-mainText border-diy">
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            layout="fill"
            objectFit="cover"
            src={`${INFURA_GATEWAY}/ipfs/QmXnDtWEvHA2PNZeQWxVd1KotF5JGvfBp4hbcvgTuE3pdk`}
            draggable={false}
          />
        </div>
        <div className="absolute left-6 2xl:bottom-1/3 bottom-32 preG:bottom-48 sm:bottom-60 w-fit h-fit flex flex-col gap-6 items-center justify-center">
          {[
            "QmaU44DD7KEPAfQfrYB1hGs8KJVr2G2Ua7BzkNd9iRcC47",
            "QmQoDj9jjU81mgBfdXT8P83EZmyrXRQmL6scNGgaMTivys",
            "QmSztbqHjXyghFm6xr9vT89Yw68aq6BZPsEu9g5eGBNmZG",
          ].map((video: string, index: number) => {
            return (
              <div
                key={index}
                className="relative items-center justify-center w-20 sm:w-40 md:w-72 h-20 sm:h-40 md:h-60 flex rounded-xl p-0.5"
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
                    ></source>
                  </video>
                </div>
              </div>
            );
          })}
        </div>
        <div className="absolute w-full h-fit bottom-10 left-0 flex items-center justify-center px-3 sm:px-10 py-3 bg-diy">
          <div className="relative text-diyText text-[7.1vw] whitespace-nowrap text-center w-full font-mag flex items-center justify-center">
            {t("threads")}
          </div>
        </div>
      </div>
      <Library
        lastBook={lastBook}
        currentBook={currentBook}
        setCurrentBook={setCurrentBook}
        handleLastBook={handleLastBook}
        dispatch={dispatch}
        router={router}
      />
      <Slider />
      <div className="relative w-full h-full text-mainText bg-mainBg font-lib sm:text-[1.8vw] text-[4vw] lg:text-[1.5vw] xl:text-[1vw] text-center pb-28 break-word px-2 flex items-center justify-center">
        {t("cc0")}
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "footer"])),
  },
});
