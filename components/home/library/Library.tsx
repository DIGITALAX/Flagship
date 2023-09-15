import Image from "next/image";
import { FunctionComponent, useState } from "react";
import { LibraryProps } from "../../../types/general.types";
import Shelf from "./Shelf";
import { INFURA_GATEWAY } from "../../../lib/lens/constants";

const Library: FunctionComponent<LibraryProps> = ({
  setRefactorModal,
}): JSX.Element => {
  const [blur, setBlur] = useState<boolean>(true);
  return (
    <div className="relative grid w-full h-fit grid-flow-row auto-rows-auto pt-4">
      <div
        className={`row-start-1 relative w-full h-3 border-t-4 border-black ${
          blur && "blur-sm animate-unblur"
        }`}
      >
        <Image
          src={`${INFURA_GATEWAY}/ipfs/QmbZ1CkPk3rtXuUubP8JyP9qzGxJkaLj29bASqiuZMd9eA`}
          layout="fill"
          objectFit="cover"
          className="h-10"
          priority
          onLoadingComplete={() => setBlur(false)}
          draggable={false}
        />
      </div>
      <div className="row-start-2 w-full flex h-fit">
        <Shelf setRefactorModal={setRefactorModal} />
      </div>
    </div>
  );
};

export default Library;
