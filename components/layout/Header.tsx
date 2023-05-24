import Image from "next/image";
import { useRouter } from "next/router";
import { FunctionComponent, useState } from "react";
import Marquee from "react-fast-marquee";
import { HeaderProps } from "../../types/general.types";

const Header: FunctionComponent<HeaderProps> = ({
  rewind,
  handleShop,
  changeColor,
  heartColor,
}): JSX.Element => {
  const [blur, setBlur] = useState<boolean>(true);
  const router = useRouter();
  return (
    <div
      ref={rewind}
      className="relative grid grid-flow-col auto-cols-auto w-full gap-10 md:gap-1 md:justify-between md:content-between pt-6 md:pt-10 min-h-96 md:h-80 justify-center md:min-h-80 md:pl-8 md:pr-8 pb-4 overflow-x-hidden text-mainText"
    >
      <div className="relative col-start-1 row-start-1 md:w-fit min-h-full h-full">
        <div className="relative grid-flow-row auto-rows-auto md:w-fit h-full min-h-full font-fira text-xs grid md:place-self-start place-self-center text-center md:text-left md:pr-20 lg:pr-11">
          <div className="relative h-fit md:w-fit row-start-1">IN S ERT</div>
          <div className="relative h-fit md:w-fit row-start-2">
            <p className="pb-4">T O K EN TO R UN </p>
            <p className="pl-2">N O TEB O OK ON LA TENT</p>
            <p>MA C HINE</p>
          </div>
          <div className="relative h-fit md:w-fit row-start-3">
            <p>D D OU HI K I LD BE</p>
            <p className="pl-2 pt-4">SY? O TO L GI AL N ROMA</p>
            <p>NCY</p>
          </div>
        </div>
      </div>
      <div className="relative col-start-1 row-start-2 md:col-start-2 w-full md:row-start-1 text-center min-h-full h-full justify-self-center">
        <div className="grid grid-row-flow auto-rows-auto relative md:w-fit h-fit justify-center w-full">
          <div className="relative w-10 h-16 row-start-1 place-self-center pb-2">
            <div
              className={`border border-2 border-mainText w-full h-full min-h-full relative flex ${
                blur && "blur-sm animate-unblur"
              }`}
            >
              <Image
                width={50}
                height={70}
                src="/images/header/diagram.png"
                objectFit="cover"
                priority
                onLoadingComplete={() => setBlur(false)}
                blurDataURL={"/images/blurred/diagram.png"}
                draggable={false}
              />
            </div>
          </div>
          <div className="relative w-fit h-fit row-start-2 font-fira text-xs pt-4 text-center place-self-center">
            0001: APPEARANCE, STATUS,
            <br /> AND MATERIAL USE
          </div>
        </div>
      </div>
      <div className="relative col-start-1 md:col-start-3 row-start-3 md:row-start-1 w-full md:w-fit min-w-full min-h-full h-full">
        <div className="grid grid-row-flow auto-rows-auto relative w-full h-full gap-4">
          <div className="relative w-fit h-fit row-start-1 place-self-center md:place-self-end pb-3">
            <div
              className="relative w-screen md:w-40 h-fit bg-white border-t border-b md:border border-1 border-mainText pt-1.5 pb-1.5 text-sm flex overflow-x-hidden whitespace-nowrap cursor-sewingHS hover:bg-mainBg hover:text-mainText active:text-mainText active:bg-mainBg text-offBlack"
              onClick={
                router.pathname == "/"
                  ? () => handleShop()
                  : () => document.location.href="/#shop"
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
          <div className="relative w-fit h-fit row-start-2 place-self-end self-end pr-3 pt-4 md:pt-0 md:pr-10">
            <div
              className="border border-2 rounded-full border-mainText w-fit h-fit pr-5 pl-5 flex pt-2 pb-2 cursor-sewingHS active:bg-mainBg active:bg-mainBg hover:border-maintText hover:bg-mainBg fill-mainText"
              onClick={() => changeColor()}
            >
              <svg
                version="1.1"
                width="40px"
                height="28px"
                viewBox="0 0 48.0 38.0"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <clipPath id="i0">
                    <path d="M1440,0 L1440,13000 L0,13000 L0,0 L1440,0 Z"></path>
                  </clipPath>
                  <clipPath id="i1">
                    <path d="M35.931311,0.521582277 L47.4849179,12.0212446 C48.1803952,12.7700598 48.1803952,13.8933973 47.4311904,14.5351243 L25.2333801,36.732147 C24.5379314,37.42759 23.4148789,37.42759 22.7194112,36.732147 L0.521600786,14.5351243 C-0.173866929,13.8397004 -0.173866929,12.7166877 0.521600786,12.0212446 L12.0751599,0.521582277 C12.7706085,-0.173860759 13.8936611,-0.173860759 14.5891288,0.521582277 L22.39867,8.38414212 C23.30836,9.29336999 24.6989229,9.29336999 25.608183,8.38414212 L33.4173421,0.521582277 C34.1127908,-0.173860759 35.2358433,-0.173860759 35.931311,0.521582277 Z M31,22.0298502 L17,22.0298502 C16.4477153,22.0298502 16,22.4775654 16,23.0298502 C16,23.5821349 16.4477153,24.0298502 17,24.0298502 L31,24.0298502 C31.5522847,24.0298502 32,23.5821349 32,23.0298502 C32,22.4775654 31.5522847,22.0298502 31,22.0298502 Z M31,17.0149251 L17,17.0149251 C16.4477153,17.0149251 16,17.4626403 16,18.0149251 C16,18.5672098 16.4477153,19.0149251 17,19.0149251 L31,19.0149251 C31.5522847,19.0149251 32,18.5672098 32,18.0149251 C32,17.4626403 31.5522847,17.0149251 31,17.0149251 Z M31,12 L17,12 C16.4477153,12 16,12.4477153 16,13 C16,13.5522847 16.4477153,14 17,14 L31,14 C31.5522847,14 32,13.5522847 32,13 C32,12.4477153 31.5522847,12 31,12 Z"></path>
                  </clipPath>
                </defs>
                <g transform="translate(-1314.0 -99.0)">
                  <g clipPath="url(#i0)">
                    <g transform="translate(1290.0 86.0)">
                      <g transform="translate(23.999999999999897 13.00000000000001)">
                        <g clipPath="url(#i1)">
                          <polygon
                            points="-3.33066907e-16,-3.33066907e-16 47.9999973,-3.33066907e-16 47.9999973,37.2537293 -3.33066907e-16,37.2537293 -3.33066907e-16,-3.33066907e-16"
                            stroke="none"
                            fill={heartColor}
                          ></polygon>
                        </g>
                        <g clipPath="url(#i1)">
                          <path
                            d="M33.4173421,0.521582277 C34.1127908,-0.173860759 35.2358433,-0.173860759 35.931311,0.521582277 L47.4849179,12.0212446 C48.1803952,12.7700598 48.1803952,13.8933973 47.4311904,14.5351243 L25.2333801,36.732147 C24.5379314,37.42759 23.4148789,37.42759 22.7194112,36.732147 L0.521600786,14.5351243 C-0.173866929,13.8397004 -0.173866929,12.7166877 0.521600786,12.0212446 L12.0751599,0.521582277 C12.7706085,-0.173860759 13.8936611,-0.173860759 14.5891288,0.521582277 L22.39867,8.38414212 C23.30836,9.29336999 24.6989229,9.29336999 25.608183,8.38414212 Z M31,22.0298502 L17,22.0298502 C16.4477153,22.0298502 16,22.4775654 16,23.0298502 C16,23.5821349 16.4477153,24.0298502 17,24.0298502 L31,24.0298502 C31.5522847,24.0298502 32,23.5821349 32,23.0298502 C32,22.4775654 31.5522847,22.0298502 31,22.0298502 Z M31,17.0149251 L17,17.0149251 C16.4477153,17.0149251 16,17.4626403 16,18.0149251 C16,18.5672098 16.4477153,19.0149251 17,19.0149251 L31,19.0149251 C31.5522847,19.0149251 32,18.5672098 32,18.0149251 C32,17.4626403 31.5522847,17.0149251 31,17.0149251 Z M31,12 L17,12 C16.4477153,12 16,12.4477153 16,13 C16,13.5522847 16.4477153,14 17,14 L31,14 C31.5522847,14 32,13.5522847 32,13 C32,12.4477153 31.5522847,12 31,12 Z"
                            fill={heartColor}
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className="relative w-full h-fit row-start-3 place-self-start pr-5">
            <div className="relative w-fit h-fit grid grid-flow-col auto-cols-auto gap-2 pt-4">
              <div
                className={`relative w-fit h-full col-start-1 place-self-end pt-2 hover:-rotate-12 ${
                  blur && "blur-sm animate-unblur"
                }`}
              >
                <Image
                  src="/images/header/arrow.svg"
                  height={20}
                  width={60}
                  priority
                  draggable={false}
                />
              </div>
              <div className="relative w-fit h-full whitespace-nowrap col-start-2 font-firaL">
                DO NOT BEND
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
