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
  const { tipo, setTipo } = useMona();

  return (
    <div
      className="flex flex-col bg-gradient-to-b from-windows to-white justify-start items-center h-[400rem] min-h-full gap-20"
      ref={rewind}
    >
      <Curva />
      <div className="relative flex flex-col items-center justify-center h-screen text-center text-white font-bit">
        <div className="text-6xl flex items-center justify-center break-all w-fit h-fit px-4">
          {t("agencia")}
        </div>
        <div
          className="text-lg break-words w-fit h-fit flex items-center justify-center px-3"
          id="que"
        >
          {t("que")}
        </div>
      </div>
      <div className="relative w-full flex flex-col items-center justify-center h-screen text-center text-white gap-px font-bit text-2xl">
        <div
          className="relative w-fit h-fit flex cursor-sewingHS active:scale-95 hover:text-lightYellow break-all"
          onClick={() => setTipo(true)}
        >
          {t("jugador")}
        </div>
        <div className="relative w-fit h-fit flex"> {t("o")}</div>
        <div
          className="relative w-fit h-fit flex cursor-sewingHS active:scale-95 hover:text-lightYellow break-all"
          onClick={() => setTipo(false)}
        >
          {t("espectador")}
        </div>
        <div className="relative w-96 h-96 flex items-center justify-center">
          <Image
            src={`${INFURA_GATEWAY}/ipfs/QmdKiSJPQauP9LJk59HQAcHnUktr4JbuTrKTgyvzNFt5av`}
            draggable={false}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center h-screen text-center text-white font-bit">
        <TipoCambio tipo={tipo} />
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
