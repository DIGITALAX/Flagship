import Image from "next/legacy/image";
import { FunctionComponent } from "react";
import { INFURA_GATEWAY } from "../../../lib/constants";
import Shelf from "./Shelf";
import { LibraryProps } from "../types/home.types";

const Library: FunctionComponent<LibraryProps> = ({
  dispatch,
  currentBook,
  setCurrentBook,
  lastBook,
  handleLastBook,
  router
}): JSX.Element => {
  return (
    <div className="relative w-full h-fit flex flex-col items-center justify-start pt-4">
      <div
        className={`flex items-center justify-center relative w-full h-3 border-t-4 border-black`}
      >
        <Image
          src={`${INFURA_GATEWAY}/ipfs/QmbZ1CkPk3rtXuUubP8JyP9qzGxJkaLj29bASqiuZMd9eA`}
          layout="fill"
          objectFit="cover"
          className="h-10"
          draggable={false}
        />
      </div>
      <Shelf
        lastBook={lastBook}
        currentBook={currentBook}
        setCurrentBook={setCurrentBook}
        handleLastBook={handleLastBook}
        dispatch={dispatch}
        router={router}
      />
    </div>
  );
};

export default Library;
