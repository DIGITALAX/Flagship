import Blender from "@/components/Distro/components/Blender";
import useDistro from "@/components/Distro/hooks/useDistro";
import { INFURA_GATEWAY, TEMPLATES, TV_IMAGES } from "@/lib/constants";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/legacy/image";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { DistroProps } from "@/components/Distro/types/distro.types";
import { useDispatch } from "react-redux";
import { setImageViewer } from "@/redux/reducers/imageViewerSlice";
import Tiles from "@/components/Distro/components/Tiles";
import useCypherSearch from "@/components/Distro/hooks/useCypherSearch";
import Heart from "@/components/Layout/components/Heart";

const DistroKit: NextPage<DistroProps> = ({
  heartColor,
  changeColor,
  rewind,
  router,
}): JSX.Element => {
  const dispatch = useDispatch();
  const { tvImages, setBlenderPage, setTvImages, blenderPage } = useDistro();
  const { handleMoreSearch, loaders, searchItems, filterConstants } =
    useCypherSearch();

  return (
    <div className="min-w-screen min-h-full h-full flex flex-col bg-mainBg justify-start items-center pb-28 gap-32">
      <div className="relative w-full h-fit flex flex-col items-center justify-start gap-3">
        <div
          className="relative w-full h-fit flex flex-row justify-between gap-4 pt-4 px-3 sm:px-6 items-center"
          ref={rewind}
        >
          <div
            className="relative w-fit h-fit flex font-rain text-mainText text-4xl mr-0 items-center justify-center cursor-sewingHS"
            onClick={() => router.push("/")}
          >
            DIGITALAX
          </div>
          <div className="relative w-fit h-fit flex ml-0 items-center justify-center flex-row gap-3">
            <div className="relative w-fit h-fit flex font-bit text-mainText text-4xl mr-0 items-center justify-center top-1">
              DISTRO KIT
            </div>
            <Heart changeColor={changeColor} heartColor={heartColor} />
          </div>
        </div>
        <div className="relative w-full h-[50rem] flex items-center justify-center px-8">
          <div className="relative w-4/5 flex items-center justify-center h-4/5">
            <Image
              draggable={false}
              src={`${INFURA_GATEWAY}/ipfs/QmReLFeUVH6yjTbmyF3buLYgHamYHqJBKF8zKmy5GjsEL2`}
              layout="fill"
              priority
            />
          </div>
        </div>
      </div>

      <Head>
        <title>Distro-Kit</title>
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

      <div className="relative w-full h-fit flex justify-center items-center px-8">
        <div className="relative w-full h-[30rem] flex flex-row justify-between gap-10 items-center">
          <div className="relative w-full h-full font-bit text-mainText flex items-center justify-start border-2 border-verde flex-col p-2">
            <div className="relative w-fit h-fit flex items-center justify-center break-all text-[5rem]">
              DISTRIBUTION
            </div>
            <div className="relative w-fit h-fit flex items-center justify-center break-all text-[4rem]">
              IS ALL YOU NEED
            </div>
            <div className="relative w-full h-fit flex items-start justify-center pt-3">
              <div className="relative flex flex-col gap-3 items-start justify-between w-fit h-full">
                {[
                  "web3 social media",
                  "microfactory local co-ops",
                  "indie publications",
                  "guerrilla street prints",
                  "open source design & tools",
                ].map((item: string, index: number) => {
                  return (
                    <div
                      key={index}
                      className="relative w-full h-fit flex flex-row gap-2 items-center justify-center"
                    >
                      <div className="relative w-fit h-fit flex items-center justify-center">
                        <div className="relative w-4 h-4 rounded rounded-full flex items-center justify-center border-2 border-amarillo"></div>
                      </div>
                      <div className="relative w-fit h-fit flex items-center justify-center text-2xl">
                        {item}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="relative w-full h-full flex items-center justify-center border-2 border-amarillo">
            <Image
              layout="fill"
              objectFit="cover"
              draggable={false}
              src={`${INFURA_GATEWAY}/ipfs/QmVW9yFu54JqPX8otXvdSEdhud2S44axyztXbifAQSqcgW`}
            />
          </div>
        </div>
      </div>
      <div className="relative w-full h-fit flex flex-col items-center justify-center">
        <div className="relative w-full h-fit flex items-center justify-center bg-gradient-to-r from-grad1 via-grad2 to-grad3 py-0.5">
          <div className="text-center flex items-center justify-center font-lib text-offBlack bg-offWhite text-[4vw] break-all sm:text-[2.1vw] sm:whitespace-nowrap py-3 w-full h-full">
            TOMORROW’S SO CALLED REAL WORLD… WILL IT EVER BE THE WAY WE
            REMEMBER?
          </div>
        </div>
        <div className="bg-offBlack w-full h-[90rem] relative flex flex-row gap-3 px-2 items-start justify-center">
          <div className="relative w-fit h-full flex flex-col items-start justify-start">
            <div className="relative flex w-full h-fit border-mainText text-foot font-thun">
              <Image
                layout="fill"
                objectFit="cover"
                src={`${INFURA_GATEWAY}/ipfs/QmSD1oBGb7wXrT4BJVxShL1DEWDAyXx4hwjLZg76Hq82vL`}
                draggable={false}
              />
              <div className="relative flex w-full h-fit midi:h-full">
                <div className="relative hidden midi:flex w-full midi:w-80 h-fit p-2 text-4xl leading-normal break-words ml-0">
                  THE NEW SOCIAL IS SCRIPTED BY NPCS W/ INFLUENCE & AI, UNLESS
                  YOU BEAT THEM TO IT.
                </div>
              </div>
            </div>
            <div className="relative w-full h-fit flex flex-col items-center justify-start text-white font-bit px-2 py-4 gap-10">
              <div className="relative w-fit h-fit flex items-center justify-center text-3xl">
                Why are you still online?
              </div>
              <div className="relative flex flex-col items-center justify-start gap-6 h-fit w-full text-base">
                {[
                  "WAITING FOR A ROBOT COMPANION THAT GETS ME",
                  "HOW DO I REACH CREATORS, COLLECTORS, OR ANYONE WITHOUT IT?",
                  "REAL TIME INFORMATION, SOURCED FROM AS MANY FEEDS AS I CAN FOLLOW",
                  "STILL SO MUCH TO WATCH, BUT I'M NOT PAYING FOR ANOTHER STREAMING SUB",
                  "NOT AFRAID TO ADMIT I'M HERE TO BE SEEN",
                  "IS IT TOO MUCH TO ASK FOR EVERY LIKE, COMMENT AND CLICK TO COUNT?",
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
                  DIGITALAX DISTRO KIT
                </div>
                <div className="relative w-1/2 h-1 flex items-center justify-center bg-brille"></div>
                <div className="relative w-fit h-fit flex items-center justify-center">
                  BUILD A NEW SOCIAL WEB
                </div>
              </div>
            </div>
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                objectFit="cover"
                layout="fill"
                objectPosition={"top"}
                src={`${INFURA_GATEWAY}/ipfs/Qme8xXmkD3ktvzK2NeopaDQEHu5ALrsgZfHy9TchwULdgP`}
                draggable={false}
              />
            </div>
          </div>
          <div className="relative w-fit h-full flex flex-col gap-2 py-1">
            <div
              id="static"
              className="relative flex w-8 h-full border border-amarillo rounded-sm"
            ></div>
            <div
              id="static2"
              className="relative flex w-8 h-full saturate-0 border border-amarillo rounded-sm"
            ></div>
            <div className="relative w-8 h-fit bg-offWhite flex items-center justify-center p-1 rounded-sm">
              <div className="relative w-6 h-8 hover:rotate-12 cursor-sewingHS flex items-center justify-center">
                <Image
                  layout="fill"
                  src={`${INFURA_GATEWAY}/ipfs/QmZ8bkkHce5sv1PjmhpYNPZDTyAQ5cskjFPvYg1KQ1YWKQ`}
                  className="justify-center"
                  draggable={false}
                />
              </div>
            </div>
          </div>
          <Tiles
            searchItems={searchItems}
            searchLoading={loaders?.searchLoading}
            handleMoreSearch={handleMoreSearch}
            moreSearchLoading={loaders?.moreSearchLoading}
            filterConstants={filterConstants!}
            dispatch={dispatch}
          />
        </div>
        <div className="relative w-full h-fit flex bg-diy py-3 border-y-4 border-deep justify-center items-center">
          <div className="relative flex h-fit font-mag text-diyText text-[4.1vw] break-words text-center items-center justify-center">
            THE NEW DIY: DECENTRALIZE IT YOURSELF
          </div>
        </div>
      </div>
      <div className="w-full relative flex flex-col h-full items-center justify-center px-2 sm:px-12 text-xs md:text-base">
        <div className="w-full h-fit text-center font-lib text-mainText flex items-center justify-center relative text-lg font-libB 2xl:text-[1.8vw]">
          <div
            className="relative w-fit h-fit flex items-center justify-center cursor-sewingHS"
            onClick={() => window.open("https://www.themanufactory.xyz/")}
          >
            x005.m-3 – MICROFACTORY LOCAL CO•OP
          </div>
        </div>
        <div className="relative flex flex-col w-full h-fit items-center justify-center text-mainText pt-10 text-center gap-2">
          <div className="relative px-1.5 sm:px-0 w-full sm:w-1/2 h-fit flex items-center justify-center text-xs sm:text-sm md:text-base">
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
                        src={`${INFURA_GATEWAY}/ipfs/${image[0]}`}
                        draggable={false}
                      />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="relative flex flex-col gap-2 items-center justify-center w-full h-fit">
            <div className="relative px-1.5 sm:px-0 w-full sm:w-1/2 h-fit flex items-center justify-center font-gisL">
              In a world where authenticity is currency, each microbrand is a
              sovereign mint of cultural capital. Web3 commerce isn't built by
              monopolistic conglomerates, but assembled, piece by piece, by the
              microbrands that understand the intricate dance of AI, NFTs, and
              social resonance.
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
            className="absolute h-full w-full object-cover rounded-3xl flex border-8 border-mainText items-center"
          >
            <source src="/videos/glitch.mp4" type="video/mp4"></source>
          </video>
          <div className="relative flex flex-col sm:flex-row w-full h-full gap-6 justify-center items-center py-10">
            {tvImages.map((image: string, index: number) => {
              return (
                <a
                  key={index}
                  target={"_blank"}
                  rel="noreferrer"
                  className={`relative w-[70vw] h-[100vw] sm:w-[15vw] sm:h-[25vw] lg:w-[20vw] lg:h-[30vw] opacity-90 active:scale-95 cursor-sewingHS hover:opacity-70`}
                  onClick={() =>
                    dispatch(
                      setImageViewer({
                        actionType: "image/png",
                        actionValue: true,
                        actionImage: `${INFURA_GATEWAY}/ipfs/${image}`,
                      })
                    )
                  }
                >
                  <Image
                    src={`${INFURA_GATEWAY}/ipfs/${image}`}
                    layout="fill"
                    priority
                    draggable={false}
                  />
                </a>
              );
            })}
            <motion.div
              whileHover={{
                rotate: 360,
              }}
              onClick={() =>
                setTvImages(
                  TV_IMAGES?.sort(() => Math.random() - 0.5).slice(0, 4)
                )
              }
              className={`absolute flex items-center justify-center bottom-4 right-4 hover:rotate-180 cursor-sewingHS active:mix-blend-color-dodge w-6 h-6 z-10 md:w-10 md:h-10 2xl:w-24 2xl:h-24`}
            >
              <Image
                src={`${INFURA_GATEWAY}/ipfs/QmYdpBCKCGp2rMgWaDePE8UeuCUPywuWTJ9qEE9XwrJmBU`}
                layout="fill"
                priority
                draggable={false}
              />
            </motion.div>
          </div>
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
                <div className="relative w-[10vw] h-[10vw] sm:w-14 sm:h-14 2xl:w-[6vw] 2xl:h-[6vw] rounded-full border-2 border-mainText flex items-center justify-center hover:rotate-45 cursor-sewingHS">
                  <Image
                    layout="fill"
                    className={`rounded-full`}
                    src={`${INFURA_GATEWAY}/ipfs/${image}`}
                    priority
                    draggable={false}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="relative w-fit h-fit flex items-center justify-center">
          <div className="relative w-[15vw] h-[15vw] sm:w-24 sm:h-24 2xl:w-[8vw] 2xl:h-[8vw] rounded-full border-2 border-mainText hover:rotate-180 cursor-sewingHS">
            <Image
              layout="fill"
              objectFit="cover"
              className={`rounded-full`}
              src={`${INFURA_GATEWAY}/ipfs/QmV6abRqyRq1hs82LV226fgjUHn8pa9roiA4K8PYwHfw9f`}
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
            className={`relative flex border-8 w-full h-[57vw] pb-2 rounded-xl border-mainText`}
          >
            <Image
              src={`${INFURA_GATEWAY}/ipfs/Qme1kXGZZWYQQVWRXYarxdHn97PwKorxyyXm8g237Fav8u`}
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
                className="relative max-w-none border-gray-900 border-8 w-[14vw] h-[18vw] object-cover flex  bg-offBlack"
              >
                <source src="/videos/static.mp4" type="video/mp4"></source>
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-fit flex items-center justify-center h-fit text-mainText flex-col sm:px-12 px-2 gap-4">
        <div className="relative w-full h-fit flex flex-row items-end justify-between gap-1.5 text-mainText">
          <div className="relative w-fit h-fit flex items-start justify-center font-lib text-xs flex gap-1 flex-col">
            <div className="relative w-fit h-fit flex items-center justify-start">
              x03.m-4
            </div>
            <div className="relative w-fit h-fit flex items-center justify-start">
              <Image
                height={15}
                width={60}
                src={`${INFURA_GATEWAY}/ipfs/QmUcmM6bagB18xKFhSgqpBPxvMuuD7VkTW89on5guyLYsE`}
                priority
                draggable={false}
              />
            </div>
            <div className="relative w-52 h-fit flex items-center justify-start font-mag text-lg">
              MESH: FASHION SYNTH & SEGMENTATION FOR TAILOR MADE BLENDER DESIGN
            </div>
          </div>
          <div className="relative w-fit h-fit flex items-end justify-center font-lib">
            OPEN SOURCE <br />
            DEV FOR IRL, <br />
            VIRTUAL, AND <br />
            LATENT SPACE <br />
          </div>
        </div>
        <div className="relative w-full h-fit justify-center items-center flex">
          <Blender blenderPage={blenderPage} setBlenderPage={setBlenderPage} />
        </div>
      </div>
      <div className="relative w-full h-fit flex flex-col gap-12">
        <div className="relative w-full h-full flex flex-row gap-12 sm:px-12 px-2 justify-between items-center">
          <div className="relative w-fit h-40 flex flex-row gap-2 items-center justify-between">
            <div className="relative w-fit h-full flex items-center justify-center flex-col">
              <div className="relative w-3 h-px bg-mainText flex items-center justify-center"></div>
              <div className="relative w-px h-full bg-mainText flex items-center justify-center"></div>
              <div className="relative w-3 h-px bg-mainText flex items-center justify-center"></div>
            </div>
            <div
              className={`relative w-1.5 h-1/2 text-xs whitespace-nowrap sm:rotate-0 rotate-90`}
            >
              <Image
                layout="fill"
                src={`${INFURA_GATEWAY}/ipfs/QmNMLRCxVeubxtYNzaTaVciTKcBYtSp1c1UaN2yFDhduiD`}
                priority
                draggable={false}
              />
            </div>
            <div className="relative w-fit sm:w-96 text-center h-fit font-libB text-sm p-6 border border-mainText flex items-center justify-center break-word text-mainText">
              With a public release some timeskip from now, fabric synth in
              Blender changes the narrative from “NFTs, lol, speculative
              altcoins with JPEGs“ to “We like the looks made for material use”
            </div>
            <div
              className={`relative w-1.5 h-1/2 text-xs whitespace-nowrap sm:rotate-0 rotate-90`}
            >
              <Image
                layout="fill"
                src={`${INFURA_GATEWAY}/ipfs/QmWoJ4fvb9uojxiPKadtY83r8jTAuSiPKEZZrcb5jqDFRq`}
                priority
                draggable={false}
              />
            </div>
            <div className="relative w-fit h-full flex items-center justify-center flex-col">
              <div className="relative w-3 h-px bg-mainText flex items-center justify-center"></div>
              <div className="relative w-px h-full bg-mainText flex items-center justify-center"></div>
              <div className="relative w-3 h-px bg-mainText flex items-center justify-center"></div>
            </div>
          </div>
          <div className="relative w-full h-fit flex items-center justify-end font-gisL text-mainText text-right mr-0">
            <div className="relative w-3/4 h-fit flex items-center justify-end">
              Today, fashion designers use CLO, a closed source and very limited
              tool for working with fabric. Blender can be a much more powerful
              and open source tool for working with fabric.
              <br />
              <br />
              But a few things have to happen first.
              <br />
              <br />
              Fabric synth, segmentation, design and materialisation in a tailor
              made Blender plugin? Where we're going, we're going to need a lot
              more GPUs.
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
                    src={`${INFURA_GATEWAY}/ipfs/${image}`}
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
};

export default DistroKit;