import Image from "next/legacy/image";
import { FunctionComponent } from "react";
import tokens from "../../../pages/api/tokens.json";
import { INFURA_GATEWAY } from "../../../lib/constants";
import { Gallery, GalleryProps } from "../types/home.types";
import { setImageViewer } from "@/redux/reducers/imageViewerSlice";

const Gallery: FunctionComponent<GalleryProps> = ({
  more,
  queryWindowSize2XL,
  currentIndex,
  dispatch,
}): JSX.Element => {
  return (
    <div
      className={`overflow-hidden ${
        more ? "h-full" : "h-[60vh] md:h-[100vh] lg:h-[155vh]"
      } w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start relative gap-5 2xl:place-content-center`}
    >
      {[
        [...tokens.slice(0 + currentIndex * 21, 7 + currentIndex * 21)],
        [...tokens.slice(7 + currentIndex * 21, 14 + currentIndex * 21)],
        [...tokens.slice(14 + currentIndex * 21, 21 + currentIndex * 21)],
      ].map((images: Gallery[], index) => {
        return (
          <div
            className="flex flex-col w-full h-fit relative gap-4 items-center justify-start"
            key={index}
          >
            {images?.map((token: Gallery, index: number) => {
              return (
                <div
                  key={index}
                  className={`h-fit w-fit flex items-center justify-center relative group`}
                  onClick={() =>
                    dispatch(
                      setImageViewer({
                        actionValue: true,
                        actionImage: `${INFURA_GATEWAY}/ipfs/${token.image}`,
                        actionType: "image/png",
                      })
                    )
                  }
                >
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
                    draggable={false}
                  />
                  <div className="absolute bg-black top-0 left-0 flex items-end justify-end w-full bg-opacity-70 h-full font-lib text-midWhite invisible group-hover:visible group-active:visible">
                    <div className="relative w-fit h-fit flex items-center justify-center right-6 bottom-6">
                      <div
                        className="relative decoration-1 underline underline-offset-2 whitespace-nowrap mix-blend-screen hover:cursor-sewingHS w-fit h-fit text-[1.2vw] flex items-center justify-center active:scale-95"
                        onClick={() => window.open(token?.external)}
                      >
                        Collect NFT
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
