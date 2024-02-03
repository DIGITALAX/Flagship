import { useRef, useState } from "react";

const useLibrary = () => {
  const [showImage, setShowImage] = useState<string>(
    "QmRjGGc591f9wKXth3to3MLSj5puDbeJgh9PTjWSyuW5uP"
  );
  const [link, setLink] = useState<string>("https://docs.digitalax.xyz");

  const lastBook = useRef<null | HTMLDivElement>(null);
  const handleLastBook = (): void => {
    if (lastBook.current) {
      lastBook.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return { setShowImage, showImage, setLink, link, handleLastBook, lastBook };
};

export default useLibrary;
