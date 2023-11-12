import { FunctionComponent } from "react";
import { INFURA_GATEWAY } from "../../../lib/lens/constants";
import Image from "next/legacy/image";
import { LoadingProps } from "../../../types/general.types";

const FetchMoreLoading: FunctionComponent<LoadingProps> = ({
  size,
}): JSX.Element => {
  return (
    <div className="relative w-full h-fit grid grid-flow-col auto-cols-auto py-3">
      <div
        className={`relative place-self-center w-${size} h-${size} animate-spin`}
      >
        <Image
          layout="fill"
          src={`${INFURA_GATEWAY}/ipfs/QmQZ8UwjeizDQkbCiZED8Ya4LxpFD5JbVbNeAdowurHkiY`}
          draggable={false}
        />
      </div>
    </div>
  );
};

export default FetchMoreLoading;
