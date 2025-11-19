import { FunctionComponent } from "react";
import { usePathname } from "next/navigation";
import { TextCambioProps } from "../types/comp.types";

const TextoCambio: FunctionComponent<TextCambioProps> = ({
  tipo,
  dict,
  etapa,
  setTipo,
  centrarImagen,
  textboxRef,
  setEtapa,
}) => {
  const path = usePathname();
  switch (etapa) {
    case 1:
      return (
        <div
          className="flex flex-col gap-2 items-center justify-center text-black font-retro text-super"
          style={{
            position: "absolute" as const,
            transformOrigin: "center",
            left:
              path.match(/(?<=\/)(en|es)(?=\/)/)?.[0] == "es"
                ? "47.5%"
                : "47.7%",
            top: "36.9%",
          }}
          ref={textboxRef}
        >
          <div
            className={`relative text-[#3586EF] w-fit h-fit break-all cursor-sewingHS active:scale-95 hover:underline hover:decoration-[#3586EF] ${
              tipo == 1 && "underline decoration-[#3586EF]"
            }`}
            id="sombra"
            onClick={() => {
              setTipo(1);
              setEtapa(2);
            }}
          >
            {dict?.mona?.jugador}
          </div>
          <div
            className="text-black relative text-super1 w-fit h-fit break-all"
            id="sombra"
          >
            {dict?.mona?.o}
          </div>
          <div
            className={`relative text-[#EF35AB] w-fit h-fit break-all cursor-sewingHS active:scale-95 hover:underline hover:decoration-[#EF35AB] ${
              tipo == 2 && "underline decoration-[#EF35AB]"
            }`}
            id="sombra"
            onClick={() => {
              setTipo(2);
              setEtapa(2);
            }}
          >
            {dict?.mona?.espectador}
          </div>
        </div>
      );

    case 0:
      return (
        <div
          className="flex flex-col gap-2 items-center justify-center text-black font-retro text-super cursor-sewingHS"
          style={{
            position: "absolute" as const,
            transformOrigin: "center",
            left: "48.7%",
            top: "36.9%",
          }}
          ref={textboxRef}
          onClick={() => centrarImagen()}
        >
          <div className="relative w-fit h-fit break-all" id="sombra">
            {dict?.mona?.select}
          </div>
          <div className="relative w-fit h-fit break-all" id="sombra">
            {dict?.mona?.your}
          </div>
          <div className="relative w-fit h-fit break-all" id="sombra">
            {dict?.mona?.role}
          </div>
        </div>
      );

    default:
      return <></>;
  }
};

export default TextoCambio;
