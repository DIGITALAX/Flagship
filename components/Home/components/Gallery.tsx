import Image from "next/legacy/image";
import { FunctionComponent } from "react";
import { INFURA_GATEWAY, numberToItemTypeMap } from "../../../lib/constants";
import { GalleryProps } from "../types/home.types";
import { setImageViewer } from "@/redux/reducers/imageViewerSlice";
import { Creation } from "@/components/Distro/types/distro.types";

const Gallery: FunctionComponent<GalleryProps> = ({
  more,
  currentIndex,
  dispatch,
  galleryLoading,
  gallery,
  t
}): JSX.Element => {
  return (
    <div
      className={`overflow-hidden ${
        more ? "h-full" : "h-[60vh] md:h-[100vh] lg:h-[155vh]"
      } w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start relative gap-5 2xl:justify-start`}
    >
      {galleryLoading
        ? [
            Array.from({ length: 7 }),
            Array.from({ length: 7 }),
            Array.from({ length: 7 }),
          ].map((images: Array<unknown>, index: number) => {
            return (
              <div
                className={`flex flex-col w-full h-fit relative gap-4 items-center justify-start`}
                key={index}
              >
                {images?.map((_, index: number) => {
                  return (
                    <div
                      key={index}
                      className={`${
                        index % 2 == 0
                          ? "h-[20rem]"
                          : index % 3 == 0
                          ? "h-[12rem]"
                          : "h-[35rem]"
                      } w-full flex items-center justify-center relative`}
                      id="staticLoad"
                    ></div>
                  );
                })}
              </div>
            );
          })
        : [
            [...gallery?.slice(0 + currentIndex * 21, 7 + currentIndex * 21)],
            [...gallery?.slice(7 + currentIndex * 21, 14 + currentIndex * 21)],
            [...gallery?.slice(14 + currentIndex * 21, 21 + currentIndex * 21)],
          ].map((images: Creation[], firstIndex: number) => {
            return (
              <div
                className="flex flex-col w-full h-fit relative gap-4 items-center justify-start"
                key={firstIndex}
              >
                {images?.map((token: Creation, index: number) => {
                  return (
                    <div
                      key={index}
                      className={`${
                        (firstIndex + index) % 2 == 0
                          ? "h-[30rem]"
                          : (firstIndex + index) % 3 == 0
                          ? "h-[25rem]"
                          : "h-[45rem]"
                      } w-full flex items-center justify-center relative group bg-amo/30`}
                      onClick={() =>
                        dispatch(
                          setImageViewer({
                            actionValue: true,
                            actionImage: `${INFURA_GATEWAY}/ipfs/${
                              token.collectionMetadata?.images?.[0]?.split(
                                "ipfs://"
                              )?.[1]
                            }`,
                            actionType: "image/png",
                          })
                        )
                      }
                    >
                      <Image
                        src={`${INFURA_GATEWAY}/ipfs/${
                          token.collectionMetadata?.images?.[0]?.split(
                            "ipfs://"
                          )?.[1]
                        }`}
                        layout="fill"
                        objectFit="cover"
                        priority
                        draggable={false}
                      />
                      <div className="absolute bg-black top-0 left-0 flex items-end justify-end w-full bg-opacity-70 h-full font-lib text-midWhite invisible group-hover:visible group-active:visible">
                        <div className="relative w-fit h-fit flex items-center justify-center right-6 bottom-6">
                          <div
                            className="relative decoration-1 underline underline-offset-2 whitespace-nowrap mix-blend-screen hover:cursor-sewingHS w-fit h-fit text-[1.2vw] flex items-center justify-center active:scale-95"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              window.open(
                                `https://cypher.digitalax.xyz/item/${
                                  numberToItemTypeMap[Number(token?.origin)]
                                }/${token?.collectionMetadata?.title?.replaceAll(
                                  " ",
                                  "_"
                                )}`
                              );
                            }}
                          >
                            {t("col")}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
    </div>
  );
};

export default Gallery;
