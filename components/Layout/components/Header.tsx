import Image from "next/legacy/image";
import { FunctionComponent } from "react";
import { INFURA_GATEWAY } from "../../../lib/constants";
import { HeaderProps } from "../types/layout.types";
import { setFullScreenVideo } from "@/redux/reducers/fullScreenVideoSlice";
import Marquee from "react-fast-marquee";
import Heart from "./Heart";

const Header: FunctionComponent<HeaderProps> = ({
  rewind,
  handleShop,
  changeColor,
  heartColor,
  router,
  fullScreenVideo,
  dispatch,
}): JSX.Element => {
  return (
    <div
      ref={rewind}
      className="relative flex flex-col h-fit w-full gap-12 justify-start items-between text-mainText"
    >
      <div className="relative w-full h-fit flex flex-row gap-2 items-start justify-between">
        <div className="relative w-fit h-full flex p-2 items-center justify-center">
          <div className="relative w-80 h-full flex items-center justify-start flex-col gap-3 bg-white"></div>
        </div>
        <div className="relative w-full h-[30rem] flex items-center justify-start flex-col gap-3 p-7">
          <div className="relative w-full h-fit mr-0 flex items-end justify-end">
            <Heart changeColor={changeColor} heartColor={heartColor} />
          </div>
          <div className="relative w-full h-fit flex items-center justify-end gap-3 flex-row">
            <div className="relative w-fit h-fit flex flex-row items-center justify-center gap-2">
              <div
                className={`relative w-fit h-fit flex items-center justify-center hover:-rotate-12 cursor-sewingHS`}
                onClick={() =>
                  dispatch(
                    setFullScreenVideo({
                      actionOpen: fullScreenVideo?.open ? false : true,
                      actionTime: fullScreenVideo?.currentTime,
                      actionDuration: fullScreenVideo?.duration,
                      actionIsPlaying: fullScreenVideo?.isPlaying,
                      actionVolume: fullScreenVideo?.volume,
                      actionVolumeOpen: fullScreenVideo?.volumeOpen,
                      actionAllVideos: fullScreenVideo?.allVideos,
                      actionCursor: fullScreenVideo?.cursor,
                      actionIndex: fullScreenVideo?.index,
                    })
                  )
                }
              >
                <Image
                  src={`${INFURA_GATEWAY}/ipfs/QmYVHgyAQLxcoP5o23n3jXNnA9N9C93WqpM2heAegty7hU`}
                  height={20}
                  width={60}
                  priority
                  draggable={false}
                />
              </div>
              <div className="relative w-fit h-fit items-center justify-center text-mainText flex whitespace-nowrap font-firaL">
                DO NOT BEND
              </div>
            </div>
            <div
              className="relative w-96 bg-white h-9 rounded-md border-mainText text-sm overflow-x-hidden whitespace-nowrap cursor-sewingHS flex items-center justify-start text-offBlack border border-mainText"
              onClick={
                router.pathname == "/"
                  ? () => handleShop()
                  : () => (document.location.href = "/#shop")
              }
            >
              <Marquee direction="right" speed={25} gradient={false}>
                {" "}
                GO SHOPPING ❤️ 👉 GO SHOPPING ❤️ 👉 GO SHOPPING ❤️ 👉 GO
                SHOPPING ❤️ 👉 GO SHOPPING ❤️ 👉 GO SHOPPING ❤️ 👉 GO SHOPPING
                ❤️ 👉 GO SHOPPING ❤️ 👉 GO SHOPPING ❤️ 👉 GO SHOPPING ❤️ 👉 GO
                SHOPPING ❤️ 👉 GO SHOPPING ❤️ 👉 GO SHOPPING ❤️ 👉 GO SHOPPING
                ❤️ 👉 GO SHOPPING ❤️ 👉{" "}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
      <div className="font-mag text-mainText w-full flex h-fit text-[16vw] relative items-center justify-center">
        <div className="flex items-center justify-center relative w-fit h-fit">
          DIGITALAX
        </div>
      </div>
      <div className="relative w-full h-fit flex items-center justify-between gap-6 bg-offBlack flex-row px-2 py-3">
        <div className="relative w-fit h-fit flex flex-row gap-4 items-center justify-center ml-0">
          <div className="relative w-fit flex items-center justify-center border border-ama text-xs font-bit rounded-xl px-3 py-1 h-6 md:h-12 gap-5 bg-ruido bg-cover bg-top ">
            <div className="absolute top-0 left-0  bg-offBlack/80 w-full h-full rounded-xl"></div>
            <div
              className="relative w-fit h-fit flex items-center justify-center text-gray-700 font-bit cursor-sewingHS active:scale-95 bg-ama/70 border border-ruido rounded-md px-4 py-px text-base"
              onClick={() => window.open("https://cypher.digitalax.xyz")}
            >
              <div className="relative w-fit h-fit flex items-center justify-center top-px">
                Go
              </div>
            </div>
            <div className="relative flex items-center justify-center text-ruido">
              Find your way through the maze @ cypher
            </div>
          </div>
          <div className="relative w-fit h-fit flex items-center justify-center">
            <div className="relative h-6 md:h-12 w-6 md:w-12 flex items-center justify-center">
              <Image
                src={`${INFURA_GATEWAY}/ipfs/QmYbjMNQAVuQSWNNQ5AKbQtt4Dxw2ax4SvLNwKhCNDniL2`}
                layout="fill"
                draggable={false}
                priority
              />
            </div>
          </div>
        </div>
        <div className="relative w-fit h-fit flex flex-row gap-4 items-center justify-center mr-0">
          <div className="relative w-fit h-fit flex items-center justify-center font-bit text-sm text-ama">
            Explore the entire web3 + npc <br /> commerce ecosystem at a glance
          </div>
          <div className="relative w-fit h-fit flex items-center justify-center font-bit text-sm text-ama">
            {">"}
          </div>
          <div className="relative w-fit h-fit flex flex-row gap-1.5 items-center justify-center">
            {[
              {
                link: "https://kinora.irrevocable.dev",
                image: "QmQk9TqFivUqc6ktosoZVVih9o1uiY3r5Z7F3GCC1FpaJS",
                title: "Kinora",
              },
              {
                link: "https://legend.irrevocable.dev",
                image: "QmWDqwGn7JgWzFsvUuC6pR7P58v6ab1npPueJ9Vfaez8iW",
                title: "Legend",
              },
              {
                link: "https://thedial.xyz",
                image: "QmcNb4CFnWt9LfmbjLceug541x1WPhx5Utqeu2rP65gbiV",
                title: "The Dial",
              },
              {
                link: "https://chromadin.xyz",
                image: "QmXM6QSYCbMJ5eXJHuGqMTbCTkaDqth5c4NswX2nWTpenB",
                title: "Chromadin",
              },
              {
                link: "https://coinop.themanufactory.xyz",
                image: "QmRXrv2icSyRi5P7VEx9yWh66VQB9UiiYPSt2NDkuGAcB9",
                title: "Coin Op",
              },
              {
                link: "https://themanufactory.xyz",
                image: "QmRpVNoo4LdwBrByfmUNpoB7nPrJrLUPdUeeeatqc4CDk7",
                title: "The Manufactory",
              },
              {
                link: "https://listener.irrevocable.dev",
                image: "QmcY6zRcfQyr7pahRVaSwzT3J7ibiDNYwWUFkg9aFA4tE2",
                title: "Lit Listener",
              },
            ].map(
              (
                item: {
                  link: string;
                  image: string;
                  title: string;
                },
                index: number
              ) => {
                return (
                  <div
                    key={index}
                    className="relative w-6 h-6 md:h-12 md:w-12 rounded-xl border bg-gray-400 cursor-sewingHS border-gray-400 flex items-center justify-center"
                    title={item.title}
                    id="buttons"
                    onClick={() => window.open(item.link)}
                  >
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        draggable={false}
                        className="rounded-xl w-full h-full"
                        layout="fill"
                        objectFit="cover"
                        priority
                        src={`${INFURA_GATEWAY}/ipfs/${item.image}`}
                      />
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
