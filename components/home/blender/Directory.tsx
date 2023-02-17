import Image from "next/image";
import { FunctionComponent, useState } from "react";

const Directory: FunctionComponent = (): JSX.Element => {
  const [blur, setBlur] = useState<boolean>(true);
  return (
    <div className="grid-flow-row grid auto-rows-auto w-full h-fit relative text-offBlack md:w-56 2xl:w-full">
      <div className="relative row-start-1 col-start-1 w-full h-fit font-lib text-xl lg:text-2xl border-b-2 border-offBlack p-4">
        Mesh
      </div>
      <div className="relative col-start-1 row-start-2 w-full h-full text-sm lg:text-base self-start md:self-center">
        <div className="relative grid grid-flow-row auto-rows-auto w-full h-fit text-offBlack font-lib pr-4 md:pr-0 pl-4 pt-4">
          <div className="relative row-start-1 col-start-1 w-full h-fit">
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
              <div className="relative col-start-2 w-full h-fit">Blender</div>
            </div>
          </div>
          <div className="relative row-start-2 w-fit sm:w-full h-full place-self-center">
            <div className="relative grid grid-flow-row auto-rows-auto w-fit h-fit">
              <div className="relative grid grid-flow-col auto-cols-auto w-fit h-fit row-start-1 pl-3 pt-2 col-start-1">
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
                <div className="relative col-start-2 w-full h-fit">plugin</div>
              </div>
              <div className="relative grid grid-flow-col auto-cols-auto w-fit h-fit row-start-2 col-start-1 pl-3 pt-2">
                <div
                  className={`relative col-start-1 w-fit h-fit pr-3 ${
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
                <div className="relative col-start-2 w-full h-fit">synth</div>
              </div>
              <div className="relative grid grid-flow-col auto-cols-auto w-fit h-fit col-start-1 row-start-3 pl-5 sm:pl-3 pt-2">
                <div
                  className={`relative col-start-1 w-fit h-fit pr-3 ${
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
                  segmentation
                </div>
              </div>
              <div className="relative grid grid-flow-col auto-cols-auto w-fit h-fit col-start-1 row-start-4 pl-5 sm:pl-3 pt-2">
                <div
                  className={`relative col-start-1 w-fit h-fit pr-3 ${
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
                  open datasets
                </div>
              </div>
              <div className="relative grid col-start-1 row-start-5 grid-flow-col auto-cols-auto w-fit h-fit pl-3 pt-2">
                <div
                  className={`relative col-start-1 w-fit h-fit pr-3 ${
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
                  zero waste
                </div>
              </div>
              <div className="relative grid col-start-1 row-start-6 grid-flow-col auto-cols-auto w-fit h-fit pl-5 sm:pl-3 pt-2">
                <div
                  className={`relative col-start-1 w-fit h-fit pr-3 ${
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
                <div className="relative col-start-2 w-full h-fit">packing</div>
              </div>
              <div className="relative grid col-start-1 row-start-7 grid-flow-col auto-cols-auto w-fit h-fit pl-3 pt-2">
                <div
                  className={`relative col-start-1 w-fit h-fit pr-3 ${
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
                  3d design
                </div>
              </div>
              <div className="relative grid col-start-1 row-start-8 grid-flow-col auto-cols-auto w-fit h-fit pl-3 pt-2">
                <div
                  className={`relative col-start-1 w-fit h-fit pr-3 ${
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
                  restitch
                </div>
              </div>
              <div className="relative grid col-start-1 row-start-9 grid-flow-col auto-cols-auto w-fit h-fit pl-3 pt-2">
                <div
                  className={`relative col-start-1 w-fit h-fit pr-3 ${
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
                  rematerialize
                </div>
              </div>
              <div className="relative grid col-start-1 row-start-10 grid-flow-col auto-cols-auto w-fit h-fit pl-3 pt-2">
                <div
                  className={`relative col-start-1 w-fit h-fit pr-3 ${
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
                <div className="relative col-start-2 w-full h-fit">mint</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directory;
