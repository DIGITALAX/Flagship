import { FunctionComponent, JSX, useContext } from "react";
import { HeaderProps } from "../types/common.types";
import { ModalContext } from "@/app/providers";
import Image from "next/legacy/image";
import { INFURA_GATEWAY_INTERNAL } from "@/app/lib/constants";
import { useAccount } from "wagmi";
import useHeader from "../hooks/useHeader";
import HeaderSwitch from "./HeaderSwitch";

const Header: FunctionComponent<HeaderProps> = ({
  dict,
  handleShop,
}): JSX.Element => {
  const context = useContext(ModalContext);

  const { address } = useAccount();
  const {
    changeVideo,
    setMessage,
    setVideoLoading,
    videoLoading,
    currentVideo,
    message,
    messageLoading,
    handleSendMessage,
    changeLanguage,
    chosenLanguage,
    setChosenLanguage,
  } = useHeader(address, dict);
  return (
    <div
      ref={context?.rewind}
      className="relative flex flex-col h-fit w-full gap-1 justify-start items-stretch text-mainText"
    >
      <HeaderSwitch
        dict={dict}
        chosenLanguage={chosenLanguage}
        setChosenLanguage={setChosenLanguage}
        changeLanguage={changeLanguage}
        setMessage={setMessage}
        setVideoLoading={setVideoLoading}
        videoLoading={videoLoading}
        currentVideo={currentVideo}
        message={message}
        messageLoading={messageLoading}
        handleSendMessage={handleSendMessage}
        changeVideo={changeVideo}
        handleShop={handleShop}
      />
      <div className="font-mag w-full flex h-fit text-[16vw] relative items-center justify-center">
        <h1
          className="flex items-center justify-center relative w-fit h-fit cursor-sewingHS"
          onClick={() => {
            context?.setScreen(undefined);
            changeVideo(7);
          }}
        >
          DIGITALAX
        </h1>
      </div>
      <div className="relative w-full h-fit flex items-center justify-between gap-10 half:gap-6 bg-offBlack flex-col px-2 py-3">
        <div className="relative w-full h-fit flex flex-row justify-between items-center flex-wrap gap-3">
          <div className="relative w-fit h-fit flex flex-col preG:flex-row gap-4 items-center justify-center ml-0">
            <div className="relative w-fit flex sm:flex-row flex-col items-center justify-between half:justify-center border border-ama font-bit rounded-xl px-3 py-2 h-fit sm:h-12 gap-5 bg-ruido bg-cover bg-top sm:order-1 order-2">
              <div className="absolute top-0 left-0  bg-offBlack/80 w-full h-full rounded-xl"></div>
              <div
                className="relative w-fit h-fit flex items-center justify-center text-gray-700 font-bit cursor-sewingHS active:scale-95 bg-ama/70 border border-ruido rounded-md px-4 py-px"
                onClick={() => window.open("https://cypher.digitalax.xyz")}
              >
                <div className="relative w-fit h-fit flex items-center justify-center top-px">
                  {dict?.common?.go}
                </div>
              </div>
              <div className="relative flex items-center justify-center text-ruido sm:text-xs text-xxs">
                {dict?.common?.maze}
              </div>
            </div>
            <div className="relative w-fit h-fit flex items-center justify-center sm:order-2 order-1">
              <div
                className="relative h-12 w-12 flex items-center justify-center cursor-sewingHS"
                onClick={() =>
                  window.open("https://globaldesignernetwork.com/")
                }
              >
                <Image
                  src={`${INFURA_GATEWAY_INTERNAL}QmYbjMNQAVuQSWNNQ5AKbQtt4Dxw2ax4SvLNwKhCNDniL2`}
                  layout="fill"
                  draggable={false}
                  priority
                />
              </div>
            </div>
          </div>
          <div className="relative flex flex-row gap-4 flex items-end justify-center w-fit h-fit">
            <div className="relative w-fit h-fit flex items-center justify-center font-bit text-xs md:text-sm text-ama whitespace-inline text-right">
              {dict?.common?.ecosystem}
            </div>
            <div className="relative w-fit h-fit flex items-center justify-center font-bit text-sm text-ama">
              {">"}
            </div>
          </div>
        </div>
        <div className="relative w-full h-fit flex flex-row gap-1.5 items-end justify-end sm:flex-nowrap flex-wrap">
          {[
            {
              link: "https://triplea.agentmeme.xyz",
              image: "Qma67BUsoc3mqP48XWoHod3gYLr6MGSC6er422GWcHuNti",
              title: "TripleA",
            },
            {
              link: "https://globaldesignernetwork.com",
              image: "QmNdZYLwjEpwYVR7VyDqNq1G1hMcnKRxebvk4pFpKMAZEy",
              title: "GDN",
            },
            {
              link: "https://ionic.digitalax.xyz",
              image: "QmRbivMtkQehehTW8oEM3H2DqcSCFnCXK1W7AwYmzRz6wn",
              title: "Ionic",
            },
            {
              link: "https://skyhunters.agentmeme.xyz",
              image: "QmQZZNZVgQ6ywBoAAAEBxUNTprVJmeM9gjPHvvhxmMNRse",
              title: "Skyhunters",
            },
            {
              link: "https://kinora.irrevocable.dev",
              image: "QmQk9TqFivUqc6ktosoZVVih9o1uiY3r5Z7F3GCC1FpaJS",
              title: "Kinora",
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
              title: dict?.common?.manu,
            },
            {
              link: "https://listener.irrevocable.dev",
              image: "QmcY6zRcfQyr7pahRVaSwzT3J7ibiDNYwWUFkg9aFA4tE2",
              title: dict?.common?.lit,
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
                      src={`${INFURA_GATEWAY_INTERNAL}${item.image}`}
                    />
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
