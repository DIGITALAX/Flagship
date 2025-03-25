import { ModalContext } from "@/app/providers";
import {
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useContext, useEffect, useState } from "react";

const useScreen = () => {
  const context = useContext(ModalContext);
  const [countdown, setCountdown] = useState<number>(0);
  const [pause, setPause] = useState<boolean>(false);
  const [infoOpen, setInfoOpen] = useState<boolean>(true);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, { activationConstraint: { distance: 5 } })
  );

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

  useEffect(() => {
    if (context?.screen) {
      setInfoOpen(true);
      setPosition({
        x: 100,
        y: 200,
      });
    }
  }, [context?.screen]);

  return {
    countdown,
    setPause,
    pause,
    infoOpen,
    setInfoOpen,
    position,
    setPosition,
    sensors,
  };
};

export default useScreen;
