import { useEffect, useRef, useState } from "react";

const useMona = () => {
  const [tipo, setTipo] = useState<boolean>(true);
  const [textColors, setTextColors] = useState([
    "#0035F2",
    "#0035F2",
    "#0035F2",
    "#0035F2",
    "#0035F2",
    "#0035F2",
    "#0035F2",
  ]);

  return {
    tipo,
    setTipo,
    textColors,
    setTextColors,
  };
};

export default useMona;
