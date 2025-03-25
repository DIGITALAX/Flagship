import { RefObject, SetStateAction } from "react";

export type TextCambioProps = {
  tipo: number;
  etapa: number;
  dict: any;
  setTipo: (e: SetStateAction<number>) => void;
  centrarImagen: () => void;
  textboxRef: RefObject<HTMLDivElement | null>;
  setEtapa: (e: SetStateAction<number>) => void;
};
