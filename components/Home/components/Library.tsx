import Image from "next/legacy/image";
import { FunctionComponent } from "react";
import { INFURA_GATEWAY } from "../../../lib/constants";
import Shelf from "./Shelf";
import { LibraryProps } from "../types/home.types";

const Library: FunctionComponent<LibraryProps> = ({
  setRefactorModal,
  setLink,
  setShowImage,
  showImage,
  lastBook,
  link,
  handleLastBook,
}): JSX.Element => {
  return (
    <div className="relative grid w-full h-fit grid-flow-row auto-rows-auto pt-4">
      <div
        className={`row-start-1 relative w-full h-3 border-t-4 border-black`}
      >
        <Image
          src={`${INFURA_GATEWAY}/ipfs/QmbZ1CkPk3rtXuUubP8JyP9qzGxJkaLj29bASqiuZMd9eA`}
          layout="fill"
          objectFit="cover"
          className="h-10"
          priority
          draggable={false}
        />
      </div>
      <div className="row-start-2 w-full flex h-fit">
        <Shelf
          setLink={setLink}
          setShowImage={setShowImage}
          showImage={showImage}
          lastBook={lastBook}
          link={link}
          handleLastBook={handleLastBook}
          setRefactorModal={setRefactorModal}
        />
      </div>
    </div>
  );
};

export default Library;
