import Image from "next/legacy/image";
import { FunctionComponent, JSX } from "react";
import { INFURA_GATEWAY_INTERNAL } from "../../../lib/constants";
import Shelf from "./Shelf";

const Library: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative w-full h-fit flex flex-col items-center justify-start pt-4">
      <div
        className={`flex items-center justify-center relative w-full h-3 border-t-4 border-black`}
      >
        <Image
          src={`${INFURA_GATEWAY_INTERNAL}QmbZ1CkPk3rtXuUubP8JyP9qzGxJkaLj29bASqiuZMd9eA`}
          layout="fill"
          objectFit="cover"
          className="h-10"
          draggable={false}
        />
      </div>
      <Shelf />
    </div>
  );
};

export default Library;
