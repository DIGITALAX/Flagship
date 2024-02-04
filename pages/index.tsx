import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import useGallery from "../components/Home/hooks/useGallery";
import Image from "next/legacy/image";
import { INFURA_GATEWAY } from "@/lib/constants";
import { HomeProps } from "@/components/Home/types/home.types";
import useLibrary from "@/components/Home/hooks/useLibrary";
import Library from "@/components/Home/components/Library";
import Slider from "@/components/Home/components/Slider";
import Display from "@/components/Home/components/Display";
import Header from "@/components/Layout/components/Header";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Home: NextPage<HomeProps> = ({
  queryWindowSize2XL,
  router,
  queryWindowInbetween,
  rewind,
  changeColor,
  heartColor,
}) => {
  const dispatch = useDispatch();
  const fullScreenVideo = useSelector(
    (state: RootState) => state.app.fullScreenVideoReducer
  );
  const { currentIndex, setCurrentIndex, setMore, more, handleShop, shop } =
    useGallery();
  const { currentBook, setCurrentBook, lastBook, handleLastBook } =
    useLibrary();
  useEffect(() => {
    const scrollElement = document.getElementById("scrollMicro");
    if (scrollElement) {
      scrollElement.scrollLeft =
        (scrollElement.scrollWidth - scrollElement.clientWidth) / 2;
    }
  }, []);

  return (
    <div className="w-full h-full flex flex-col bg-mainBg gap-12 items-center justify-start">
      <Header
        fullScreenVideo={fullScreenVideo}
        dispatch={dispatch}
        rewind={rewind}
        changeColor={changeColor}
        heartColor={heartColor}
        handleShop={handleShop}
        router={router}
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
        queryWindowInbetween={queryWindowInbetween}
        shop={shop}
        queryWindowSize2XL={queryWindowSize2XL}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        router={router}
        setMore={setMore}
        more={more}
        dispatch={dispatch}
      />

      <div className="w-full relative flex items-center justify-center min-h-[120vw] h-[180vh] border-2 sm:border-8 bg-offBlack border-diy">
        <div className="absolute w-full h-full flex items-center justify-center">
          <Image
            layout="fill"
            objectFit="cover"
            src={`${INFURA_GATEWAY}/ipfs/QmXnDtWEvHA2PNZeQWxVd1KotF5JGvfBp4hbcvgTuE3pdk`}
            draggable={false}
          />
        </div>
        <div className="relative w-fit h-fit flex flex-col gap-3 items-center justify-center">
          {["crt1", "crt2", "crt3"].map((video: string, index: number) => {
            return (
              <div
                key={index}
                className="relative items-center justify-center w-[74vw] h-[62vw] sm:w-72 sm:h-60 flex pb-3 pl-10"
              >
                <div
                  id="crt"
                  className="relative bg-offBlack w-full h-full rounded-xl flex items-center justify-center"
                >
                  <video
                    autoPlay
                    muted
                    loop
                    id="crt"
                    className="relative p-0.5 h-full w-full object-cover rounded-xl flex items-center justify-center"
                  >
                    <source
                      src={`"/videos/${video}.mp4`}
                      type="video/mp4"
                    ></source>
                  </video>
                </div>
              </div>
            );
          })}
        </div>
        <div className="absolute w-full h-fit pt-10 pb-8 flex items-center justify-center">
          <div className="relative text-diyText text-[8.1vw] whitespace-nowrap text-center px-3 sm:px-10 w-full font-mag bg-diy flex items-center justify-center py-3">
            LATENT THREADS
          </div>
        </div>
      </div>
      <Library
        lastBook={lastBook}
        currentBook={currentBook}
        setCurrentBook={setCurrentBook}
        handleLastBook={handleLastBook}
        dispatch={dispatch}
      />
      <Slider />
      <div className="relative w-full h-full text-mainText bg-mainBg font-lib sm:text-[1.8vw] text-[4vw] lg:text-[1.5vw] xl:text-[1vw] text-center pb-28 break-word px-2 flex items-center justify-center">
        100% CC0. We build in, for, and from the public domain.
      </div>
    </div>
  );
};

export default Home;
