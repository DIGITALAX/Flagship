import { useRef, useState } from "react";

const useLibrary = () => {
  const [currentBook, setCurrentBook] = useState<{
    image: string;
    link: string;
  }>({
    image: "QmRjGGc591f9wKXth3to3MLSj5puDbeJgh9PTjWSyuW5uP",
    link: "https://docs.digitalax.xyz",
  });

  const lastBook = useRef<null | HTMLDivElement>(null);
  const handleLastBook = (): void => {
    if (lastBook.current) {
      lastBook.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return {
    currentBook,
    setCurrentBook,
    handleLastBook,
    lastBook,
  };
};

export default useLibrary;