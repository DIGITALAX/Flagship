import { useEffect, useRef, useState } from "react";

const useMona = () => {
    const [tipo, setTipo] = useState<boolean>(true);


  return {
    tipo,
    setTipo
  };
};

export default useMona;
