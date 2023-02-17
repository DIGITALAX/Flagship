import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, useState } from "react";
import { BsTwitter } from "react-icons/bs";
import { BiArrowToTop } from "react-icons/bi";
import { FooterProps } from "../../types/general.types";

const Footer: FunctionComponent<FooterProps> = ({
  handleRewind,
}): JSX.Element => {
  const [blur, setBlur] = useState<boolean>(true);
  return (
    <div className="relative min-w-screen bg-offBlack h-fit min-h-full flex w-full">
      <div className="relative grid auto-rows-auto grid-flow-row w-full h-full pt-12">
        <div className="relative row-start-1 w-full h-full">
          <div className="relative grid auto-cols-auto grid-flow-col h-full w-full">
            <div className="col-start-1 w-full md:w-fit lg:h-full lg:w-full relative md:pl-6 row-start-1 p-2 md:pb-0 pb-8">
              <div
                className={`relative flex border-2 w-full h-fit lg:h-full pb-2 ${
                  blur && "blur-sm animate-unblur"
                }`}
              >
                <Image
                  layout="fill"
                  src="/images/footerstatic.png"
                  priority
                  onLoadingComplete={() => setBlur(false)}
                  blurDataURL={"/images/blurred/footerstatic.png"}
                />
                <div className="relative w-full h-full grid grid-flow-row auto-rows-auto">
                  <div
                    id="digi"
                    className="relative w-full text-center h-fit text-offWhite font-mag text-[8.5vw] row-start-1 p-4"
                  >
                    DIGITALAX
                  </div>
                  <div
                    id="code"
                    className="font-fut text-[1.4vw] lg:text-[1vw] relative row-start-2 place-self-center pb-2"
                  >
                    100 105 103 105 116 97 108 97 120
                  </div>
                  <div className="relative w-full pl-8 pr-8 h-10 grid grid-flow-row auto-rows-auto row-start-3 lg:pb-0 pb-6">
                    <div className="w-full h-full border-2 border-l-2 border-r-2 border-t-0 border-white row-start-1 relative"></div>
                    <div className="w-full h-full border-l-2 border-r-2 border-t-0 border-b-0 border-white row-start-2 relative"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-start-2 relative h-fit w-full md:w-72 lg:w-[20vw] text-xs md:text-[1vw] xl:text-[0.8vw] text-midWhite place-self-end font-lib text-left sm:text-right leading-8 col-start-1 row-start-2 md:row-start-1 pr-10 pl-6">
              From mini-maps and mesh segmentation, to synth machines and
              material use, the web3 fashion ecosystem supplies more than a few
              good looks.
              <br />
              <br />
              For collectors, creators, and everyone in between, it’s more
              dangerous than ever to go it alone out there.
              <br />
              <br />
              Dress wisely, and take your keys with you.
            </div>
          </div>
        </div>
        <div className="relative row-start-2 w-full h-full pt-16">
          <div className="grid grid-flow-row auto-rows-auto relative w-full h-fit gap-2">
            <div id="foot1" className="relative row-start-1 w-full h-1"></div>
            <div id="foot2" className="relative row-start-2 w-full h-1"></div>
            <div id="foot3" className="relative row-start-3 w-full h-1"></div>
          </div>
        </div>
        <div className="relative row-start-3 w-full h-full pt-4 pb-10 text-midWhite font-fut text-[2vw] galaxy:text-[1.4vw] sm:text-[1.2vw] md:text-[1vw] lg:text-[0.85vw] xl:text-[0.7vw] grid grid-flow-row auto-rows-auto pl-3 pr-3 sm:pl-0 sm:pr-10 text-center gap-3">
          <div className="relative row-start-1 w-fit h-fit place-self-center  ">
            Visual media used by this site is mirrored using IPFS{" "}
            <Link href={"https://ipfs.digitalax.xyz/"}>
              <a
                target={"_blank"}
                rel="noreferrer"
                className="underline decoration-midWhite decoration-1 underline-offset-4 cursor-sewingHS hover:text-skyBlue"
              >
                here.
              </a>
            </Link>
          </div>
          <div className="relative row-start-2 w-fit h-fit place-self-center pt-2">
            <sup>*</sup>Some US based ISPs may block these links, we’re looking
            into why.
          </div>
        </div>
        <div className="relative row-start-4 w-full h-full text-midWhite pt-10">
          <div className="relative grid auto-cols-auto grid-flow-col h-full w-full">
            <div className="col-start-1 h-full w-full relative pt-6">
              <div className="relative w-fit h-fit grid grid-flow-row auto-rows-auto">
                <div className="relative w-fit h-fit col-start-1 row-start-1 sm:row-start-1 pl-6 pb-1 hover:text-skyBlue cursor-sewingHS hover:rotate-3">
                  END OF LINE
                </div>
                <div
                  className={`relative w-36 h-4 row-start-2 ${
                    blur && "blur-sm animate-unblur"
                  }`}
                >
                  <Image
                    src="/images/footerblur.png"
                    layout="fill"
                    width={160}
                    height={20}
                    priority
                    onLoadingComplete={() => setBlur(false)}
                    blurDataURL={"/images/blurred/footerblur.png"}
                  />
                </div>
              </div>
            </div>
            <div className="col-start-1 row-start-1 sm:col-start-2 h-full w-fit relative sm:pl-0 sm:pb-0 sm:pr-0 pr-6 pb-6 pl-6 place-self-center pt-6 cursor-sewingHS active:scale-95">
              <div
                className="grid grid-flow-col auto-cols-auto relative w-fit h-fit"
                onClick={() => handleRewind()}
              >
                <div className="col-start-1 w-full h-fit pr-3 place-self-center">
                  <BiArrowToTop color="#F7F8E8" size={20} />
                </div>
                <div className="col-start-2 w-full h-fit place-self-center">
                  BE KIND, REWIND
                </div>
              </div>
            </div>
            <div className="col-start-1 row-start-2 sm:row-start-1 sm:col-start-3 h-full w-fit relative place-self-center sm:pb-0 pb-8 pl-6 sm:pl-0 sm:place-self-end pr-4 md:pr-14 pt-6">
              <div className="row-start-2 grid grid-flow-col auto-cols-auto relative h-fit w-fit gap-3">
                <div className="relative w-fit h-fit col-start-1 place-self-end">
                  <Link href={"https://blog.digitalax.xyz/"}>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className={`cursor-sewingHS h-fit relative pr-1 ${
                        blur && "blur-sm animate-unblur"
                      }`}
                    >
                      <Image
                        src={"/images/mirror.png"}
                        width={21}
                        height={26}
                        priority
                        onLoadingComplete={() => setBlur(false)}
                        blurDataURL={"/images/blurred/mirror.png"}
                      />
                    </a>
                  </Link>
                </div>
                <div className="relative w-fit h-fit col-start-2 place-self-end">
                  <Link href={"https://github.com/digitalax"}>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className={`cursor-sewingHS h-fit relative pr-1 ${
                        blur && "blur-sm animate-unblur"
                      }`}
                    >
                      <Image
                        src={"/images/github.png"}
                        width={29}
                        height={28}
                        priority
                        onLoadingComplete={() => setBlur(false)}
                        blurDataURL={"/images/blurred/github.png"}
                      />
                    </a>
                  </Link>
                </div>
                <div className="relative w-fit h-fit col-start-3">
                  <Link href={"https://lenster.xyz/u/digitalax.lens"}>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className={`cursor-sewingHS h-fit relative ${
                        blur && "blur-sm animate-unblur"
                      }`}
                    >
                      <Image
                        src={"/images/lens.png"}
                        width={30}
                        height={30}
                        priority
                        onLoadingComplete={() => setBlur(false)}
                        blurDataURL={"/images/blurred/lens.png"}
                      />
                    </a>
                  </Link>
                </div>
                <div className="relative w-fit h-fit col-start-4">
                  <Link href={"https://twitter.com/digitalax_"}>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-sewingHS h-fit relative"
                    >
                      <BsTwitter size={30} color={"#FFDCFF"} />
                    </a>
                  </Link>
                </div>
                <div className="relative w-fit h-fit col-start-5 place-self-center">
                  <Link href={"https://youtube.com/@digitalax"}>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-sewingHS h-fit relative"
                    >
                      <Image
                        src={"/images/youtube.png"}
                        width={30}
                        height={20}
                        priority
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
