import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/home/banner/Banner";
import Blender from "../components/home/blender/Blender";
import Dials from "../components/home/dials/Dials";
import Display from "../components/home/display/Display";
import Glass from "../components/home/glass/Glass";
import Library from "../components/home/library/Library";
import Poster from "../components/home/poster/Poster";
import Slider from "../components/home/slider/Slider";
import Social from "../components/home/social/Social";
import Static from "../components/home/static/Static";
import TV from "../components/home/tv/TV";
import World from "../components/home/world/World";
import Title from "./../components/home/title/Title";
import { useContext, useEffect, useState } from "react";
import Description from "../components/home/description/Description";
import useFeed from "../components/home/social/hooks/useFeed";
import { GlobalContext } from "./_app";
import { HomeProps } from "../types/general.types";
import RefactorElement from "../components/common/modals/RefactorElement";
import CC0 from "../components/home/cc0/CC0";
import { useDispatch } from "react-redux";

const Home: NextPage<HomeProps> = ({ queryWindowSize2XL, shop }) => {
  const [RefactorModal, setRefactorModal] = useState<boolean>(false);
  const { setExpressInterest } = useContext(GlobalContext);
  const dispatch = useDispatch();
  const {
    publicationsFeed,
    getMoreFeed,
    queryWindowSize,
    queryWindowSizeMobile,
    queryWindowSizeXL,
  } = useFeed();

  useEffect(() => {
    const scrollElement = document.getElementById("scrollMicro");
    if (scrollElement) {
      scrollElement.scrollLeft =
        (scrollElement.scrollWidth - scrollElement.clientWidth) / 2;
    }
  }, []);

  return (
    <div className="min-w-screen min-h-full h-full flex flex-col bg-mainBg">
      <Head>
        <title>DIGITALAX</title>
        <meta
          name="description"
          content="We write prompts, design styles & build code for protocol-ecosystems where web3 fashion & latent machines draw distances between ideas & reality closer each day."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:site_name" content="DIGITALAX" />
        <meta property="og:image" content="https://www.digitalax.xyz/card.png/" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="relative w-full h-fit flex flex-col">
        <Title />
        <Banner />
      </div>
      <Display
        shop={shop}
        setExpressInterest={setExpressInterest}
        queryWindowSize2XL={queryWindowSize2XL}
      />
      <Description />
      <Blender />
      <Dials />
      <TV />
      <Glass />
      <Static />
      <Poster />
      <World />
      <Social
        publicationsFeed={publicationsFeed}
        getMoreFeed={getMoreFeed}
        queryWindowSize={queryWindowSize}
        queryWindowSizeMobile={queryWindowSizeMobile}
        queryWindowSizeXL={queryWindowSizeXL}
        dispatch={dispatch}
      />
      <Library setRefactorModal={setRefactorModal} />
      <Slider />
      <CC0 />
      {RefactorModal && <RefactorElement setRefactorModal={setRefactorModal} />}
    </div>
  );
};

export default Home;
