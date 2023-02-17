import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, useState } from "react";
import { Library, LibrarySmallProps } from "../../../types/general.types";
import library from "./../../../pages/api/library.json";
import useLibrary from "./hooks/useLibrary";

const LibraryLarge: FunctionComponent<LibrarySmallProps> = ({
  setRefactorModal,
}): JSX.Element => {
  const { showImage, setShowImage, setLink, link, lastBook, handleLastBook } =
    useLibrary();
  const [blur, setBlur] = useState<boolean>(true);
  return (
    <div className="relative grid grid-flow-col auto-cols-auto w-full h-full">
      <div className="relative col-start-1 row-start-1 w-80 h-full">
        <div
          className={`relative border-t-2 border-offBlack w-full h-full xl:border-b-[1.18vw] border-b-[1.55vw] bg-offBlack ${
            blur && "blur-sm animate-unblur"
          }`}
        >
          {/* <div className="w-80 h-full object-cover relative">
            <img src={showImage} className="relative w-full h-full object-cover" />
          </div> */}

          <Image layout="fill" objectFit="cover" src={showImage} />
          <div className="relative w-full h-full grid grid-flow-col auto-cols-auto pr-4 pb-2">
            {link !== "" ? (
              <Link href={link}>
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  className={`relative w-fit h-fit place-self-end cursor-sewingHS hover:scale-95 ${
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
                className={`relative w-fit h-fit place-self-end cursor-sewingHS hover:scale-95 ${
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
      </div>
      <div className="relative w-full h-full overflow-x-scroll overflow-y-hidden flex" id="library">
        {library.map((book: Library, index: number) => {
          return (
            <div
              key={index}
              className={`border-2 border-offBlack relative col-start-${(
                Number(book.number) + 1
              ).toString()} row-start-1 w-fit xl:h-[33vw] lg:h-[47vw] px-2 pb-2 pt-3 hover:scale-105 active:scale-95 cursor-sewingHS`}
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
                <div className="relative row-start-3 self-end relative text-[1.3vw] whitespace-nowrap font-lib place-self-center h-full w-10 rotate-90">
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
      <div
        className={`relative col-start-${
          library.length + 1
        } row-start-1 w-full h-full bg-offBlack`}
      >
        <div className="relative grid auto-cols-auto grid-flow-col w-full h-full pt-12 pb-12 pr-12 pl-12">
          <div
            className={`relative w-6 h-[16vw] col-start-1 place-self-center ${
              blur && "blur-sm animate-unblur"
            }`}
          >
            <Image
              src="/images/library/Numbers.png"
              layout="fill"
              priority
              onLoadingComplete={() => setBlur(false)}
              blurDataURL={`/images/blurred/numbers.png`}
            />
          </div>
          <div className="relative w-fit h-full col-start-2 place-self-center pl-4">
            <div className="relative h-full w-6 grid grid-flow-col auto-cols-auto col-start-1 md:row-start-1 lg:pr-1">
              <div className="relative col-start-1 w-full h-full border-t-2 border-b-2 border-r border-midWhite"></div>
              <div className="relative col-start-2 w-full h-full border-t-2 border-b-2 border-l border-midWhite"></div>
            </div>
          </div>
          <div
            className={`relative w-10 h-10 col-start-3 place-self-center hover:opacity-90 active:mix-blend-hard-light cursor-sewingHS ${
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
  );
};

export default LibraryLarge;
