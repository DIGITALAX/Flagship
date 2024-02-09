import Image from "next/legacy/image";
import { FunctionComponent, ReactElement } from "react";
import { BsTwitter } from "react-icons/bs";
import { BiArrowToTop } from "react-icons/bi";
import { INFURA_GATEWAY } from "../../../lib/constants";
import { FooterProps } from "../types/layout.types";

const Footer: FunctionComponent<FooterProps> = ({
  handleRewind,
}): JSX.Element => {
  return (
    <div className="relative w-full bg-offBlack h-fit flex items-center justify-start flex-col gap-10 pt-12">
      <div className="relative w-full h-fit flex flex-col md:flex-row items-center justify-between gap-10 px-6">
        <div
          className={`relative flex border-2 border-offWhite bg-offWhite w-full md:w-fit p-2 h-fit lg:h-full items-center justify-center`}
        >
          <Image
            layout="fill"
            src={`${INFURA_GATEWAY}/ipfs/QmSvQQsELrcEaGrQ2L2Lak8F2hgMeiBxw7MwhCrog6snDj`}
            priority
            draggable={false}
          />
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <div
              id="digi"
              className="relative flex w-fit text-center h-fit text-offWhite font-mag text-[8.5vw] p-4"
            >
              DIGITALAX
            </div>
            <div
              id="code"
              className="font-fut w-full h-fit text-[1.4vw] lg:text-[1vw] relative flex items-center justify-center pb-2"
            >
              100 105 103 105 116 97 108 97 120
            </div>
            <div className="relative w-full px-8 h-10 flex items-center justify-center flex-col lg:pb-0 pb-6">
              <div className="w-full h-full border-x-2 border-b-2 border-white flex items-center justify-center relative"></div>
              <div className="w-full h-full border-x-2 border-white flex items-center justify-center relative"></div>
            </div>
          </div>
        </div>
        <div className="flex relative h-fit w-full md:w-72 lg:w-[20vw] text-xs md:text-[1vw] xl:text-[0.8vw] text-midWhite justify-center items-center font-lib break-all text-center md:text-left sm:text-right leading-8">
          From mini-maps and mesh segmentation, to synth machines and material
          use, the web3 fashion ecosystem supplies more than a few good looks.
          <br />
          <br />
          For collectors, creators, and everyone in between, it’s more dangerous
          than ever to go it alone out there.
          <br />
          <br />
          Dress wisely, and take your keys with you.
        </div>
      </div>
      <div className="relative flex w-full h-fit items-center justify-center gap-2 flex-col">
        <div
          id="foot1"
          className="relative flex items-center justify-center w-full h-1"
        ></div>
        <div
          id="foot2"
          className="relative flex items-center justify-center w-full h-1"
        ></div>
        <div
          id="foot3"
          className="relative flex items-center justify-center w-full h-1"
        ></div>
      </div>
      <div className="relative flex items-center justify-between w-full h-fit text-midWhite gap-8 md:gap-4 flex-col md:flex-row">
        <div className="relative w-fit h-fit ml-0 flex items-center justify-center flex-col gap-1 md:order-1 order-3">
          <div className="relative w-fit h-fit flex items-center justify-center hover:text-skyBlue cursor-sewingHS hover:rotate-3">
            END OF LINE
          </div>
          <div className={`relative w-36 h-4 flex items-center justify-center`}>
            <Image
              src={`${INFURA_GATEWAY}/ipfs/QmXbwk3dg9GKWhjVTQGsrt6dKARFCyqNz71ssUo2SGx1zc`}
              draggable={false}
              layout="fill"
              priority
            />
          </div>
        </div>
        <div
          className="relative w-fit h-fit flex flex-row items-center justify-center gap-2 cursor-sewingHS active:scale-95 md:order-2 order-2"
          onClick={() => handleRewind()}
        >
          <div className="flex items-center justify-center w-fit h-fit">
            <BiArrowToTop color="#F7F8E8" size={20} />
          </div>
          <div className="w-fit flex items-center justify-center h-fit font-lib text-base text-offWhite">
            BE KIND, REWIND
          </div>
        </div>
        <div className="relative w-fit h-fit mr-0 flex-row gap-3 flex items-center justify-center md:pr-2 md:order-3 order-1">
          {[
            {
              image: "QmWVdyGgXbPL5SiRnQwALHvWzAnyiXBos1oB4TVTqg7saV",
              link: "https://blog.digitalax.xyz/",
              title: "Blog",
            },
            {
              image: "QmP5349vcKLNXUhtLyZWQXB8vEbFwRcKLzzB93vxkLsvpw",
              link: "https://github.com/digitalax",
              title: "Github",
            },
            {
              image: "QmeA7R3J8FrhZuMmiFFrVqNmWzKkJCbP51pajFrYdEGBVX",
              link: "https://cypher.digitalax.xyz/autograph/digitalax",
              title: "Autograph",
            },
            {
              link: "https://twitter.com/digitalax_",
              title: "Twitter",
              component: <BsTwitter size={30} color={"#FFDCFF"} />,
            },
            {
              link: "https://youtube.com/@digitalax",
              title: "Youtube",
              image: "Qmchp1UWTavZBxq9mTbjASESgRRmsFNXzmxzaMzRSf9aax",
            },
          ].map(
            (
              item: {
                image?: string;
                title: string;
                link: string;
                component?: ReactElement;
              },
              index: number
            ) => {
              return (
                <div
                  key={index}
                  className="relative w-5 h-5 flex items-center justify-center cursor-sewingHS active:scale-95"
                  onClick={() => window.open(item.link)}
                  title={item.title}
                >
                  {item?.component ? (
                    item.component
                  ) : (
                    <Image
                      src={`${INFURA_GATEWAY}/ipfs/${item.image}`}
                      layout="fill"
                      draggable={false}
                    />
                  )}
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
