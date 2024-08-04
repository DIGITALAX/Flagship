import { useEffect, useRef, useState } from "react";

const useMona = () => {
  const [tipo, setTipo] = useState<boolean>(true);
  const [textColors, setTextColors] = useState([
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
  ]);

  return {
    tipo,
    setTipo,
    textColors,
    setTextColors,
  };
};

export default useMona;
