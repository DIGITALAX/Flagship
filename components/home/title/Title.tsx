import Image from "next/legacy/image";
import { FunctionComponent } from "react";
import { INFURA_GATEWAY } from "../../../lib/lens/constants";

const Title: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative w-full h-fit flex flex-col items-center justify-center pt-6">
      <div className="relative w-full h-fit gap-3 inline-flex items-center justify-center flex-wrap">
        <div
          className="relative h-8 w-8 md:h-12 md:w-12 rounded-full border-mainText border sm:border-2 bg-mainText cursor-sewingHS"
          id="buttons"
          title="the dial"
        >
          <a
            target="_blank"
            rel="noreferrer"
            href={"https://www.thedial.xyz"}
            className="cursor-sewingHS"
          >
            <Image
              src={`${INFURA_GATEWAY}/ipfs/QmbF9Lt5KQ3m9xxnqSRD2nmcr5mgtf1V2ruRYcrMnrFpni`}
              layout="fill"
              className={"w-full h-full rounded-full"}
              draggable={false}
              objectFit="cover"
            />
          </a>
        </div>
        <div
          className="relative h-8 w-8 md:h-12 md:w-12 rounded-full border-mainText border sm:border-2 bg-mainText cursor-sewingHS"
          id="buttons"
          title="chromadin"
        >
          <a
            target="_blank"
            rel="noreferrer"
            href={"https://www.chromadin.xyz"}
            className="cursor-sewingHS"
          >
            <Image
              src={`${INFURA_GATEWAY}/ipfs/QmXM6QSYCbMJ5eXJHuGqMTbCTkaDqth5c4NswX2nWTpenB`}
              layout="fill"
              className={"w-full h-full rounded-full"}
              draggable={false}
              objectFit="cover"
            />
          </a>
        </div>
        <div
          className="relative h-8 w-8 md:h-12 md:w-12 rounded-full border-mainText border sm:border-2 bg-mainText cursor-sewingHS"
          id="buttons"
          title="coin op"
        >
          <a
            target="_blank"
            rel="noreferrer"
            href={"https://coinop.themanufactory.xyz"}
            className="cursor-sewingHS"
          >
            <Image
              src={`${INFURA_GATEWAY}/ipfs/QmRXrv2icSyRi5P7VEx9yWh66VQB9UiiYPSt2NDkuGAcB9`}
              layout="fill"
              className={"w-full h-full rounded-full"}
              draggable={false}
              objectFit="cover"
            />
          </a>
        </div>
        <div
          className="relative h-8 w-8 md:h-12 md:w-12 rounded-full border-mainText border sm:border-2 bg-mainText cursor-sewingHS"
          id="buttons"
          title="the manufactory"
        >
          <a
            target="_blank"
            rel="noreferrer"
            href={"https://www.themanufactory.xyz"}
            className="cursor-sewingHS"
          >
            <Image
              src={`${INFURA_GATEWAY}/ipfs/QmRpVNoo4LdwBrByfmUNpoB7nPrJrLUPdUeeeatqc4CDk7`}
              layout="fill"
              className={"w-full h-full rounded-full"}
              draggable={false}
              objectFit="cover"
            />
          </a>
        </div>
        <div
          className="relative h-8 w-8 md:h-12 md:w-12 rounded-full border-mainText border sm:border-2 bg-mainText cursor-sewingHS"
          id="buttons"
          title="lit listener"
        >
          <a
            target="_blank"
            rel="noreferrer"
            href={"https://listener.irrevocable.dev"}
            className="cursor-sewingHS"
          >
            <Image
              src={`${INFURA_GATEWAY}/ipfs/QmcY6zRcfQyr7pahRVaSwzT3J7ibiDNYwWUFkg9aFA4tE2`}
              layout="fill"
              className={"w-full h-full rounded-full"}
              draggable={false}
              objectFit="cover"
            />
          </a>
        </div>
        {/* <div className="relative h-10 w-10 rounded-full border-mainText bg-mainText"></div> */}
      </div>
      <div className="font-mag text-mainText w-full flex h-fit text-[16vw] relative items-center justify-center ">
        <div className="place-self-center relative">DIGITALAX</div>
      </div>
    </div>
  );
};

export default Title;
