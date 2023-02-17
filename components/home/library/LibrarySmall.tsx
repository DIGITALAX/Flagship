import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, useState } from "react";
import { Library, LibraryLargeProps } from "../../../types/general.types";
import library from "./../../../pages/api/library.json";
import useLibrary from "./hooks/useLibrary";

const LibrarySmall: FunctionComponent<LibraryLargeProps> = ({
  setRefactorModal,
}): JSX.Element => {
  const [blur, setBlur] = useState<boolean>(true);
  const { showImage, setShowImage, setLink, link, lastBook, handleLastBook } =
    useLibrary();
  return (
    <div className="relative grid w-full h-fit grid-flow-row auto-rows-auto">
      <div className="row-start-1 relative grid grid-flow-col auto-cols-auto w-full sm:min-h-[80vw] min-h-[120vw] md:min-h-[60vw]">
        <div className="relative w-full h-full overflow-x-scroll overflow-y-hidden flex" id="library">
          {library.map((book: Library, index: number) => {
            return (
              <div
                key={index}
                className={`border-2 border-offBlack relative col-start-${Number(
                  book.number
                ).toString()} row-start-1 w-fit h-full pb-2 px-2 pt-3 hover:scale-105 active:scale-95 cursor-sewingHS`}
                id={book.id}
                onClick={() => {
                  setShowImage(book.image);
                  setLink(book.link);
                }}
                ref={lastBook}
              >
                <div className="grid grid-flow-row auto-rows-auto relative w-full h-fit gap-3 p-4">
                  <div
                    id={book.id}
                    className={`relative row-start-1 w-14 h-14 place-self-center rounded-full border-2 border-offBlack text-center font-lib self-start`}
                  >
                    <div
                      className={`relative w-full h-full justify-center flex content-center text-2xl text-offWhite ${
                        blur && "blur-sm animate-unblur"
                      }`}
                      id="circle"
                    >
                      <Image
                        src={"/images/library/rounded.png"}
                        layout="fill"
                        className="opacity-50"
                        priority
                        onLoadingComplete={() => setBlur(false)}
                        blurDataURL={`/images/blurred/rounded.png`}
                      />
                      <div className="relative w-full h-full grid grid-flow-col auto-cols-auto">
                        <div className="relative col-start-1 w-fit h-fit place-self-center">
                          {Number(book.number) < 10
                            ? `0${book.number}`
                            : book.number}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative row-start-2 w-full pb-8 h-fit self-start">
                    <div
                      id="foot3"
                      className="h-1.5 border border-offBlack w-full"
                    ></div>
                  </div>
                  <div className="relative row-start-3 self-end relative text-[3vw] sm:text-[2vw] md:text-[1.7vw] lg:text-[1.3vw] whitespace-nowrap font-lib place-self-center h-full w-10 rotate-90">
                    <div className="relative grid grid-flow-row auto-rows-auto">
                      <div className="border-2 border-offBlack relative h-full w-fit p-2 text-offBlack row-start-1 place-self-center self-center justify-self-center z-10 bg-offWhite">
                        {book.name}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="row-start-2 w-full h-full relative relative grid-flow-col auto-cols-auto grid">
        <div className="relative col-start-1 row-start-1 sm:min-w-[40vw] w-full h-[50vw]">
          <Image
            layout="fill"
            objectFit="cover"
            src={showImage}
            className={`bg-offBlack ${blur && "blur-sm animate-unblur"}`}
          />
          <div className="relative grid w-full h-full grid-flow-col auto-cols-auto pr-4 pb-2">
            {link !== "" ? (
              <Link href={link}>
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  className={`relative w-fit h-fit place-self-end cursor-sewingHS hover:scale-95 active:scale-95 ${
                    blur && "blur-sm animate-unblur"
                  }`}
                >
                  <Image
                    src={"/images/eye.png"}
                    height={15}
                    width={25}
                    priority
                    onLoadingComplete={() => setBlur(false)}
                    blurDataURL={`/images/blurred/eye.png`}
                  />
                </a>
              </Link>
            ) : (
              <div
                onClick={() => setRefactorModal(true)}
                className={`relative w-fit h-fit place-self-end cursor-sewingHS hover:scale-95 active:scale-95 ${
                  blur && "blur-sm animate-unblur"
                }`}
              >
                <Image
                  src={"/images/eye.png"}
                  height={15}
                  width={25}
                  priority
                  onLoadingComplete={() => setBlur(false)}
                  blurDataURL={`/images/blurred/eye.png`}
                />
              </div>
            )}
          </div>
        </div>
        <div className="relative col-start-2 row-start-1 w-full h-full bg-offBlack self-end">
          <div className="relative grid auto-rows-auto grid-flow-row w-full h-full">
            <div className="relative w-fit h-fit col-start-1 row-start-1 place-self-center font-lib text-midWhite text-[2vw] p-3 text-center">
              116 104 101 32 101 99 111 <br />
              115 121 115 116 101 109
            </div>
            <div className="relative w-fit h-full col-start-1 row-start-2 place-self-center pb-0 sm:pb-4 p-0 sm:p-1 md:p-4">
              <div className="relative h-6 w-52 grid grid-flow-row auto-rows-auto col-start-1 md:row-start-1">
                <div className="relative row-start-1 w-full h-full border-r-2 border-l-2 border-b border-midWhite"></div>
                <div className="relative row-start-2 w-full h-full border-l-2 border-r-2 border-t border-midWhite"></div>
              </div>
            </div>
            <div
              className={`relative w-8 h-8 sm:pb-0 sm:w-14 sm:h-14 col-start-1 row-start-3 place-self-center self-start hover:opacity-90 active:mix-blend-hard-light cursor-sewingHS ${
                blur && "blur-sm animate-unblur"
              }`}
              onClick={() => handleLastBook()}
            >
              <Image
                src="/images/library/player.png"
                layout="fill"
                priority
                onLoadingComplete={() => setBlur(false)}
                blurDataURL={`/images/blurred/player.png`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibrarySmall;
