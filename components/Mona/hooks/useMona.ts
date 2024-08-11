import { TFunction } from "i18next";
import { useEffect, useRef, useState } from "react";

const useMona = (t: TFunction<"mona", undefined>) => {
  const textos: string[] = [t("primero"), t("segundo")];
  const [tipo, setTipo] = useState<number>(0);
  const [texto, setTexto] = useState<string>();
  const [nivelZoom, setNivelZoom] = useState<number>(0.5);
  const containerRef = useRef<HTMLDivElement>(null);
  const [posicion, setPosicion] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });
  const [empezarArrastre, setEmpezarArrastre] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });
  const [indiceActual, setIndiceActual] = useState<number>(0);
  const imageRef = useRef<HTMLDivElement>(null);
  const textboxRef = useRef<HTMLDivElement>(null);
  const [arrastrando, setArrastrando] = useState<boolean>(false);
  const [fijo, setFijo] = useState<boolean>(false);
  const [etapa, setEtapa] = useState<number>(0);

  const manejarFijo = () => {
    setFijo(false);
    setEtapa(0);
    setTipo(0);
    setPosicion({
      x: 0,
      y: 0,
    });
    setNivelZoom(0.5);
  };

  const centrarImagen = () => {
    setNivelZoom(4);
    setEtapa(1);
    if (containerRef.current && imageRef.current && textboxRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();

      setPosicion({
        x: 0,
        y: containerRect.height * 0.4,
      });
    }
    setFijo(true);
  };

  useEffect(() => {
    const manejarRueda = (e: WheelEvent) => {
      if (fijo) return;
      e.preventDefault();
      setNivelZoom((prevZoom) => {
        const zoomNuevo = prevZoom * (1 - e.deltaY * 0.001);
        return Math.min(Math.max(zoomNuevo, 0.3), 5);
      });
    };

    const manejarMouseDown = (e: MouseEvent) => {
      if (fijo) return;
      setArrastrando(true);
      setEmpezarArrastre({
        x: e.clientX - posicion.x,
        y: e.clientY - posicion.y,
      });
    };

    const manejarMouseMove = (e: MouseEvent) => {
      if (fijo) return;
      if (arrastrando) {
        setPosicion({
          x: e.clientX - empezarArrastre.x,
          y: e.clientY - empezarArrastre.y,
        });
      }
    };

    const manejarMouseUp = () => {
      if (fijo) return;
      setArrastrando(false);
    };

    const manejarTouchStart = (e: TouchEvent) => {
      if (fijo) return;
      const touch = e.touches[0];
      setArrastrando(true);
      setEmpezarArrastre({
        x: touch.clientX - posicion.x,
        y: touch.clientY - posicion.y,
      });
    };

    const manejarTouchMove = (e: TouchEvent) => {
      if (fijo) return;
      if (arrastrando) {
        const touch = e.touches[0];
        setPosicion({
          x: touch.clientX - empezarArrastre.x,
          y: touch.clientY - empezarArrastre.y,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", manejarRueda);
      container.addEventListener("mousedown", manejarMouseDown);
      container.addEventListener("mousemove", manejarMouseMove);
      container.addEventListener("mouseup", manejarMouseUp);
      container.addEventListener("mouseleave", manejarMouseUp);
      container.addEventListener("touchstart", manejarTouchStart);
      container.addEventListener("touchmove", manejarTouchMove);
      container.addEventListener("touchend", manejarMouseUp);
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", manejarRueda);
        container.removeEventListener("mousedown", manejarMouseDown);
        container.removeEventListener("mousemove", manejarMouseMove);
        container.removeEventListener("mouseup", manejarMouseUp);
        container.removeEventListener("mouseleave", manejarMouseUp);
        container.removeEventListener("touchstart", manejarTouchStart);
        container.removeEventListener("touchmove", manejarTouchMove);
        container.removeEventListener("touchend", manejarMouseUp);
      }
    };
  }, [arrastrando, empezarArrastre, posicion]);

  useEffect(() => {
    console.log( textos[etapa - 1]?.length)
    if (indiceActual < textos[etapa - 1]?.length && etapa > 0) {
      const timeout = setTimeout(() => {
        setTexto((prevText) => prevText + textos[etapa - 1][indiceActual]);
        setIndiceActual((prevIndex) => prevIndex + 1);
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [indiceActual]);

  useEffect(() => {
    setIndiceActual(0);
  }, [etapa]);

  return {
    tipo,
    setTipo,
    nivelZoom,
    containerRef,
    arrastrando,
    posicion,
    imageRef,
    textboxRef,
    centrarImagen,
    fijo,
    manejarFijo,
    etapa,
    setEtapa,
    texto,
  };
};

export default useMona;
