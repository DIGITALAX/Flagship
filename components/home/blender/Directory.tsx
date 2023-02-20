import Image from "next/image";
import { FunctionComponent, useState } from "react";
import { DirectoryProps } from "../../../types/general.types";

const Directory: FunctionComponent<DirectoryProps> = ({
  items,
}): JSX.Element => {
  const [blur, setBlur] = useState<boolean>(true);
  return (
    <div className="flex flex-col w-full h-full relative text-offBlack">
      <div className="relative w-full h-fit font-lib text-xl lg:text-2xl border-b-2 border-offBlack p-4 sm:p-10">
        Mesh
      </div>
      <div className="relative w-full h-full text-xs sm:text-sm lg:text-base self-start px-8 pt-8 flex flex-row sm:flex-col">
        <div className="relative min-w-fit w-fit sm:w-full h-fit">
          <div className="relative grid grid-flow-col auto-cols-auto w-fit h-fit">
            <div
              className={`relative col-start-1 w-full h-fit pr-3 place-self-center ${
                blur && "blur-sm animate-unblur"
              }`}
            >
              <Image
                height={20}
                width={20}
                src="/images/arrowdown.png"
                priority
                onLoadingComplete={() => setBlur(false)}
                blurDataURL={"/images/blurred/arrowdown.png"}
              />
            </div>
            <div className="relative col-start-2 w-full h-fit">{items[0]}</div>
          </div>
        </div>
        <div className="relative w-fit sm:w-full h-full place-self-center">
          <div className="relative flex flex-row flex-wrap sm:flex-nowrap sm:flex-col w-fit h-fit justify-start">
            {items.slice(1).map((item, index) => {
              return (
                <div
                  className="relative grid grid-flow-col auto-cols-auto w-fit h-fit row-start-1 pl-3 pt-2 col-start-1 break-word"
                  key={index}
                >
                  <div
                    className={`relative col-start-1 w-full h-fit pr-3 ${
                      blur && "blur-sm animate-unblur"
                    }`}
                  >
                    <Image
                      height={20}
                      width={20}
                      src="/images/arrowright.png"
                      priority
                      onLoadingComplete={() => setBlur(false)}
                      blurDataURL={"/images/blurred/arrowright.png"}
                    />
                  </div>
                  <div className="relative col-start-2 w-full h-fit">
                    {item}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directory;
