import Image from "next/legacy/image";
import { FunctionComponent, useState } from "react";
import { INFURA_GATEWAY } from "../../../lib/lens/constants";

const Static: FunctionComponent = (): JSX.Element => {
  const [blur, setBlur] = useState<boolean>(true);
  return (
    <div className="w-full relative flex flex-col h-full place-items-center py-12 px-2 sm:px-12 text-xs md:text-base">
      <div className="row-start-1 w-full h-fit font-lib text-mainText relative">
        <div className="w-full h-fit grid grid-flow-col auto-cols-auto relative">
          <div className="col-start-1 w-full h-fit relative text-left">212</div>
          <div className="col-start-2 w-full h-fit relative text-right">
            917 646
          </div>
        </div>
      </div>
      <div className="w-full h-full row-start-2 relative place-self-center">
        <div
          className={`relative flex border-8 w-full h-[57vw] pb-2 rounded-xl border-offBlack ${
            blur && "blur-sm animate-unblur"
          }`}
        >
          <Image
            src={`${INFURA_GATEWAY}/ipfs/Qme1kXGZZWYQQVWRXYarxdHn97PwKorxyyXm8g237Fav8u`}
            layout="fill"
            className="w-full rounded-sm"
            priority
            onLoadingComplete={() => setBlur(false)}
            draggable={false}
          />
          <div className="relative w-full h-full grid grid-flow-col auto-cols-auto">
            <video
              autoPlay
              muted
              loop
              className="relative max-w-none border-gray-900 border-8 w-[14vw] h-[18vw] object-cover flex place-self-center bg-offBlack"
            >
              <source src="/videos/static.mp4" type="video/mp4"></source>
            </video>
          </div>
        </div>
      </div>
      <div className="row-start-3 w-full h-fit text-center font-lib text-mainText flex items-center justify-center relative pt-20 text-lg font-libB 2xl:text-[1.8vw]">
        <div
          className="relative w-fit h-fit flex items-center justify-center cursor-sewingHS"
          onClick={() => window.open("https://www.themanufactory.xyz/")}
        >
          x005.m-3 – MICROFACTORY LOCAL CO•OP
        </div>
      </div>
      <div className="relative flex flex-col w-full h-fit items-center justify-center text-mainText pt-10 text-center gap-2">
        <div className="relative px-1.5 sm:px-0 w-full sm:w-1/2 h-fit flex items-center justify-center bg-mainBg text-xs sm:text-sm md:text-base">
          <div
            className="relative h-full flex flex-row py-4 px-2 gap-10 overflow-x-scroll items-center justify-start"
            id="scrollMicro"
          >
            {[
              ["QmRvJQiQaeExbGds6SZDcv2Tz7sVF71NW3UKMuDTzYb3QJ", "f3manifesto"],
              [
                "Qmd1oiVbG21L3mx4ZWBmPmv9RK7RTrUvW4nX81fCphZ8w6",
                "futurememory",
              ],
              ["QmPVLYbYJyQotkd8dZTWYcLh8yy8kdbdTptU3DWe4MmKdK", "hiro"],
              [
                "QmQkdx8SmRoyJGah6xUTWt7MX45kCNjXG3UbmtBNmDgbq9",
                "synthetic futures",
              ],
              ["QmbG7GpD3Z7G5Jb4bUBP6z1bNWtXFX7MKSCxipd88hdF5E", "put2"],
              ["QmV7wtTuWsdvJEdL43Tvqv1LMPzvEjtvEAFsU64Qgbaod2", "stryke"],
              ["QmfEU1pC8VEpHS6on69r189JaRC4TVrC1YBzV4JETk8QvH", "0xqbit"],
              ["QmbCVtS9ckd6pz8oAx6tRTsNjWEA9v3DKD6Y5zuaMSUC4u", "verbandden"],
              ["QmNU6dKghcYNTUNbc4kYTG5BQgEFm58JNt5Ch7GP2aRxgs", "dos2048"],
              ["QmZ5Xnu4Y8vo2yr3R67ouf2ZYK7NrQCiiQFt6MEnri94PF", "w111th"],
              ["QmafTkiaae4nujF6sGbzLJYscGv6ZbRyFmYHv3NV6ukMSM", "yawp11"],
              ["QmQuKdSrUf2fPX6u8H3FSfADzQ1n9VbwkrVZ7ZpuTzm5jy", "skecz98"],
              ["QmQHdxXYev989zkK1Wtem245XusViRKZELzZR7bGpRU8iH", "re_de"],
              ["QmZEbmji9qNHUCVeGgMqXDWLpQXC68hm8WmyWr4or5CNa3", "e2evhs"],
            ].map((image: string[], index: number) => {
              return (
                <a
                  className="flex-shrink-0 relative w-20 h-20 md:h-28 md:w-28 2xl:w-32 2xl:h-32 cursor-sewingHS"
                  draggable={false}
                  key={index}
                  target="_blank"
                  rel="noreferrer"
                  href={`https://cypher.digitalax.xyz/item/microbrand/${image[1]}`}
                >
                  <div className="relative w-full h-full flex flex-col items-center justify-center">
                    <Image
                      layout="fill"
                      objectFit="contain"
                      src={`${INFURA_GATEWAY}/ipfs/${image[0]}`}
                      draggable={false}
                    />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
        <div className="relative flex flex-col gap-2 items-center justify-center w-full h-fit">
          <div className="relative px-1.5 sm:px-0 w-full sm:w-1/2 h-fit flex items-center justify-center font-gisL">
            In a world where authenticity is currency, each microbrand is a
            sovereign mint of cultural capital. Web3 commerce isn't built by
            monopolistic conglomerates, but assembled, piece by piece, by the
            microbrands that understand the intricate dance of AI, NFTs, and
            social resonance.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Static;
