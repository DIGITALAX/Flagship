import { INFURA_GATEWAY } from "@/lib/constants";
import Image from "next/legacy/image";
import { FunctionComponent } from "react";

const RouterChange: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative w-screen h-screen flex justify-center items-center bg-mainBg">
      <div className="relative flex justify-center items-center flex-col gap-4">
        <div className="relative w-52 h-8 flex items-center justify-center animate-pulse">
          <Image
            layout="fill"
            src={`${INFURA_GATEWAY}/ipfs/QmX8kDkP3rdgqeEauqzsbwL8zP4hGwtTKxrT3Xmw7R2feL`}
            draggable={false}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default RouterChange;
