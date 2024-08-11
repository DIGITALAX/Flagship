import { TFunction } from "i18next";
import { NextRouter } from "next/router";
import { FunctionComponent, RefObject, SetStateAction } from "react";

const TextoCambio: FunctionComponent<{
  tipo: number;
  etapa: number;
  t: TFunction<"mona", undefined>;
  setTipo: (e: SetStateAction<number>) => void;
  centrarImagen: () => void;
  router: NextRouter;
  textboxRef: RefObject<HTMLDivElement>;
  setEtapa: (e: SetStateAction<number>) => void;
}> = ({
  tipo,
  t,
  etapa,
  setTipo,
  centrarImagen,
  router,
  textboxRef,
  setEtapa,
}) => {
  switch (etapa) {
    case 1:
      return (
        <div
          className="flex flex-col gap-2 items-center justify-center text-black font-retro text-super"
          style={{
            position: "absolute" as const,
            transformOrigin: "center",
            left: router.locale == "es" ? "47.5%" : "47.7%",
            top: "36.9%",
          }}
          ref={textboxRef}
        >
          <div
            className={`relative w-fit h-fit break-all cursor-sewingHS active:scale-95  ${
              tipo == 1 && "underline decoration-black"
            }`}
            id="sombra"
            onClick={() => {
              setTipo(1);
              setEtapa(2);
            }}
          >
            {t("jugador")}
          </div>
          <div className="relative w-fit h-fit break-all" id="sombra">
            {t("o")}
          </div>
          <div
            className={`relative w-fit h-fit break-all cursor-sewingHS active:scale-95 ${
              tipo == 2 && "underline decoration-black"
            }`}
            id="sombra"
            onClick={() => {
              setTipo(2);
              setEtapa(2);
            }}
          >
            {t("espectador")}
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
            left: router.locale == "es" ? "48.5%" : "48.7%",
            top: "36.9%",
          }}
          ref={textboxRef}
          onClick={() => centrarImagen()}
        >
          <div className="relative w-fit h-fit break-all" id="sombra">
            {t("select")}
          </div>
          <div className="relative w-fit h-fit break-all" id="sombra">
            {t("your")}
          </div>
          <div className="relative w-fit h-fit break-all" id="sombra">
            {t("role")}
          </div>
        </div>
      );

    default:
      switch (tipo) {
        case 2:
          switch (etapa) {
            case 3:
              <div
                className="flex flex-col gap-2 items-center justify-center text-black font-retro text-super"
                style={{
                  position: "absolute" as const,
                  transformOrigin: "center",
                  left: router.locale == "es" ? "47.5%" : "47.7%",
                  top: "36.9%",
                }}
                ref={textboxRef}
              ></div>;
            case 4:
              <div
                className="flex flex-col gap-2 items-center justify-center text-black font-retro text-super"
                style={{
                  position: "absolute" as const,
                  transformOrigin: "center",
                  left: router.locale == "es" ? "47.5%" : "47.7%",
                  top: "36.9%",
                }}
                ref={textboxRef}
              ></div>;
            case 5:
              <div
                className="flex flex-col gap-2 items-center justify-center text-black font-retro text-super"
                style={{
                  position: "absolute" as const,
                  transformOrigin: "center",
                  left: router.locale == "es" ? "47.5%" : "47.7%",
                  top: "36.9%",
                }}
                ref={textboxRef}
              ></div>;
            case 6:
              <div
                className="flex flex-col gap-2 items-center justify-center text-black font-retro text-super"
                style={{
                  position: "absolute" as const,
                  transformOrigin: "center",
                  left: router.locale == "es" ? "47.5%" : "47.7%",
                  top: "36.9%",
                }}
                ref={textboxRef}
              ></div>;
            case 7:
              <div
                className="flex flex-col gap-2 items-center justify-center text-black font-retro text-super"
                style={{
                  position: "absolute" as const,
                  transformOrigin: "center",
                  left: router.locale == "es" ? "47.5%" : "47.7%",
                  top: "36.9%",
                }}
                ref={textboxRef}
              ></div>;
            case 8:
              <div
                className="flex flex-col gap-2 items-center justify-center text-black font-retro text-super"
                style={{
                  position: "absolute" as const,
                  transformOrigin: "center",
                  left: router.locale == "es" ? "47.5%" : "47.7%",
                  top: "36.9%",
                }}
                ref={textboxRef}
              ></div>;
            case 9:
              <div
                className="flex flex-col gap-2 items-center justify-center text-black font-retro text-super"
                style={{
                  position: "absolute" as const,
                  transformOrigin: "center",
                  left: router.locale == "es" ? "47.5%" : "47.7%",
                  top: "36.9%",
                }}
                ref={textboxRef}
              ></div>;
            case 10:
              <div
                className="flex flex-col gap-2 items-center justify-center text-black font-retro text-super"
                style={{
                  position: "absolute" as const,
                  transformOrigin: "center",
                  left: router.locale == "es" ? "47.5%" : "47.7%",
                  top: "36.9%",
                }}
                ref={textboxRef}
              ></div>;
            case 11:
              <div
                className="flex flex-col gap-2 items-center justify-center text-black font-retro text-super"
                style={{
                  position: "absolute" as const,
                  transformOrigin: "center",
                  left: router.locale == "es" ? "47.5%" : "47.7%",
                  top: "36.9%",
                }}
                ref={textboxRef}
              ></div>;
            case 12:
              <div
                className="flex flex-col gap-2 items-center justify-center text-black font-retro text-super"
                style={{
                  position: "absolute" as const,
                  transformOrigin: "center",
                  left: router.locale == "es" ? "47.5%" : "47.7%",
                  top: "36.9%",
                }}
                ref={textboxRef}
              ></div>;
            case 13:
              <div
                className="flex flex-col gap-2 items-center justify-center text-black font-retro text-super"
                style={{
                  position: "absolute" as const,
                  transformOrigin: "center",
                  left: router.locale == "es" ? "47.5%" : "47.7%",
                  top: "36.9%",
                }}
                ref={textboxRef}
              ></div>;
          }

        default:
          switch (etapa) {
            case 3:
              <div
                className="flex flex-col gap-2 items-center justify-center text-black font-retro text-super"
                style={{
                  position: "absolute" as const,
                  transformOrigin: "center",
                  left: router.locale == "es" ? "47.5%" : "47.7%",
                  top: "36.9%",
                }}
                ref={textboxRef}
              ></div>;
            case 4:
              <div
                className="flex flex-col gap-2 items-center justify-center text-black font-retro text-super"
                style={{
                  position: "absolute" as const,
                  transformOrigin: "center",
                  left: router.locale == "es" ? "47.5%" : "47.7%",
                  top: "36.9%",
                }}
                ref={textboxRef}
              ></div>;
            case 5:
              <div
                className="flex flex-col gap-2 items-center justify-center text-black font-retro text-super"
                style={{
                  position: "absolute" as const,
                  transformOrigin: "center",
                  left: router.locale == "es" ? "47.5%" : "47.7%",
                  top: "36.9%",
                }}
                ref={textboxRef}
              ></div>;
            case 6:
              <div
                className="flex flex-col gap-2 items-center justify-center text-black font-retro text-super"
                style={{
                  position: "absolute" as const,
                  transformOrigin: "center",
                  left: router.locale == "es" ? "47.5%" : "47.7%",
                  top: "36.9%",
                }}
                ref={textboxRef}
              ></div>;
            case 7:
              <div
                className="flex flex-col gap-2 items-center justify-center text-black font-retro text-super"
                style={{
                  position: "absolute" as const,
                  transformOrigin: "center",
                  left: router.locale == "es" ? "47.5%" : "47.7%",
                  top: "36.9%",
                }}
                ref={textboxRef}
              ></div>;
            case 8:
              <div
                className="flex flex-col gap-2 items-center justify-center text-black font-retro text-super"
                style={{
                  position: "absolute" as const,
                  transformOrigin: "center",
                  left: router.locale == "es" ? "47.5%" : "47.7%",
                  top: "36.9%",
                }}
                ref={textboxRef}
              ></div>;
            case 9:
              <div
                className="flex flex-col gap-2 items-center justify-center text-black font-retro text-super"
                style={{
                  position: "absolute" as const,
                  transformOrigin: "center",
                  left: router.locale == "es" ? "47.5%" : "47.7%",
                  top: "36.9%",
                }}
                ref={textboxRef}
              ></div>;
          }
      }
  }
};

export default TextoCambio;
