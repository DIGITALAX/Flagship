import Image from "next/legacy/image";
import { FunctionComponent, JSX, useContext } from "react";
import { INFURA_GATEWAY_INTERNAL } from "../../../lib/constants";
import { usePathname } from "next/navigation";
import useLibrary from "../hooks/useLibrary";
import { ModalContext } from "@/app/providers";
import library from "./../../../../../public/library.json";
import { Library } from "../types/library.types";

const Shelf: FunctionComponent = (): JSX.Element => {
  const path = usePathname();
  const context = useContext(ModalContext);
  const { handleLastBook, currentBook, setCurrentBook, lastBook } =
    useLibrary();
  return (
    <div className="relative flex items-center justify-start flex-col  md:flex-row w-full h-[70rem] md:h-[40rem]">
      <div
        className={`relative flex items-center justify-center border-offBlack h-full w-full md:w-[40rem] bg-offBlack border-2`}
      >
        <Image
          layout="fill"
          objectFit="cover"
          src={`${INFURA_GATEWAY_INTERNAL}${currentBook?.image}`}
          draggable={false}
          key={currentBook?.image}
        />
        <div className="absolute bottom-2 right-2 w-fit h-fit flex items-center justify-center">
          <div
            onClick={() =>
              currentBook?.link !== ""
                ? window.open(currentBook?.link)
                : context?.setBookMessage({
                    open: true,
                    transparent:
                      currentBook?.image ===
                      "QmPaQy4y1PCxhsvewbP2BdRmbWhwupZvqDQkCqNVdm6sCg",
                  })
            }
            className={`relative w-7 h-5 flex items-center justify-center cursor-sewingHS hover:scale-95`}
          >
            <Image
              src={`${INFURA_GATEWAY_INTERNAL}QmbDMPggX1dz6VC4c8hNNT4td62ArBaCiDCG2mewNqFZN2`}
              layout="fill"
              priority
              draggable={false}
            />
          </div>
        </div>
      </div>
      <div
        className="relative w-full items-center justify-between inline-flex h-full grow overflow-x-scroll overflow-y-hidden"
        id="library"
      >
        {library.map((book: Library, index: number) => {
          return (
            <div
              key={index}
              className={`border-2 border-offBlack relative flex items-center justify-start gap-4 flex-col h-full w-full px-2 pb-2 pt-3 hover:scale-105 active:scale-95 cursor-sewingHS`}
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
                    src={`${INFURA_GATEWAY_INTERNAL}QmWjDJUU55GTA1oLzKLWKwJW8REbZ7m39kr2Pc38HgiZ5t`}
                    layout="fill"
                    className="opacity-50"
                    priority
                    draggable={false}
                  />
                  <div className="relative w-fit h-fit flex items-center justify-center">
                    {Number(book.number) < 10 ? `0${book.number}` : book.number}
                  </div>
                </div>
              </div>
              <div className="relative w-full h-fit flex items-center justify-center">
                <div
                  id="foot3"
                  className="h-1.5 border border-offBlack w-full flex items-center justify-center relative"
                ></div>
              </div>
              <div className="absolute w-fit flex items-start justify-center top-1/2 text-lg font-lib h-12 rotate-90 border-2 border-offBlack py-2 px-3 bg-offWhite text-offBlack whitespace-nowrap">
                {
                  book.name[
                    (path.match(/(?<=\/)(en|es)(?=\/)/)?.[0] as "en" | "es") ??
                      "en"
                  ]
                }
              </div>
            </div>
          );
        })}
      </div>
      <div
        className={`relative w-full md:w-60 h-fit md:h-full flex items-center justify-center gap-2 bg-offBlack flex-col md:flex-row gap-2 p-3`}
      >
        <div
          className={`relative md:rotate-0 rotate-90 w-6 h-40 items-center justify-center flex`}
        >
          <Image
            src={`${INFURA_GATEWAY_INTERNAL}QmdqGRG1tr9mPSCWNUGPiHq1pGpLkhgyFg8o6SN9LKrd8o`}
            layout="fill"
            priority
            objectFit="contain"
            className="relative flex w-full h-full"
            draggable={false}
          />
        </div>
        <div className="relative w-full h-full flex flex-row md:flex-col items-center">
          <div className="relative w-px md:w-6 h-6 md:h-px bg-white"></div>
          <div className="relative h-px md:h-full w-full md:w-px bg-white justify-self-center"></div>
          <div className="relative w-px md:w-6 h-6 md:h-px bg-white"></div>
        </div>
        <div
          className={`relative w-10 h-10 flex items-center justify-center hover:opacity-90 active:mix-blend-hard-light cursor-sewingHS`}
          onClick={() => handleLastBook()}
        >
          <Image
            src={`${INFURA_GATEWAY_INTERNAL}QmP2nsKxT7rvPxdkhCfsTPWuDvLGCDmb2KMhUJ2pYqftPQ`}
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
