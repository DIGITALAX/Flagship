import useMona from "@/components/Mona/hooks/useMona";
import TipoCambio from "@/components/Mona/modules/TipoCambio";
import { MonaProps } from "@/components/Mona/types/mona.types";
import { INFURA_GATEWAY } from "@/lib/constants";
import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/legacy/image";

const Mona: NextPage<MonaProps> = ({ router, rewind }): JSX.Element => {
  const { t } = useTranslation("mona");
  const {
    tipo,
    setTipo,
    nivelZoom,
    containerRef,
    arrastrando,
    posicion,
    centrarImagen,
    imageRef,
    textboxRef,
  } = useMona();

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-offBlack items-center justify-center flex"
    >
      <div
        ref={rewind}
        className="absolute top-20 flex w-full items-center justify-center h-fit flex flex-col gap-2 text-white"
      >
        <div className="relative break-words font-bit text-2xl sm:text-4xl text-center">
          {t("agencia")}
        </div>
        <div className="relative break-words font-bit text-base sm:text-xl">
          {" "}
          {t("que")}
        </div>
      </div>
      <div
        className="relative w-[1346px] h-[898px] transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${posicion.x}px, ${posicion.y}px) scale(${nivelZoom})`,
          transformOrigin: "center",
          cursor: arrastrando ? "grabbing" : "grab",
        }}
        ref={imageRef}
      >
        <Image
          src={`${INFURA_GATEWAY}/ipfs/QmfSDeJw2C4ND1XTZWAhqFeVnV5doMX5q5KqQKz68BADrj`}
          layout="fixed"
          priority
          draggable={false}
          width={1346}
          height={898}
          className="transition-transform duration-300 ease-out"
        />
        <div
          style={{
            position: "absolute" as const,
            transformOrigin: "center",
            left: "47.5%",
            top: "36.6%",
          }}
          ref={textboxRef}
          className="flex flex-col gap-2 items-center justify-center text-black font-bit text-xxs"
        >
          <div
            className={`relative w-fit h-fit break-all cursor-sewingHS active:scale-95  ${
              tipo && "underline"
            }`}
            id="sombra"
            onClick={() => {
              setTipo(true);
              centrarImagen();
            }}
          >
            {t("jugador")}
          </div>
          <div className="relative w-fit h-fit break-all" id="sombra">
            {t("o")}
          </div>
          <div
            className={`relative w-fit h-fit break-all cursor-sewingHS active:scale-95 ${
              !tipo && "underline"
            }`}
            id="sombra"
            onClick={() => {
              setTipo(false);
              centrarImagen();
            }}
          >
            {t("espectador")}
          </div>
        </div>
      </div>
      <div
        className={`absolute bottom-20 w-full items-center justify-center h-fit flex text-white break-words font-futur text-3xl sm:text-5xl text-center ${
          nivelZoom < 0.7 ? "flex" : "hidden"
        }`}
      >
        {t("unclaimed")}
      </div>
      {/* <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-start">
        <div className="relative flex flex-col items-center justify-center h-[50rem] text-center text-white font-bit">
          <div className="text-6xl flex items-center justify-center break-words w-fit h-fit px-4">
            {t("agencia")}
          </div>
          <div
            className="text-lg break-words w-fit h-fit flex items-center justify-center px-3"
            id="que"
          >
            {t("que")}
          </div>
        </div>
        <div className="relative w-full flex flex-col items-center justify-center h-[50rem] text-center text-white gap-px font-bit text-2xl">
          <div className="relative w-[25rem] h-[25rem] flex items-center justify-center">
            <Image
              src={`${INFURA_GATEWAY}/ipfs/QmakB3FwKhkhEUib9uGjRoPii2CX3h8BmaEjmkGpQtA6G7`}
              draggable={false}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="pt-4 relative w-fit h-fit flex text-3xl pb-3 text-white break-words text-sm">
            {t("modo")}
          </div>
          <div
            className={`relative w-fit h-fit flex cursor-sewingHS active:scale-95 hover:text-lightYellow break-words ${
              tipo ? "text-lightYellow underline" : "text-white"
            }`}
            onClick={() => setTipo(true)}
          >
            {t("jugador")}
          </div>
          <div className="relative w-fit h-fit flex"> {t("o")}</div>
          <div
            className={`relative w-fit h-fit flex cursor-sewingHS active:scale-95 hover:text-lightYellow break-words ${
              !tipo ? "text-lightYellow underline" : "text-white"
            }`}
            onClick={() => setTipo(false)}
          >
            {t("espectador")}
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center h-fit text-center text-white font-bit">
          <TipoCambio t={t} tipo={tipo} />
        </div>
        <div className="relative w-full flex flex-row items-center justify-center h-[50rem] text-offBlack gap-px font-bit px-6">
          <div className="relative w-3/4 h-fit flex sm:break-words break-words text-center flex flex-col gap-2">
            {t("fase")}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Mona;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["mona", "footer"])),
  },
});
