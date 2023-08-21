import Image from "next/image";
import { FunctionComponent } from "react";
import { MetadataProps } from "../../types/general.types";
import dynamic from "next/dynamic";
import Link from "next/link";

const DynamicCollect = dynamic(() => import("./Collect"), {
  ssr: false,
});

const Metadata: FunctionComponent<MetadataProps> = ({
  token,
  connect,
  errorMessage,
  collectNFT,
  isLoading,
  collectMarket,
  isSuccess,
  loading,
  data,
}): JSX.Element => {
  return (
    <div className="relative w-full h-full row-start-4 grid grid-flow-col auto-cols-auto pt-10 pb-24">
      <div className="relative w-[95%] h-fit col-start-1 border-offBlack border-4 place-self-center grid grid-flow-col auto-col-auto bg-lightY">
        <div className="relative w-full lg:w-fit h-full col-start-1 grid grid-flow-row auto-rows-auto gap-6 lg:gap-10 p-4 pb-12 lg:pb-8 sm:p-8 border-b-2 lg:border-r-2 border-offBlack">
          <div className="relative w-full sm:w-fit h-fit grid grid-flow-col auto-cols-auto gap-10 row-start-1">
            <div className="relative w-fit h-fit col-start-1 grid grid-flow-row auto-rows-auto">
              <div className="relative w-fit h-fit row-start-1 font-firaL text-5xl text-black">
                {token[0].price}Ξ
              </div>
              <div className="relative w-fit h-fit row-start-2 text-offBlack/75 text-base font-firaM place-self-end pt-2">
                (${(token[0].price * 1632.43).toFixed(2)})
              </div>
            </div>
            <div className="relative w-fit h-fit pb-4 galaxy:pb-0 row-start-2 col-start-1 galaxy:row-start-1 galaxy:col-start-2 grid grid-flow-row auto-rows-auto gap-2">
              <DynamicCollect
                connect={connect}
                token={token}
                errorMessage={errorMessage}
                collectNFT={collectNFT}
                isLoading={isLoading}
                collectMarket={collectMarket}
                isSuccess={isSuccess}
                loading={loading}
                data={data}
              />
              <div className="relative w-fit h-fit row-start-2 text-offBlack/75 text-base font-firaM place-self-end pt-2 grid grid-flow-row auto-rows-auto gap-2">
                <div className="relative w-fit h-fit row-start-1 grid grid-flow-col auto-cols-auto gap-2">
                  <div className="relative w-4 h-4 rounded-full col-start-1 border-2 border-black bg-brightGreen place-self-center"></div>
                  <div className="relative w-fit h-fit rounded-full col-start-2 text-offBlack font-fira place-self-center">
                    metadata
                  </div>
                </div>
                <div className="relative w-fit h-fit row-start-2 grid grid-flow-col auto-cols-auto gap-2 opacity-20">
                  <div className="relative w-4 h-4 rounded-full col-start-1 border-2 border-black bg-foot place-self-center"></div>
                  <div className="relative w-fit h-fit rounded-full col-start-2 text-offBlack font-fira place-self-center">
                    stream
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-fit h-fit pb-8 galaxy:pb-0 row-start-2 col-start-1 sm:col-start-2 sm:row-start-1 lg:col-start-1 lg:row-start-2 grid grid-flow-row auto-rows-auto font-firaM gap-2">
            <div className="relative w-fit h-fit row-start-1 grid grid-flow-col auto-cols-auto gap-1">
              <div className="relative w-4 h-6 col-start-1">
                <Image
                  src="/images/greenarrows.png"
                  layout="fill"
                  alt="Arrow"
                  priority
                  draggable={false}
                />
              </div>
              <div className="relative w-fit h-fit pl-3 pr-3 pt-0.5 pb-0.5 border-2 border-black rounded-lg col-start-2 text-bronze hover:bg-lightPurple cursor-sewingHS">
                {token[0].amount}
              </div>
            </div>
            <div className="relative w-fit h-fit row-start-2 grid grid-flow-col auto-cols-auto gap-1">
              <div className="relative w-4 h-6 col-start-1">
                <Image
                  src="/images/greenarrows.png"
                  layout="fill"
                  alt="Arrow"
                  priority
                  draggable={false}
                />
              </div>
              <div className="relative w-fit h-fit pl-3 pr-3 pt-0.5 pb-0.5 border-2 border-black rounded-lg col-start-2 text-midBlue hover:bg-lightPurple cursor-sewingHS">
                {token[0].edition + " Edition"}
              </div>
            </div>
            <div className="relative w-fit h-fit row-start-3 grid grid-flow-col auto-cols-auto gap-1">
              <div className="relative w-4 h-6 col-start-1">
                <Image
                  src="/images/greenarrows.png"
                  layout="fill"
                  alt="Arrow"
                  priority
                  draggable={false}
                />
              </div>
              <div className="relative w-fit h-fit pl-3 pr-3 pt-0.5 pb-0.5 border-2 border-black rounded-lg col-start-2 hover:bg-lightPurple cursor-sewingHS">
                {token[0].collection}
              </div>
            </div>
            <div className="relative w-fit h-fit row-start-4 grid grid-flow-col auto-cols-auto gap-1">
              <div className="relative w-4 h-6 col-start-1">
                <Image
                  src="/images/greenarrows.png"
                  layout="fill"
                  alt="Arrow"
                  priority
                  draggable={false}
                />
              </div>
              <div className="relative w-fit h-fit pl-3 pr-3 pt-0.5 pb-0.5 border-2 border-black text-pinkish rounded-lg col-start-2 hover:bg-lightPurple cursor-sewingHS">
                ERC 721
              </div>
            </div>
          </div>
          <div className="relative w-full h-fit row-start-3 grid grid-flow-row auto-rows-auto">
            <div className="relative w-fit h-fit row-start-1 text-offBlack text-lg font-firaB">
              Realm
            </div>
            <div className="relative w-full h-1 row-start-2 bg-offBlack"></div>
            <div className="relative w-fit h-fit row-start-3 grid grid-flow-col auto-cols-auto pt-3 gap-2 cursor-sewingHS">
              <div className="relative col-start-1 w-fit h-fit">
                <div className="relative h-10 w-16 border-r-4 border-t-2 border-b-2 border-l-2 border-offBlack rounded-md bg-lightWhite place-self-center grid grid-flow-col auto-cols-auto hover:rotate-6 cursor-sewingHS hover:mix-blend-exclusion">
                  <div className="relative w-full h-full col-start-1 place-self-center">
                    <a
                      href={token[0].realmLink}
                      target={"_blank"}
                      rel="noreferrer"
                      className="cursor-sewingHS"
                    >
                      <Image
                        src={`/images/realm/${token[0].realm.toLowerCase()}.png`}
                        objectFit="cover"
                        layout="fill"
                        alt="Profile Image"
                        priority
                        draggable={false}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative col-start-2 w-fit h-fit text-offBlack text-base font-fira place-self-center">
                {token[0].realm}
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-fit col-start-1 row-start-2 lg:row-start-1 lg:col-start-2 grid grid-flow-row auto-rows-auto p-6">
          <div className="row-start-1 relative w-full h-fit text-offBlack font-firaM text-base text-right pb-16 place-self-end">
            {token[0].description}
          </div>
          <div className="relative w-full h-0.5 bg-offBlack row-start-2  place-self-end"></div>
          <div className="relative w-fit h-fit row-start-3 text-offBlack font-firaB text-lg pt-16 pb-3 place-self-end">
            SYNTH GRAPH
          </div>
          <div className="relative w-full h-fit row-start-4 text-offBlack font-firaL text-sm text-right place-self-end">
            {token[0].graph}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metadata;
