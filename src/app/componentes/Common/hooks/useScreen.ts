import { ModalContext } from "@/app/providers";
import { useContext, useEffect, useState } from "react";

const useScreen = () => {
  const context = useContext(ModalContext);
  const [countdown, setCountdown] = useState<number>(0);
  const [pause, setPause] = useState<boolean>(false);

  useEffect(() => {
    if (context?.screen) {
      setCountdown(60);
    }
  }, [context?.screen]);

  useEffect(() => {
    if (countdown > 0 && !pause) {
      const timer = setInterval(() => {
        setCountdown((prev) => Math.max(prev - 1, 0));
      }, 1000);

      return () => clearInterval(timer);
    } else if (countdown === 0) {
      context?.setScreen(undefined);
    }
  }, [countdown, pause]);

  return {
    countdown,
    setPause,
    pause,
  };
};

export default useScreen;
