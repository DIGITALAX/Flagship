import { REPORTS } from "@/app/lib/constants";
import { ModalContext } from "@/app/providers";
import React, { FunctionComponent, JSX, useContext } from "react";
import { RiEyeCloseFill } from "react-icons/ri";

const BookMessage: FunctionComponent<{ dict: any }> = ({
  dict,
}): JSX.Element | null => {
  const context = useContext(ModalContext);
  return (
    <div className="fixed inset-0 bg-offBlack bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-10">
      <div className="relative bg-offBlack p-4 rounded w-96 h-96 z-30">
        <div className="relative w-full h-full grid grid-flow-row auto-rows-auto">
          <div className="relative w-fit h-fit row-start-1 place-self-center">
            <RiEyeCloseFill
              color="#FAF4E8"
              size={40}
              className="relative cursor-sewingHS hover:scale-95"
              onClick={() =>
                context?.setBookMessage({
                  open: false,
                  transparent: false,
                })
              }
            />
          </div>
          {context?.bookMessage?.transparent ? (
            <div className="relative w-full h-full flex max-h-[20rem] overflow-y-scroll flex justify-center">
              <div className="relative w-full h-fit items-center justify-start flex flex-col gap-2">
                {REPORTS?.map(
                  (
                    item: {
                      title: string;
                      link: string;
                    },
                    index
                  ) => {
                    return (
                      <div
                        key={index}
                        className="relative w-fit h-fit flex items-center justify-center cursor-sewingHS px-2 py-1 text-midWhite border border-midWhite"
                        onClick={() => window.open(item.link)}
                      >
                        <div className="relative w-fit h-fit text-xs flex items-center justify-center">
                          {item?.title}
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          ) : (
            <div className="font-aud text-center text-xl relative row-start-2 w-full h-fit text-midWhite">
              {dict?.common?.refresh}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookMessage;
