import Image from "next/image";
import { useRouter } from "next/router";
import { FunctionComponent, useState } from "react";
import { Gallery, GalleryProps } from "../../../types/general.types";

const Gallery: FunctionComponent<GalleryProps> = ({
  currentImages,
  more,
  setExpressInterest,
  queryWindowSize2XL,
}): JSX.Element => {
  const [blur, setBlur] = useState<boolean>(true);
  const router = useRouter();
  return (
    <div
      className={`overflow-hidden ${
        more
          ? "h-full md:h-full lg:h-full"
          : "h-[60vh] md:h-[100vh] lg:h-[155vh]"
      } w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center relative content-evenly gap-5 items-center inline-flex 2xl:place-content-center`}
    >
      <div className="relative w-full h-full place-items-center">
        <div className="grid grid-flow-row auto-rows-auto w-full h-fit relative gap-4">
          {currentImages.slice(0, 6).map((token: Gallery, index: number) => {
            return (
              <div
                key={index}
                className={`h-fit w-full min-h-fit flex relative row-start-${
                  index + 1
                } group`}
              >
                <div
                  className={`${blur && "blur-sm animate-unblur"} ${
                    !queryWindowSize2XL && "w-[31.5vw]"
                  }`}
                >
                  <Image
                    src={token.image}
                    width={queryWindowSize2XL ? 2 * token.width : token.width}
                    height={
                      queryWindowSize2XL ? 2 * token.height : token.height
                    }
                    objectFit="cover"
                    objectPosition="center"
                    priority
                    layout={queryWindowSize2XL ? "intrinsic" : "responsive"}
                    onLoadingComplete={() => setBlur(false)}
                    blurDataURL={token.blurred}
                    draggable={false}
                  />
                  <div className="absolute bg-black top-0 grid grid-flow-col auto-cols-auto w-full bg-opacity-70 h-full font-lib text-midWhite invisible group-hover:visible group-active:visible">
                    <div
                      onClick={
                        !token?.external
                          ? !token.price
                            ? () => router.push("/express-interest")
                            : () =>
                                router.push(
                                  `/collect/${token.name
                                    .replaceAll(" ", "-")
                                    .toLowerCase()}`
                                )
                          : () => {}
                      }
                      className="w-fit h-fit min-h-fit relative col-start-1 place-self-end"
                    >
                      <div
                        className="relative decoration-1 underline underline-offset-2 whitespace-nowrap mix-blend-screen hover:cursor-sewingHS w-fit h-fit text-[1.2vw] p-6"
                        onClick={
                          token?.external
                            ? () => window.open(token?.external)
                            : () => setExpressInterest(token.name)
                        }
                      >
                        Collect NFT
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="relative w-full h-full place-items-center">
        <div className="grid grid-flow-row auto-rows-auto w-full h-fit relative gap-4">
          {currentImages.slice(6, 12).map((token: Gallery, index: number) => {
            return (
              <div
                key={index}
                className={`h-full w-full min-h-fit flex relative row-start-${
                  index + 1
                } group`}
              >
                <div
                  className={`${blur && "blur-sm animate-unblur"} ${
                    !queryWindowSize2XL && "w-[31.5vw]"
                  }`}
                >
                  <Image
                    src={token?.image}
                    width={queryWindowSize2XL ? 2 * token.width : token.width}
                    draggable={false}
                    height={
                      queryWindowSize2XL ? 2 * token.height : token.height
                    }
                    objectPosition="center"
                    priority
                    layout={queryWindowSize2XL ? "intrinsic" : "responsive"}
                    onLoadingComplete={() => setBlur(false)}
                    blurDataURL={token.blurred}
                  />
                  <div className="absolute bg-black top-0 grid grid-flow-col auto-cols-auto w-full bg-opacity-70 h-full font-lib text-midWhite invisible group-hover:visible group-active:visible">
                    <div
                      className="w-fit h-fit relative col-start-1 place-self-end"
                      onClick={
                        !token.price
                          ? () => router.push("/express-interest")
                          : () =>
                              router.push(
                                `/collect/${token.name
                                  .replaceAll(" ", "-")
                                  .toLowerCase()}`
                              )
                      }
                    >
                      <div
                        className="relative decoration-1 underline underline-offset-2 whitespace-nowrap mix-blend-screen hover:cursor-sewingHS w-fit h-fit text-[1.2vw] p-6"
                        onClick={() => setExpressInterest(token.name)}
                      >
                        Collect NFT
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="relative w-full h-full">
        <div className="grid grid-flow-row auto-rows-auto w-full h-fit relative gap-4">
          {currentImages.slice(12, 18).map((token: Gallery, index: number) => {
            return (
              <div
                key={index}
                className={`h-full w-full min-h-fit flex relative row-start-${
                  index + 1
                } group`}
              >
                <div
                  className={`${blur && "blur-sm animate-unblur"} ${
                    !queryWindowSize2XL && "w-[31.5vw]"
                  }`}
                >
                  <Image
                    src={token.image}
                    width={!queryWindowSize2XL ? 2 * token.width : token.width}
                    height={
                      !queryWindowSize2XL ? 2 * token.height : token.height
                    }
                    objectPosition="center"
                    priority
                    draggable={false}
                    layout={queryWindowSize2XL ? "intrinsic" : "responsive"}
                    onLoadingComplete={() => setBlur(false)}
                    blurDataURL={token.blurred}
                  />
                  <div className="absolute bg-black top-0 grid grid-flow-col auto-cols-auto w-full bg-opacity-70 h-full font-lib text-midWhite invisible group-hover:visible group-active:visible">
                    <div
                      className="w-fit h-fit relative col-start-1 place-self-end"
                      onClick={
                        !token.price
                          ? () => router.push("/express-interest")
                          : () =>
                              router.push(
                                `/collect/${token.name
                                  .replaceAll(" ", "-")
                                  .toLowerCase()}`
                              )
                      }
                    >
                      <div
                        className="relative decoration-1 underline underline-offset-2 whitespace-nowrap mix-blend-screen hover:cursor-sewingHS w-fit h-fit text-[1.2vw] p-6"
                        onClick={() => setExpressInterest(token.name)}
                      >
                        Collect NFT
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
