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
import { useContext, useEffect, useRef, useState } from "react";
import Description from "../components/home/description/Description";
import useFeed from "../components/home/social/hooks/useFeed";
import { GlobalContext } from "./_app";
import { HomeProps } from "../types/general.types";
import RefactorElement from "../components/common/modals/RefactorElement";
import CC0 from "../components/home/cc0/CC0";
import Image from "next/image";

const Home: NextPage<HomeProps> = ({ queryWindowSize2XL, shop }) => {
  const [RefactorModal, setRefactorModal] = useState<boolean>(false);

  const { setExpressInterest } = useContext(GlobalContext);
  const {
    publicationsFeed,
    getMoreFeed,
    queryWindowSize,
    queryWindowSizeMobile,
    queryWindowSizeXL,
  } = useFeed();

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState({ x: 1, y: 1 });

  const imageRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageRef.current && parentRef.current) {
      const intervalId = setInterval(() => {
        setPosition((prevPosition) => {
          const imageWidth = imageRef.current!.offsetWidth;
          const imageHeight = imageRef.current!.offsetHeight;
          const parentWidth = parentRef.current!.offsetWidth;
          const parentHeight = parentRef.current!.offsetHeight;
          const offsetX = imageWidth;
          const offsetY = imageHeight;
          const nextX = prevPosition.x + direction.x * 1.5;
          const nextY = prevPosition.y + direction.y * 1.5;
          const minX = 0;
          const minY = 0;
          const maxX = parentWidth - imageWidth;
          const maxY = parentHeight - imageHeight;

          let nextDirection = { x: direction.x, y: direction.y };
          if (nextX <= minX) {
            nextDirection.x = 1;
          } else if (nextX >= maxX) {
            nextDirection.x = -1;
          }

          if (nextY <= minY) {
            nextDirection.y = 1;
          } else if (nextY >= maxY) {
            nextDirection.y = -1;
          }

          const boundedX = Math.max(minX, Math.min(maxX, nextX));
          const boundedY = Math.max(minY, Math.min(maxY, nextY));

          setDirection(nextDirection);
          return { x: boundedX, y: boundedY };
        });
      }, 2);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [position, direction, imageRef, parentRef]);

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
        <meta property="og:image" content="https://digitalax.xyz/card.png/" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="relative w-full h-fit flex flex-col" ref={parentRef}>
        <Title />
        <Banner />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10">
          <div className="relative w-full h-full overflow-hidden">
            <div
              className="relative w-10 sm:w-20 w-10 sm:h-20"
              style={{ left: position.x, top: position.y }}
              ref={imageRef}
            >
              <a
                className="h-full w-full relative cursor-sewingHS"
                target="_blank"
                rel="noreferrer"
                href="https://www.chromadin.xyz"
              >
                <Image src="/images/radio.png" width={100} height={100} />
              </a>
            </div>
          </div>
        </div>
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
      />
      <Library setRefactorModal={setRefactorModal} />
      <Slider />
      <CC0 />
      {RefactorModal && <RefactorElement setRefactorModal={setRefactorModal} />}
    </div>
  );
};

export default Home;
