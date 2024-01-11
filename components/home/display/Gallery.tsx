import Image from "next/legacy/image";
import { FunctionComponent, useState } from "react";
import { Gallery, GalleryProps } from "../../../types/general.types";
import { INFURA_GATEWAY } from "../../../lib/lens/constants";

const Gallery: FunctionComponent<GalleryProps> = ({
  currentImages,
  more,
  queryWindowSize2XL,
  queryWindowInbetween,
}): JSX.Element => {
  const [blur, setBlur] = useState<boolean>(true);
  return (
    <div
      className={`overflow-hidden ${
        more ? "h-full" : "h-[60vh] md:h-[100vh] lg:h-[155vh]"
      } w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start relative gap-5 2xl:place-content-center`}
    >
      <div className="relative w-full h-fit items-start justify-center flex">
        <div className="flex flex-col w-full h-fit relative gap-4">
          {(queryWindowInbetween
            ? currentImages.slice(0, 9)
            : currentImages.slice(0, 6)
          ).map((token: Gallery, index: number) => {
            return (
              <div
                key={index}
                className={`h-fit w-full min-h-fit flex relative row-start-${
                  index + 1
                } group`}
              >
                <div className={`w-full ${blur && "blur-sm animate-unblur"}`}>
                  <Image
                    src={`${INFURA_GATEWAY}/ipfs/${token.image}`}
                    width={queryWindowSize2XL ? 2 * token.width : token.width}
                    height={
                      queryWindowSize2XL ? 2 * token.height : token.height
                    }
                    objectFit="cover"
                    objectPosition="center"
                    priority
                    layout={queryWindowSize2XL ? "intrinsic" : "responsive"}
                    className="bg-offBlack"
                    onLoadingComplete={() => setBlur(false)}
                    draggable={false}
                  />
                  <div className="absolute bg-black top-0 grid grid-flow-col auto-cols-auto w-full bg-opacity-70 h-full font-lib text-midWhite invisible group-hover:visible group-active:visible">
                    <div className="w-fit h-fit min-h-fit relative col-start-1 place-self-end">
                      <div
                        className="relative decoration-1 underline underline-offset-2 whitespace-nowrap mix-blend-screen hover:cursor-sewingHS w-fit h-fit text-[1.2vw] p-6"
                        onClick={() => window.open(token?.external)}
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
      <div className="relative w-full h-fit items-start justify-center flex">
        <div className="flex flex-col w-full h-fit relative gap-4">
          {(queryWindowInbetween
            ? currentImages.slice(9, 18)
            : currentImages.slice(6, 12)
          ).map((token: Gallery, index: number) => {
            return (
              <div
                key={index}
                className={`h-full w-full min-h-fit flex relative row-start-${
                  index + 1
                } group`}
              >
                <div className={`w-full ${blur && "blur-sm animate-unblur"}`}>
                  <Image
                    src={`${INFURA_GATEWAY}/ipfs/${token.image}`}
                    width={queryWindowSize2XL ? 2 * token.width : token.width}
                    height={
                      queryWindowSize2XL ? 2 * token.height : token.height
                    }
                    objectFit="cover"
                    objectPosition="center"
                    priority
                    layout={queryWindowSize2XL ? "intrinsic" : "responsive"}
                    className="bg-offBlack"
                    onLoadingComplete={() => setBlur(false)}
                    draggable={false}
                  />
                  <div className="absolute bg-black top-0 grid grid-flow-col auto-cols-auto w-full bg-opacity-70 h-full font-lib text-midWhite invisible group-hover:visible group-active:visible">
                    <div className="w-fit h-fit relative col-start-1 place-self-end">
                      <div
                        className="relative decoration-1 underline underline-offset-2 whitespace-nowrap mix-blend-screen hover:cursor-sewingHS w-fit h-fit text-[1.2vw] p-6"
                        onClick={() => window.open(token?.external)}
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
      {!queryWindowInbetween && (
        <div className="relative w-full h-fit items-start justify-center flex">
          <div className="flex flex-col w-full h-fit relative gap-4">
            {currentImages
              .slice(12, 18)
              .map((token: Gallery, index: number) => {
                return (
                  <div
                    key={index}
                    className={`h-full w-full min-h-fit flex relative row-start-${
                      index + 1
                    } group`}
                  >
                    <div
                      className={`w-full ${blur && "blur-sm animate-unblur"}`}
                    >
                      <Image
                        src={`${INFURA_GATEWAY}/ipfs/${token.image}`}
                        width={
                          queryWindowSize2XL ? 2 * token.width : token.width
                        }
                        height={
                          queryWindowSize2XL ? 2 * token.height : token.height
                        }
                        objectFit="cover"
                        objectPosition="center"
                        priority
                        layout={queryWindowSize2XL ? "intrinsic" : "responsive"}
                        className="bg-offBlack"
                        onLoadingComplete={() => setBlur(false)}
                        draggable={false}
                      />
                      <div className="absolute bg-black top-0 grid grid-flow-col auto-cols-auto w-full bg-opacity-70 h-full font-lib text-midWhite invisible group-hover:visible group-active:visible">
                        <div className="w-fit h-fit relative col-start-1 place-self-end">
                          <div
                            className="relative decoration-1 underline underline-offset-2 whitespace-nowrap mix-blend-screen hover:cursor-sewingHS w-fit h-fit text-[1.2vw] p-6"
                            onClick={() => window.open(token?.external)}
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
      )}
    </div>
  );
};

export default Gallery;
