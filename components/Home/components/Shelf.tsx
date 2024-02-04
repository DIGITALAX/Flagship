import Image from "next/legacy/image";
import { FunctionComponent } from "react";
import library from "../../../pages/api/library.json";
import { INFURA_GATEWAY } from "../../../lib/constants";
import { Library, ShelfProps } from "../types/home.types";
import { setRefactor } from "@/redux/reducers/refactorSlice";

const Shelf: FunctionComponent<ShelfProps> = ({
  currentBook,
  setCurrentBook,
  lastBook,
  dispatch,
}): JSX.Element => {
  return (
    <div className="relative flex items-center justify-start flex-row w-full h-[30rem] wide:h-[50rem]">
      <div
        className={`relative flex items-center justify-center border-offBlack h-full w-[40rem] bg-offBlack border-2`}
      >
        <Image
          layout="fill"
          objectFit="cover"
          src={`${INFURA_GATEWAY}/ipfs/${currentBook?.image}`}
          draggable={false}
        />
        <div className="absolute bottom-2 right-2 w-fit h-fit flex items-center justify-center">
          <div
            onClick={() =>
              currentBook?.link !== ""
                ? window.open(currentBook?.link)
                : dispatch(
                    setRefactor({
                      actionOpen: true,
                      actionTransparency:
                        currentBook?.image ===
                        "QmPaQy4y1PCxhsvewbP2BdRmbWhwupZvqDQkCqNVdm6sCg",
                    })
                  )
            }
            className={`relative w-7 h-5 flex items-center justify-center cursor-sewingHS hover:scale-95`}
          >
            <Image
              src={`${INFURA_GATEWAY}/ipfs/QmbDMPggX1dz6VC4c8hNNT4td62ArBaCiDCG2mewNqFZN2`}
              layout="fill"
              priority
              draggable={false}
            />
          </div>
        </div>
      </div>
      <div
        className="relative w-full h-full flex items-center justify-start overflow-x-scroll overflow-y-hidden"
        id="library"
      >
        <div className="relative w-fit flex items-center justify-start flex-row h-full">
          {library.map((book: Library, index: number) => {
            return (
              <div
                key={index}
                className={`border-2 border-offBlack relative flex items-center justify-start gap-4 flex-col h-full w-24 px-2 pb-2 pt-3 hover:scale-105 active:scale-95 cursor-sewingHS`}
                id={book.id}
                onClick={() =>
                  setCurrentBook({
                    image: book.image,
                    link: book.link,
                  })
                }
                ref={lastBook}
              >
                <div
                  id={book.id}
                  className={`relative w-14 h-14 flex items-center justify-center rounded-full border-2 border-offBlack text-center font-lib`}
                >
                  <div
                    className={`relative w-full h-full justify-center flex items-center text-2xl text-offWhite`}
                    id="circle"
                  >
                    <Image
                      src={`${INFURA_GATEWAY}/ipfs/QmWjDJUU55GTA1oLzKLWKwJW8REbZ7m39kr2Pc38HgiZ5t`}
                      layout="fill"
                      className="opacity-50"
                      priority
                      draggable={false}
                    />
                    <div className="relative w-fit h-fit flex items-center justify-center">
                      {Number(book.number) < 10
                        ? `0${book.number}`
                        : book.number}
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-fit flex items-center justify-center">
                  <div
                    id="foot3"
                    className="h-1.5 border border-offBlack w-full flex items-center justify-center relative"
                  ></div>
                </div>
                <div className="relative w-full h-full flex items-start justify-center">
                  <div className="relative w-fit h-fit flex items-start justify-center top-32">
                    <div className="relative text-[4vw] sm:text-[1.3vw] whitespace-nowrap font-lib flex items-center justify-center w-fit h-10 rotate-90 border-2 border-offBlack p-2 bg-offWhite text-offBlack">
                      {book.name}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`relative w-fit h-full flex items-center justify-center gap-2 bg-offBlack flex-row gap-2 p-3`}
      >
        <div
          className={`relative w-6 h-full lg:h-1/2 items-center justify-center flex`}
        >
          <Image
            src={`${INFURA_GATEWAY}/ipfs/QmdqGRG1tr9mPSCWNUGPiHq1pGpLkhgyFg8o6SN9LKrd8o`}
            layout="fill"
            priority
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
          className={`relative w-10 h-10 flex items-center justify-center hover:opacity-90 active:mix-blend-hard-light cursor-sewingHS`}
        >
          <Image
            src={`${INFURA_GATEWAY}/ipfs/QmP2nsKxT7rvPxdkhCfsTPWuDvLGCDmb2KMhUJ2pYqftPQ`}
            layout="fill"
            objectFit="contain"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Shelf;
