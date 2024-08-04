import { INFURA_GATEWAY } from "@/lib/constants";
import descriptionRegex from "@/lib/lens/helpers/descriptionRegex";
import { TFunction } from "i18next";
import Image from "next/legacy/image";
import { FunctionComponent } from "react";

const TipoCambio: FunctionComponent<{
  tipo: boolean;
  t: TFunction<"mona", undefined>;
  textColors: string[];
}> = ({ tipo, t, textColors }) => {
  switch (tipo) {
    case false:
      return (
        <div className="relative w-full h-fit flex items-center justify-start flex-col gap-4">
          <div className="relative w-1/2 flex flex-col items-center justify-center h-[50rem] text-center text-white gap-px font-mana text-base">
            <div className="relative w-fit h-fit flex items-center justify-center gap-4 flex-col">
              <div className="relative w-fit h-fit flex sm:break-words break-all">
                {t("almacenamiento")}
              </div>
              <div className="relative w-fit h-fit flex sm:break-words break-all">
                {t("eligible")}
              </div>
            </div>
            <div className="relative w-96 h-96 flex items-center justify-center">
              <Image
                src={`${INFURA_GATEWAY}/ipfs/Qmd5eMLdiErF3Vn3vyEH3Fgjg27rEMPfdvR16hLeJ2R38g`}
                draggable={false}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div
            className="relative w-full flex flex-row items-center justify-center h-[50rem] text-offBlack gap-px font-bit px-6"
            id="parrafo"
          >
            <div className="relative w-full h-96 flex items-center justify-center">
              <Image
                src={`${INFURA_GATEWAY}/ipfs/QmPQ6MqotTNc43bTU2wUoXYd1LPAtP2tSq2nXLEvxrrBeg`}
                draggable={false}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="relative w-full h-fit flex items-center justify-center text-sm">
              <div
                className="relative w-3/4 h-fit flex sm:break-words break-all text-center flex flex-col gap-2"
                id="texto"
              >
                {[
                  t("diario"),
                  t("voto"),
                  t("cali"),
                  t("pers"),
                  t("coli"),
                  t("eff"),
                  t("cosas"),
                ].map((texto: string, indice: number) => (
                  <div
                    key={indice}
                    style={{
                      color: textColors[indice],
                      transition: "color 0.3s",
                    }}
                  >
                    {texto}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative w-full flex flex-row items-center justify-center h-[50rem] text-offBlack gap-px font-bit px-6">
            <div
              className="relative w-full h-fit flex items-center justify-center text-sm whitespace-preline font-mana"
              dangerouslySetInnerHTML={{
                __html: descriptionRegex(t("actividad1"), false),
              }}
            ></div>
            <div className="relative w-full h-96 flex items-center justify-center">
              <Image
                src={`${INFURA_GATEWAY}/ipfs/QmPQ6MqotTNc43bTU2wUoXYd1LPAtP2tSq2nXLEvxrrBeg`}
                draggable={false}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div
              className="relative w-full h-fit flex items-center justify-center text-sm whitespace-preline font-mana"
              dangerouslySetInnerHTML={{
                __html: descriptionRegex(t("actividad2"), false),
              }}
            ></div>
          </div>
          <div className="relative w-full flex flex-col items-center justify-center h-[50rem] text-offBlack gap-3 font-bit px-6">
            <div
              className="relative w-full h-fit flex items-center justify-center text-sm whitespace-preline font-mana"
              dangerouslySetInnerHTML={{
                __html: descriptionRegex(t("leaderboard1"), false),
              }}
            ></div>
            <div className="relative w-full h-96 flex items-center justify-center">
              <Image
                src={`${INFURA_GATEWAY}/ipfs/QmPQ6MqotTNc43bTU2wUoXYd1LPAtP2tSq2nXLEvxrrBeg`}
                draggable={false}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div
              className="relative w-full h-fit flex items-center justify-center text-sm whitespace-preline font-mana"
              dangerouslySetInnerHTML={{
                __html: descriptionRegex(t("leaderboard2"), false),
              }}
            ></div>
          </div>
          <div className="relative w-full flex flex-row items-center justify-center h-[50rem] text-offBlack gap-px font-bit px-6">
            <div className="relative w-full h-96 flex items-center justify-center">
              <Image
                src={`${INFURA_GATEWAY}/ipfs/QmPQ6MqotTNc43bTU2wUoXYd1LPAtP2tSq2nXLEvxrrBeg`}
                draggable={false}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="relative w-full h-fit flex items-center justify-center text-sm">
              <div className="relative w-3/4 h-fit flex sm:break-words break-all text-center flex flex-col gap-2">
                {t("patron")}
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="relative w-full h-fit flex items-center justify-start flex-col gap-4"></div>
      );
  }
};

export default TipoCambio;
