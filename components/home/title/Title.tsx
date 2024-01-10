import Image from "next/legacy/image";
import { FunctionComponent } from "react";
import { INFURA_GATEWAY } from "../../../lib/lens/constants";
import Link from "next/link";

const Title: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative w-full h-fit flex flex-col items-center justify-center pt-6">
      <div className="relative sm:pt-auto pt-8 md:absolute w-fit h-fit flex-col sm:flex-row gap-2 flex items-center justify-start md:left-0 z-10 -top-1 md:-top-7 midi:-top-4 sm:mr-auto sm:pl-7 lg:pl-10 sm:text-left text-center">
        <div className="relative w-32 xl:w-40 break-words h-fit flex items-center justify-center text-xxs lg:text-xs font-gisL text-mainText">
          Unbundling fashion is a challenge.
          <br />
          <br />
          Find your way through the maze starting here.
        </div>
        <Link
          className="relative sm:-right-1 lg:right-3 xl:right-0 bottom-0 sm:bottom-6 w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center cursor-sewingHS active:scale-95"
          href={`https://cypher.digitalax.xyz`}
        >
          <Image
            src={`${INFURA_GATEWAY}/ipfs/QmYbjMNQAVuQSWNNQ5AKbQtt4Dxw2ax4SvLNwKhCNDniL2`}
            layout="fill"
            draggable={false}
            priority
          />
        </Link>
      </div>
      <div className="font-mag text-mainText w-full flex h-fit text-[16vw] relative items-center justify-center ">
        <div className="place-self-center relative">DIGITALAX</div>
      </div>
      <div className="relative w-full h-fit gap-3 inline-flex items-center justify-center sm:justify-end flex-wrap px-2">
        <div
          className="relative h-8 w-8 md:h-12 md:w-12 rounded-full border-mainText border sm:border-2 bg-mainText cursor-sewingHS"
          id="buttons"
          title="Kinora"
        >
          <a
            target="_blank"
            rel="noreferrer"
            href={"https://kinora.irrevocable.dev"}
            className="cursor-sewingHS"
          >
            <Image
              src={`${INFURA_GATEWAY}/ipfs/QmQk9TqFivUqc6ktosoZVVih9o1uiY3r5Z7F3GCC1FpaJS`}
              layout="fill"
              className={"w-full h-full rounded-full"}
              draggable={false}
              objectFit="cover"
              priority
            />
          </a>
        </div>
        <div
          className="relative h-8 w-8 md:h-12 md:w-12 rounded-full border-mainText border sm:border-2 bg-mainText cursor-sewingHS"
          id="buttons"
          title="The Dial"
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
              priority
            />
          </a>
        </div>
        <div
          className="relative h-8 w-8 md:h-12 md:w-12 rounded-full border-mainText border sm:border-2 bg-mainText cursor-sewingHS"
          id="buttons"
          title="Chromadin"
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
              priority
            />
          </a>
        </div>
        <div
          className="relative h-8 w-8 md:h-12 md:w-12 rounded-full border-mainText border sm:border-2 bg-mainText cursor-sewingHS"
          id="buttons"
          title="Coin Op"
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
              priority
            />
          </a>
        </div>
        <div
          className="relative h-8 w-8 md:h-12 md:w-12 rounded-full border-mainText border sm:border-2 bg-mainText cursor-sewingHS"
          id="buttons"
          title="The Manufactory"
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
              priority
            />
          </a>
        </div>
        <div
          className="relative h-8 w-8 md:h-12 md:w-12 rounded-full border-mainText border sm:border-2 bg-mainText cursor-sewingHS"
          id="buttons"
          title="Lit Listener"
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
              priority
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Title;
