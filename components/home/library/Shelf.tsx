import Image from "next/legacy/image";
import { FunctionComponent, useState } from "react";
import { ShelfProps, Library } from "../../../types/general.types";
import library from "./../../../pages/api/library.json";
import useLibrary from "./hooks/useLibrary";
import { INFURA_GATEWAY } from "../../../lib/lens/constants";

const Shelf: FunctionComponent<ShelfProps> = ({
  setRefactorModal,
}): JSX.Element => {
  const { showImage, setShowImage, setLink, link, lastBook, handleLastBook } =
    useLibrary();
  const [blur, setBlur] = useState<boolean>(true);
  return (
    <div className="relative grid grid-flow-row auto-rows-auto lg:grid-flow-col lg:auto-cols-auto w-full h-fit">
      <div
        className={`relative border-t-2 border-offBlack h-[80vw] sm:h-[40vw] w-full lg:w-[40vw] lg:h-full xl:border-b-[1.18vw] border-b-[1.55vw] bg-offBlack ${
          blur && "blur-sm animate-unblur"
        }`}
      >
        <Image
          layout="fill"
          objectFit="cover"
          src={`${INFURA_GATEWAY}/ipfs/${showImage}`}
        />
        <div className="relative w-full h-full grid grid-flow-col auto-cols-auto pr-4 pb-2">
          {link !== "" ? (
            <a
              target={"_blank"}
              href={link}
              rel="noreferrer"
              className={`relative w-fit h-fit place-self-end cursor-sewingHS hover:scale-95 ${
                blur && "blur-sm animate-unblur"
              }`}
            >
              <Image
                src={`${INFURA_GATEWAY}/ipfs/QmbDMPggX1dz6VC4c8hNNT4td62ArBaCiDCG2mewNqFZN2`}
                height={15}
                width={25}
                priority
                onLoadingComplete={() => setBlur(false)}
                draggable={false}
              />
            </a>
          ) : (
            <div
              onClick={() => setRefactorModal(true)}
              className={`relative w-fit h-fit place-self-end cursor-sewingHS hover:scale-95 ${
                blur && "blur-sm animate-unblur"
              }`}
            >
              <Image
                src={`${INFURA_GATEWAY}/ipfs/QmbDMPggX1dz6VC4c8hNNT4td62ArBaCiDCG2mewNqFZN2`}
                height={15}
                width={25}
                priority
                onLoadingComplete={() => setBlur(false)}
                draggable={false}
              />
            </div>
          )}
        </div>
      </div>
      <div
        className="relative w-full h-full flex flex-row overflow-x-scroll overflow-y-clip"
        id="library"
      >
        {library.map((book: Library, index: number) => {
          return (
            <div
              key={index}
              className={`border-2 border-offBlack relative col-start-${(
                Number(book.number) + 1
              ).toString()} row-start-1 w-fit h-[30rem] wide:h-[50rem] px-2 pb-2 pt-3 hover:scale-105 active:scale-95 cursor-sewingHS`}
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
                      src={`${INFURA_GATEWAY}/ipfs/QmWjDJUU55GTA1oLzKLWKwJW8REbZ7m39kr2Pc38HgiZ5t`}
                      layout="fill"
                      className="opacity-50"
                      priority
                      onLoadingComplete={() => setBlur(false)}
                      draggable={false}
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
                <div className="relative row-start-3 self-end relative text-[4vw] sm:text-[1.3vw] whitespace-nowrap font-lib place-self-center h-full w-10 rotate-90">
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
        className={`relative w-full lg:w-fit h-[40vw] sm:h-[20vw] lg:h-full bg-offBlack p-2 sm:p-12 flex flex-row lg:gap-0 gap-6`}
      >
        <div
          className={`relative w-6 h-full lg:h-1/2 place-self-center ${
            blur && "blur-sm animate-unblur"
          }`}
        >
          <Image
            src={`${INFURA_GATEWAY}/ipfs/QmdqGRG1tr9mPSCWNUGPiHq1pGpLkhgyFg8o6SN9LKrd8o`}
            layout="fill"
            priority
            onLoadingComplete={() => setBlur(false)}
            objectFit="contain"
            className="relative w-full h-full"
            draggable={false}
          />
        </div>
        <div className="relative w-full h-full flex flex-row lg:flex-col items-center">
          <div className="relative lg:w-6 w-px lg:h-px h-6 bg-white"></div>
          <div className="relative h-px lg:h-full w-full lg:w-px bg-white justify-self-center"></div>
          <div className="relative lg:w-6 w-px lg:h-px h-6 bg-white"></div>
        </div>
        <div
          className={`relative w-10 h-10 col-start-3 place-self-center hover:opacity-90 active:mix-blend-hard-light cursor-sewingHS ${
            blur && "blur-sm animate-unblur"
          }`}
          onClick={() => handleLastBook()}
        >
          <Image
            src={`${INFURA_GATEWAY}/ipfs/QmP2nsKxT7rvPxdkhCfsTPWuDvLGCDmb2KMhUJ2pYqftPQ`}
            layout="fill"
            priority
            onLoadingComplete={() => setBlur(false)}
            objectFit="contain"
            className="relative w-fit h-fit"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Shelf;
