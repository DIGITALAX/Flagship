import Image from "next/legacy/image";
import { FunctionComponent } from "react";
import { INFURA_GATEWAY, VIDEOS } from "../../../lib/constants";
import { HeaderProps } from "../types/layout.types";
import Marquee from "react-fast-marquee";
import Heart from "./Heart";
import { AiOutlineLoading } from "react-icons/ai";
import { setFullScreenVideo } from "../../../redux/reducers/fullScreenVideoSlice";

const Header: FunctionComponent<HeaderProps> = ({
  rewind,
  handleShop,
  changeColor,
  heartColor,
  fullScreenVideo,
  dispatch,
  currentVideo,
  changeVideo,
  setVideoLoading,
  videoLoading,
  message,
  setMessage,
  messageLoading,
  handleSendMessage,
  address,
  openConnectModal,
}): JSX.Element => {
  return (
    <div
      ref={rewind}
      className="relative flex flex-col h-fit w-full gap-1 justify-start items-stretch text-mainText pt-4 half:pt-7"
    >
      <div className="relative w-full h-fit half:h-[80vh] flex flex-col half:flex-row gap-8 items-start justify-between px-2 half:px-4 lg:px-7">
        <div className="relative w-full h-fit half:w-fit half:h-full flex items-start justify-start half:order-1 order-2">
          <div className="relative w-full half:h-full half:w-80 h-fit sm:h-52 flex items-stretch sm:items-center justify-center sm:justify-between flex-col sm:flex-row half:flex-col gap-3 font-bit p-4 bg-mainText">
            <div className="absolute w-full flex flex-row justify-between h-fit top-0 left-0">
              <div className="relative ml-0 bg-mainBg flex items-center justify-center w-2 h-2"></div>
              <div className="relative mr-0 bg-mainBg flex items-center justify-center w-2 h-2"></div>
            </div>
            <div className="absolute w-full flex flex-row justify-between h-fit bottom-0 left-0">
              <div className="relative ml-0 bg-mainBg flex items-center justify-center w-2 h-2"></div>
              <div className="relative mr-0 bg-mainBg flex items-center justify-center w-2 h-2"></div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full justify-start items-start half:flex hidden">
              <Image
                layout="fill"
                objectFit="fill"
                draggable={false}
                priority
                src={`${INFURA_GATEWAY}/ipfs/QmVdLxvGcosPWi3DLREjbPWUwf7Q5AXroxxBg5CHD4q4qM`}
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full justify-start items-start flex half:hidden">
              <Image
                layout="fill"
                objectFit="fill"
                priority
                draggable={false}
                src={`${INFURA_GATEWAY}/ipfs/QmYWuUrkVNoSpz2NAr3V1hLqoucb48uTFsRthHR9trKY5V`}
              />
            </div>
            <div className="relative w-full sm:w-fit h-fit flex flex-col preG:flex-row half:flex-col gap-8 sm:gap-3 half:gap-6 items-center justify-center">
              <div className="relative w-full preG:w-fit h-full flex flex-col gap-3 items-center justify-center">
                <div
                  className="relative w-fit h-fit flex items-center justify-center text-xl half:text-3xl"
                  id="npc"
                >
                  NPC Studio
                </div>
                <div className="relative w-full preG:w-fit h-fit flex items-center justify-center flex-col gap-3">
                  <div
                    className="relative w-full preG:w-fit h-fit flex items-center justify-center cursor-sewingHS active:scale-95"
                    onClick={() => changeVideo(0)}
                  >
                    <div className="relative w-full preG:w-36 half:w-52 h-10 flex items-center justify-center">
                      <Image
                        layout="fill"
                        priority
                        draggable={false}
                        src={`${INFURA_GATEWAY}/ipfs/QmSpjYvvdRtRzyN6cjRL1SGbSKDu5mDAwZtqb1WPZcH7Q9`}
                      />
                    </div>
                    <div
                      className="absolute w-fit h-fit flex items-center justify-center text-base half:text-lg"
                      id="play"
                    >
                      PLAY MODE
                    </div>
                  </div>
                  <div
                    className="relative w-full preG:w-fit h-fit flex items-center justify-center cursor-sewingHS active:scale-95"
                    onClick={() => {
                      setMessage("Encrypt us a message?");
                      changeVideo(5);
                    }}
                  >
                    <div className="relative w-full preG:w-36 half:w-52 h-10 flex items-center justify-center">
                      <Image
                        layout="fill"
                        draggable={false}
                        priority
                        src={`${INFURA_GATEWAY}/ipfs/QmSpjYvvdRtRzyN6cjRL1SGbSKDu5mDAwZtqb1WPZcH7Q9`}
                      />
                    </div>
                    <div
                      className="absolute w-fit h-fit flex items-center justify-center text-base half:text-lg"
                      id="play"
                    >
                      TEAM CHAT
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-full h-fit flex items-center justify-center">
                <div className="absolute w-full h-full flex items-center justify-center">
                  <Image
                    layout="fill"
                    draggable={false}
                    priority
                    src={`${INFURA_GATEWAY}/ipfs/QmSfBUFGogXohAgLYimvy1ArU4aUrLyYCZ7EDuFELudWm7`}
                  />
                </div>
                <div className="relative p-2 flex items-start justify-center w-full sm:w-52 h-44 sm:h-48 text-orilla text-sm text-left">
                  {currentVideo === 5 ? (
                    <>
                      <textarea
                        className={`relative w-full h-full font-bit flex items-center justify-center bg-black ${
                          message === "Message sent! We'll be in touch shortly."
                            ? "text-white"
                            : "text-orilla"
                        }`}
                        style={{ resize: "none" }}
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                      ></textarea>
                      <div
                        className={`absolute bottom-2 right-2 flex items-center justify-center w-12 rounded-sm text-super border border-orilla h-5 ${
                          !messageLoading && "cursor-sewingHS active:scale-96"
                        }`}
                        onClick={
                          !address
                            ? openConnectModal
                            : () => !messageLoading && handleSendMessage()
                        }
                      >
                        <div
                          className={`relative w-fit h-fit flex items-center justify-center ${
                            messageLoading ? "animate-spin" : "top-px"
                          }`}
                        >
                          {messageLoading ? (
                            <AiOutlineLoading color="#46B171" size={10} />
                          ) : (
                            "Send"
                          )}
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="relative w-full h-full flex items-start justify-between flex flex-col gap-px">
                      <div className="relative w-full h-fit flex items-start justify-start">
                        welcome to the great unbundling of the everything app.
                        <br /> <br />
                        Equip your AI workforce. Train for less idle time. try
                        to survive in style
                      </div>
                      <div
                        className="relative w-full h-fit flex items-start justify-end cursor-sewingHS"
                        onClick={() => window.open(`https://npcstudio.xyz`)}
                      >
                        {`-->`}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="relative w-full sm:w-fit h-fit flex flex-col preG:flex-row half:flex-col gap-8 sm:gap-3 half:gap-12 items-center justify-center mr-0">
              <div className="relative w-full sm:w-fit flex flex-col gap-2 items-center justify-center h-fit">
                <div className="relative flex items-center justify-center flex-row sm:flex-col half:flex-row w-full sm:w-32 half:w-52  h-fit gap-2 half:gap-3">
                  <div
                    className="relative w-full h-fit flex items-center justify-center cursor-sewingHS active:scale-95"
                    onClick={() => changeVideo(1)}
                  >
                    <div className="relative w-full h-10 flex items-center justify-center">
                      <Image
                        layout="fill"
                        draggable={false}
                        priority
                        src={`${INFURA_GATEWAY}/ipfs/QmSzjxP1u5yReRefw3sTLW8G5QRBuHRztgRFyrn1YXuQTR`}
                      />
                    </div>
                    <div
                      className="absolute w-fit h-fit flex items-center justify-center text-sm half:text-lg"
                      id="equip"
                    >
                      EQUIP
                    </div>
                  </div>
                  <div
                    className="relative w-full h-fit flex items-center justify-center cursor-sewingHS active:scale-95"
                    onClick={() => changeVideo(4)}
                  >
                    <div className="relative w-full h-10 flex items-center justify-center">
                      <Image
                        layout="fill"
                        priority
                        draggable={false}
                        src={`${INFURA_GATEWAY}/ipfs/QmSzjxP1u5yReRefw3sTLW8G5QRBuHRztgRFyrn1YXuQTR`}
                      />
                    </div>
                    <div
                      className="absolute w-fit h-fit flex items-center justify-center text-sm half:text-lg"
                      id="equip"
                    >
                      TRAIN
                    </div>
                  </div>
                </div>
                <div className="relative flex items-center justify-center flex-row sm:flex-col half:flex-row w-full sm:w-32 half:w-52 h-fit gap-2 half:gap-3">
                  <div
                    className="relative w-full h-fit flex items-center justify-center cursor-sewingHS active:scale-95"
                    onClick={() => changeVideo(3)}
                  >
                    <div className="relative w-full h-10 flex items-center justify-center">
                      <Image
                        layout="fill"
                        priority
                        draggable={false}
                        src={`${INFURA_GATEWAY}/ipfs/QmSzjxP1u5yReRefw3sTLW8G5QRBuHRztgRFyrn1YXuQTR`}
                      />
                    </div>
                    <div
                      className="absolute w-fit h-fit flex items-center justify-center text-sm half:text-lg"
                      id="equip"
                    >
                      STATS
                    </div>
                  </div>
                  <div
                    className="relative w-full h-fit flex items-center justify-center cursor-sewingHS active:scale-95"
                    onClick={() => changeVideo(2)}
                  >
                    <div className="relative w-full h-10 flex items-center justify-center">
                      <Image
                        layout="fill"
                        draggable={false}
                        priority
                        src={`${INFURA_GATEWAY}/ipfs/QmSzjxP1u5yReRefw3sTLW8G5QRBuHRztgRFyrn1YXuQTR`}
                      />
                    </div>
                    <div
                      className="absolute w-fit h-fit flex items-center justify-center text-sm half:text-lg"
                      id="equip"
                    >
                      MARKET
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-fit w-full preG:w-fit sm:h-full sm:w-20 half:w-fit half:h-fit flex items-center justify-center gap-3 flex-col rotate-0 half:rotate-0 sm:rotate-90">
                <div className="relative w-full preG:w-fit h-fit flex items-center justify-center">
                  <div className="relative w-full preG:w-40 half:w-52 h-8 flex items-center justify-center">
                    <Image
                      layout="fill"
                      priority
                      src={`${INFURA_GATEWAY}/ipfs/QmX8kDkP3rdgqeEauqzsbwL8zP4hGwtTKxrT3Xmw7R2feL`}
                      draggable={false}
                    />
                  </div>
                </div>
                <div className="relative w-full preG:w-fit h-fit flex items-center justify-center">
                  <div className="relative w-full preG:w-40 half:w-52 h-8 flex items-center justify-center">
                    <Image
                      layout="fill"
                      priority
                      src={`${INFURA_GATEWAY}/ipfs/QmSkppQ8Z9M4cYR4NLDD8wMUVyB7j9cmoe6ABjQhnTWkfv`}
                      draggable={false}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-full flex items-center justify-start flex-col gap-3 half:order-2 order-1">
          <div className="relative w-full h-fit mr-0 flex items-end justify-end">
            <Heart
              changeColor={() => {
                changeColor();
                changeVideo(
                  Number(currentVideo) < 10 || Number(currentVideo) == 19
                    ? 10
                    : Number(currentVideo) + 1
                );
              }}
              heartColor={heartColor}
            />
          </div>
          <div className="relative w-full h-fit flex items-center justify-end gap-3 flex-row">
            <div className="relative w-fit h-fit flex flex-col sm:flex-row items-center justify-center gap-2">
              <div
                className={`relative w-fit h-fit flex items-center justify-center hover:-rotate-12 cursor-sewingHS`}
                onClick={() => {
                  changeVideo(6);
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
                  );
                }}
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
            <div className="relative w-96 h-9 rounded-r-md text-sm overflow-x-hidden whitespace-nowrap flex items-center justify-center text-offBlack">
              <div className="absolute w-full h-full top-0 left-0 z-0 flex items-center justify-center border-y border-r border-mainText bg-white rounded-r-md">
                <Marquee
                  className="z-0"
                  direction="right"
                  speed={25}
                  gradient={false}
                >
                  {" "}
                  GO SHOPPING ❤️ 👉 GO SHOPPING ❤️ 👉 GO SHOPPING ❤️ 👉 GO
                  SHOPPING ❤️ 👉 GO SHOPPING ❤️ 👉 GO SHOPPING ❤️ 👉 GO SHOPPING
                  ❤️ 👉 GO SHOPPING ❤️ 👉 GO SHOPPING ❤️ 👉 GO SHOPPING ❤️ 👉 GO
                  SHOPPING ❤️ 👉 GO SHOPPING ❤️ 👉 GO SHOPPING ❤️ 👉 GO SHOPPING
                  ❤️ 👉 GO SHOPPING ❤️ 👉{" "}
                </Marquee>
              </div>
              <div
                className="relative w-full h-full cursor-sewingHS bg-gradient-to-r from-mainBg via-transparent flex items-center justify-center rounded-r-md to-transparent"
                onClick={() => {
                  handleShop();
                  changeVideo(8);
                }}
              ></div>
            </div>
          </div>
          <div className="relative w-full h-[60vh] half:h-full flex items-center justify-center bg-mainText rounded-sm overflow-hidden border-4 border-mainText">
            <video
              muted
              loop
              key={currentVideo}
              className="object-cover flex w-full h-full rounded-sm"
              controls={false}
              autoPlay
              onLoadStart={() => setVideoLoading(true)}
              onLoadedMetadata={() => setVideoLoading(false)}
            >
              <source
                src={
                  currentVideo !== undefined
                    ? `${INFURA_GATEWAY}/ipfs/${VIDEOS[currentVideo]}`
                    : undefined
                }
              />
            </video>
            {(videoLoading || currentVideo == undefined) && (
              <div className="absolute top-0 left-0 w-full h-full bg-mainText flex items-center justify-center">
                <div className="relative w-52 h-8 flex items-center justify-center animate-pulse">
                  <Image
                    layout="fill"
                    src={`${INFURA_GATEWAY}/ipfs/QmX8kDkP3rdgqeEauqzsbwL8zP4hGwtTKxrT3Xmw7R2feL`}
                    draggable={false}
                    priority
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="font-mag w-full flex h-fit text-[16vw] relative items-center justify-center">
        <div
          className="flex items-center justify-center relative w-fit h-fit cursor-sewingHS"
          onClick={() => changeVideo(7)}
        >
          DIGITALAX
        </div>
      </div>
      <div className="relative w-full h-fit flex items-center justify-between gap-10 half:gap-6 bg-offBlack flex-col half:flex-row px-2 py-3">
        <div className="relative w-full half:w-fit h-fit flex flex-col preG:flex-row gap-4 items-center justify-center ml-0">
          <div className="relative w-full half:w-fit flex items-center justify-between half:justify-center border border-ama font-bit rounded-xl px-3 py-1 h-12 gap-5 bg-ruido bg-cover bg-top sm:order-1 order-2">
            <div className="absolute top-0 left-0  bg-offBlack/80 w-full h-full rounded-xl"></div>
            <div
              className="relative w-fit h-fit flex items-center justify-center text-gray-700 font-bit cursor-sewingHS active:scale-95 bg-ama/70 border border-ruido rounded-md px-4 py-px"
              onClick={() => window.open("https://cypher.digitalax.xyz")}
            >
              <div className="relative w-fit h-fit flex items-center justify-center top-px">
                Go
              </div>
            </div>
            <div className="relative flex items-center justify-center text-ruido sm:text-xs text-xxs">
              Find your way through the maze @ cypher
            </div>
          </div>
          <div className="relative w-fit h-fit flex items-center justify-center sm:order-2 order-1">
            <div className="relative h-12 w-12 flex items-center justify-center">
              <Image
                src={`${INFURA_GATEWAY}/ipfs/QmYbjMNQAVuQSWNNQ5AKbQtt4Dxw2ax4SvLNwKhCNDniL2`}
                layout="fill"
                draggable={false}
                priority
              />
            </div>
          </div>
        </div>
        <div className="relative w-fit h-fit flex flex-row half:flex-col midi:flex-row gap-4 items-center half:items-end midi:items-center justify-center mr-0 midi:text-center text-right sm:flex-nowrap flex-wrap">
          <div className="relative flex flex-row gap-4 flex items-center justify-center">
            <div className="relative w-fit h-fit flex items-center justify-center font-bit text-xs md:text-sm text-ama">
              Explore the entire web3 fashion <br /> + npc commerce ecosystem at
              a glance
            </div>
            <div className="relative w-fit h-fit flex items-center justify-center font-bit text-sm text-ama">
              {">"}
            </div>
          </div>
          <div className="relative w-fit h-fit flex flex-row gap-1.5 items-center justify-center sm:flex-nowrap flex-wrap">
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
                    className="relative w-9 h-9 md:h-12 md:w-12 rounded-md md:rounded-xl border bg-gray-400 cursor-sewingHS border-gray-400 flex items-center justify-center"
                    title={item.title}
                    id="buttons"
                    onClick={() => window.open(item.link)}
                  >
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        draggable={false}
                        className="rounded-md md:rounded-xl w-full h-full"
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
