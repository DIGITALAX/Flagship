import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import RefactorElement from "../components/Modals/components/RefactorElement";
import useGallery from "../components/Home/hooks/useGallery";
import Image from "next/legacy/image";
import { INFURA_GATEWAY } from "@/lib/constants";
import { HomeProps } from "@/components/Home/types/home.types";
import useLibrary from "@/components/Home/hooks/useLibrary";
import Description from "@/components/Home/components/Description";
import Library from "@/components/Home/components/Library";
import Slider from "@/components/Home/components/Slider";
import Display from "@/components/Home/components/Display";
import Banner from "@/components/Home/components/Banner";
import Title from "@/components/Home/components/Title";
import Header from "@/components/Layout/components/Header";

const Home: NextPage<HomeProps> = ({
  queryWindowSize2XL,
  router,
  queryWindowInbetween,
  rewind,
  changeColor,
  heartColor,
}) => {
  const [refactorModal, setRefactorModal] = useState<{
    open: boolean;
    transparency: boolean;
  }>({
    open: false,
    transparency: false,
  });

  const {
    currentImages,
    currentPage,
    paginateBackward,
    paginateForward,
    pageBoundaryForward,
    pageBoundaryBackward,
    setMore,
    more,
    setBlur,
    blur,
    handleShop,
    shop
  } = useGallery(router);
  const { showImage, setShowImage, setLink, link, lastBook, handleLastBook } =
    useLibrary();
  useEffect(() => {
    const scrollElement = document.getElementById("scrollMicro");
    if (scrollElement) {
      scrollElement.scrollLeft =
        (scrollElement.scrollWidth - scrollElement.clientWidth) / 2;
    }
  }, []);

  return (
    <div className="min-w-screen min-h-full h-full flex flex-col bg-mainBg">
      <Header
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
      <div className="relative w-full h-fit flex flex-col">
        <Title />
        <Banner />
      </div>
      <Display
        blur={blur}
        setBlur={setBlur}
        queryWindowInbetween={queryWindowInbetween}
        shop={shop}
        queryWindowSize2XL={queryWindowSize2XL}
        currentImages={currentImages}
        currentPage={currentPage}
        paginateBackward={paginateBackward}
        pageBoundaryBackward={pageBoundaryBackward}
        pageBoundaryForward={pageBoundaryForward}
        paginateForward={paginateForward}
        router={router}
        setMore={setMore}
        more={more}
      />
      <Description />
      <div className="w-full relative sm:grid grid-flow-col auto-cols-auto min-h-[120vw] h-[180vh] place-items-center pb-20">
        <div
          className={`h-full relative flex col-start-1 md:border-8 border-diy place-self-center bg-offBlack border-2 ${
            blur && "blur-sm animate-unblur"
          }`}
        >
          <Image
            layout="fill"
            objectFit="cover"
            src={`${INFURA_GATEWAY}/ipfs/QmXnDtWEvHA2PNZeQWxVd1KotF5JGvfBp4hbcvgTuE3pdk`}
            priority
            onLoadingComplete={() => setBlur(false)}
            draggable={false}
          />
          <div className="relative w-full h-full grid grid-flow-col auto-cols-auto">
            <div className="relative w-full h-fit place-self-end col-start-1">
              <div className="grid relative grid-flow-row auto-rows-auto w-full h-fit">
                <div className="relative row-start-1 w-[74vw] h-[62vw] sm:w-72 sm:h-60 self-end pb-3 pl-10">
                  <div
                    id="crt"
                    className="relative bg-offBlack w-full h-full rounded-xl"
                  >
                    <video
                      autoPlay
                      muted
                      loop
                      id="crt"
                      className="relative p-0.5 h-full w-full object-cover rounded-xl flex"
                    >
                      <source src="/videos/crt1.mp4" type="video/mp4"></source>
                    </video>
                  </div>
                </div>
                <div className="relative row-start-2 w-[74vw] h-[62vw] sm:w-72 sm:h-60 self-end pb-3 pl-10">
                  <div
                    id="crt"
                    className="relative w-full h-full rounded-xl  bg-offBlack"
                  >
                    <video
                      autoPlay
                      muted
                      loop
                      id="crt"
                      className="relative p-0.5 h-full w-full object-cover rounded-xl flex"
                    >
                      <source src="/videos/crt2.mp4" type="video/mp4"></source>
                    </video>
                  </div>
                </div>
                <div className="relative row-start-3 w-[74vw] h-[62vw] sm:w-72 sm:h-60 self-end pl-10">
                  <div
                    id="crt"
                    className="relative bg-offBlack w-full h-full rounded-xl"
                  >
                    <video
                      autoPlay
                      muted
                      loop
                      className="relative p-0.5 h-full w-full object-cover rounded-xl flex"
                    >
                      <source src="/videos/crt3.mp4" type="video/mp4"></source>
                    </video>
                  </div>
                </div>
                <div className="relative row-start-4 w-full h-fit pt-10 pb-8">
                  <div className="relative text-diyText text-[8.1vw] whitespace-nowrap text-center pl-3 pr-3 sm:pl-10 sm:pr-10 w-full font-mag bg-diy pt-3 pb-3">
                    LATENT THREADS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Library
        setLink={setLink}
        setShowImage={setShowImage}
        showImage={showImage}
        lastBook={lastBook}
        link={link}
        handleLastBook={handleLastBook}
        setRefactorModal={setRefactorModal}
      />
      <Slider />
      <div className="relative w-full h-full text-mainText bg-mainBg font-lib sm:text-[1.8vw] text-[4vw] lg:text-[1.5vw] xl:text-[1vw] text-center pb-28 break-word px-2">
        100% CC0. We build in, for, and from the public domain.
      </div>
      {refactorModal?.open && (
        <RefactorElement
          setRefactorModal={setRefactorModal}
          transparency={refactorModal?.transparency}
        />
      )}
    </div>
  );
};

export default Home;
