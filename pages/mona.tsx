import useMona from "@/components/Mona/hooks/useMona";
import Curva from "@/components/Mona/modules/Curva";
import TipoCambio from "@/components/Mona/modules/TipoCambio";
import { MonaProps } from "@/components/Mona/types/mona.types";
import { INFURA_GATEWAY } from "@/lib/constants";
import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/legacy/image";

const Mona: NextPage<MonaProps> = ({ router, rewind }): JSX.Element => {
  const { t } = useTranslation("mona");
  const { tipo, setTipo, textColors, setTextColors } = useMona();

  return (
    <div
      className="flex flex-col bg-gradient-to-b from-black to-windows justify-start items-center h-[400rem] min-h-full gap-20 overflow-hidden"
      ref={rewind}
    >
      <div className="absolute top-0 left-0 w-full h-[400rem] overflow-hidden">
        <Image
          src={`${INFURA_GATEWAY}/ipfs/QmNpxzDcavEqYD8wUXmU3BEWaeaBLKF75kHGf6nDXqCukX`}
          layout="responsive"
          width={512}
          height={2611}
          objectFit="contain"
          priority
          draggable={false}
        />
        <div className="absolute top-0 right-0 w-full h-full bg-windows/20"></div>
      </div>
      <Curva
        tipo={tipo}
        textColors={textColors}
        setTextColors={setTextColors}
      />
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
        <TipoCambio t={t} tipo={tipo} textColors={textColors} />
      </div>
      <div className="relative w-full flex flex-row items-center justify-center h-[50rem] text-offBlack gap-px font-bit px-6">
        <div className="relative w-3/4 h-fit flex sm:break-words break-words text-center flex flex-col gap-2">
          {t("fase")}
        </div>
      </div>
    </div>
  );
};

export default Mona;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["mona", "footer"])),
  },
});
