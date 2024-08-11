import useMona from "@/components/Mona/hooks/useMona";
import TextoCambio from "@/components/Mona/modules/TextoCambio";
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
    fijo,
    manejarFijo,
    etapa,
    setEtapa,
    texto,
  } = useMona(t);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-offBlack items-center justify-center flex"
    >
      {fijo && (
        <>
          <div
            ref={rewind}
            className="w-12 h-12 absolute top-5 left-5 active:scale-96 cursor-sewingHS z-50 border border-black rounded-full"
            onClick={() => manejarFijo()}
          >
            <Image
              layout="fill"
              draggable={false}
              src={`${INFURA_GATEWAY}/ipfs/QmUReGB6h2eug5tMzeM1dmt3dhBJzh61dBvkz9pCrL5iJY`}
            />
          </div>
          {tipo !== 0 && (
            <div className="absolute bottom-10 w-full flex flex-row gap-3 h-fit z-50 items-center justify-center">
              <div
                className={`relative w-12 h-12 items-center justify-center border border-black rounded-full ${
                  etapa - 1 <= 0
                    ? "opacity-60"
                    : "cursor-sewingHS active:scale-95"
                }`}
                onClick={() => etapa - 1 > 0 && setEtapa(etapa - 1)}
              >
                <Image
                  layout="fill"
                  draggable={false}
                  src={`${INFURA_GATEWAY}/ipfs/QmWkphDLu84LZcpWscfJfyTg3dukNbxTfLbJa82yaoStCg`}
                />
              </div>
              <div
                className={`relative w-12 h-12 items-center justify-center border border-black rounded-full ${
                  etapa + 1 > (tipo == 1 ? 9 : 12)
                    ? "opacity-60"
                    : "cursor-sewingHS active:scale-95"
                }`}
                onClick={() =>
                  etapa + 1 <= (tipo == 1 ? 9 : 12) && setEtapa(etapa + 1)
                }
              >
                <Image
                  layout="fill"
                  draggable={false}
                  src={`${INFURA_GATEWAY}/ipfs/QmPesbP3xxEtc6AoeVpi7FxaYHBNcV8Lv2QFZFWBBPBqYU`}
                />
              </div>
            </div>
          )}
          <div className="w-[35%] h-[45%] absolute bottom-5 right-5 z-50 flex flex-col justify-end items-center gap-3">
            <div className="relative rounded-lg w-[75%] h-full">
              <div className="absolute opacity-40 top-0 left-0 w-full h-full rounded-lg">
                <Image
                  layout="fill"
                  draggable={false}
                  objectFit="cover"
                  className="rounded-lg"
                  src={`${INFURA_GATEWAY}/ipfs/QmTY4b1PrjmcYE9yZdF1VETuixaSCEvy1T3wWM8dDnEZBA`}
                />
              </div>
              <textarea
                className="w-full overflow-y-scroll text-white bg-transparent h-full px-1 py-3 text-xs font-retro"
                value={etapa < 1 ? "" : texto}
                style={{
                  resize: "none",
                }}
                readOnly
              />

              <div className="absolute right-0 bottom-3 w-40 h-48 flex">
                <Image
                  layout="fill"
                  draggable={false}
                  src={`${INFURA_GATEWAY}/ipfs/QmbUPVHC2v3tsR9XL9EQdNJbwXMzjhtxvxwVAUhsniMdRt`}
                />
              </div>
            </div>
            <div className="relative w-full h-fit flex items-center justify-center">
              <div className="w-full relative flex h-20">
                <Image
                  layout="fill"
                  draggable={false}
                  src={`${INFURA_GATEWAY}/ipfs/QmXx822b1snWb1yhoUvzqrLD5ELSNmm1AzbpdjiKng6Ppb`}
                />
              </div>
            </div>
          </div>
        </>
      )}
      <div
        ref={rewind}
        className={`absolute top-20 flex w-full items-center justify-center h-fit flex flex-col gap-2 text-white ${
          nivelZoom < 1 ? "flex" : "hidden"
        }`}
      >
        <div className="relative break-words font-retro text-2xl sm:text-4xl text-center">
          {t("agencia")}
        </div>
        <div className="relative break-words font-retro text-base sm:text-xl">
          {t("que")}
        </div>
      </div>
      <div
        className="relative w-[1346px] h-[898px] transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${posicion.x}px, ${posicion.y}px) scale(${nivelZoom})`,
          transformOrigin: "center",
          cursor: fijo ? "default" : arrastrando ? "grabbing" : "grab",
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

        <TextoCambio
          centrarImagen={centrarImagen}
          setTipo={setTipo}
          t={t}
          tipo={tipo}
          textboxRef={textboxRef}
          etapa={etapa}
          router={router}
          setEtapa={setEtapa}
        />
      </div>
      <div
        className={`absolute bottom-20 w-full items-center justify-center h-fit flex text-white break-words font-futur text-3xl sm:text-5xl text-center ${
          nivelZoom < 0.7 ? "flex" : "hidden"
        }`}
      >
        {t("unclaimed")}
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
