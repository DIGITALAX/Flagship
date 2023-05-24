import Image from "next/image";
import { FunctionComponent, useState } from "react";
import { BoxProps } from "../../../types/general.types";
import Directory from "./Directory";
import Gallery from "./Gallery";
import Paginate from "./Paginate";

const Box: FunctionComponent<BoxProps> = ({
  currentImages,
  paginateBackward,
  paginateForward,
  pageBoundaryForward,
  pageBoundaryBackward,
  currentPage,
  items,
}): JSX.Element => {
  const [blur, setBlur] = useState<boolean>(true);
  return (
    <div className="w-full md:w-[85.5vw] h-full above:border-r-8 border-b-8 border-t sm:border-t-4 above:border-l-2 border-offBlack rounded-xl relative">
      <div className="bg-grayMid w-full md:w-[85vw] h-full rounded-lg relative flex flex-col">
        <div className="relative border-r-0 border-l-0 md:border-l-2 md:border-r-2 border-b-2 md:border-2 rounded-none rounded-t-md border-offBlack w-full h-fit font-libB text-sm md:text-md lg:text-base text-offBlack pt-3 pb-1 pl-2">
          Research & Development Dept.
        </div>
        <div className="flex flex-col sm:flex-row w-full h-full relative md:border-x-2 border-offBlack">
          <div className="relative w-full sm:w-fit min-w-fit h-auto sm:border-r-2 border-offBlack">
            <Directory items={items} />
          </div>
          <div className="relative w-full h-full">
            <div className="relative grid grid-flow-row auto-rows-auto w-full h-fit">
              <div className="relative row-start-1 w-full h-fit">
                <Gallery currentImages={currentImages} />
              </div>
              <div className="relative row-start-2 w-full h-fit p-8">
                <Paginate
                  paginateBackward={paginateBackward}
                  paginateForward={paginateForward}
                  pageBoundaryForward={pageBoundaryForward}
                  pageBoundaryBackward={pageBoundaryBackward}
                  currentPage={currentPage}
                />
              </div>
              <div className="relative row-start-3 w-full h-full px-3  sm:px-8 pt-8 pb-1">
                <div
                  className={`relative w-full h-[60vw] sm:h-[40vw] ${
                    blur && "blur-sm animate-unblur"
                  }`}
                >
                  <Image
                    src="/images/blender/imagelarge.png"
                    layout="fill"
                    priority
                    onLoadingComplete={() => setBlur(false)}
                    blurDataURL={"/images/blurred/imagelarge.png"}
                    draggable={false}
                  />
                </div>
              </div>
              <div className="relative row-start-4 w-fit h-full pt-1 px-8 pb-8 place-self-end font-lib text-offBlack text-xs">
                bl_info: fashion syntheziser
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
