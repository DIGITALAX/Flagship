"use client";

import { INFURA_GATEWAY_INTERNAL } from "@/app/lib/constants";
import { ModalContext } from "@/app/providers";
import Image from "next/legacy/image";
import { useContext } from "react";
import ImagenCambio from "./ImagenCambio";
import TextoCambio from "./TextoCambio";
import useComp from "../hooks/useComp";

export default function CompEntry({ dict }: { dict: any }) {
  const context = useContext(ModalContext);
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
    textareaRef,
    indice,
  } = useComp(dict);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-offBlack items-center justify-center flex"
    >
      {fijo && (
        <>
          <div
            ref={context?.rewind}
            className=" h-6 w-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 absolute top-5 left-5 active:scale-96 cursor-sewingHS z-50 border border-black rounded-full z-50"
            onClick={() => manejarFijo()}
          >
            <Image
              layout="fill"
              draggable={false}
              src={`${INFURA_GATEWAY_INTERNAL}Qmc6s8sgzJ89T6SmBV3UXd8KxHN2K66Ch2sGzdvuCUnb3j`}
            />
          </div>
          {tipo !== 0 && (
            <div className="absolute md:top-auto top-5 bottom-auto md:bottom-10 w-full flex flex-row gap-3 h-fit z-40 items-center justify-center">
              <div
                className={`relative h-6 w-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 items-center justify-center border border-black rounded-full ${
                  etapa - 1 <= 0 || tipo == 0
                    ? "opacity-60"
                    : "cursor-sewingHS active:scale-95"
                }`}
                onClick={() => etapa - 1 > 0 && tipo > 0 && setEtapa(etapa - 1)}
              >
                <Image
                  layout="fill"
                  draggable={false}
                  src={`${INFURA_GATEWAY_INTERNAL}QmeVHRRfnxScAnnxie67nT9dpmD6wcHVLtcBG7R9ZzXjNQ`}
                />
              </div>
              <div
                className={`relative  h-6 w-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 items-center justify-center border border-black rounded-full ${
                  etapa + 1 > (tipo == 1 ? 9 : 11) || tipo == 0
                    ? "opacity-60"
                    : "cursor-sewingHS active:scale-95"
                }`}
                onClick={() =>
                  etapa + 1 <= (tipo == 1 ? 9 : 11) &&
                  tipo > 0 &&
                  setEtapa(etapa + 1)
                }
              >
                <Image
                  layout="fill"
                  draggable={false}
                  src={`${INFURA_GATEWAY_INTERNAL}QmbBsJ3ng2pjTrkJ19gxqHiLqy73FrSSwMNfrgq1u8kiZa`}
                />
              </div>
            </div>
          )}
          <div className="w-full md:w-[35%] h-[40%] sm:h-[45%] absolute bottom-5 right-5 z-50 flex flex-col justify-end items-center gap-3">
            <div className={`relative rounded-lg w-[75%] h-full`}>
              <div className="absolute z-10 top-0 left-0 opacity-40 w-full h-full rounded-lg">
                <Image
                  layout="fill"
                  draggable={false}
                  objectFit="cover"
                  className="rounded-lg"
                  src={`${INFURA_GATEWAY_INTERNAL}QmUpXfxfa8RWo1REe5ux3jJs5UWyebknCcVHFiMXKjFhBU`}
                />
              </div>
              <div
                className="relative w-full h-full overflow-y-scroll flex"
                id="noScroll"
              >
                <textarea
                  className={`w-full relative whitespace-inline bg-transparent z-30 px-2 py-4 font-retro opacity-100 h-full ${
                    etapa <= 1
                      ? "text-white text-xs"
                      : etapa == 3 ||
                        etapa == 4 ||
                        (tipo == 1 && etapa == 7) ||
                        (tipo == 2 && etapa == 6) ||
                        (tipo == 2 && etapa == 9)
                      ? "text-black text-base"
                      : (tipo == 1 && etapa == 8) ||
                        (tipo == 2 && etapa == 5) ||
                        (tipo == 2 && etapa == 7)
                      ? "text-white text-base"
                      : (tipo == 1 && etapa == 9) ||
                        (tipo == 2 && etapa == 10) ||
                        (tipo == 2 && etapa == 2)
                      ? "text-xs text-black"
                      : "text-[#F942FD] text-base"
                  }`}
                  id="sombra2"
                  readOnly
                  value={texto || ""}
                  ref={textareaRef}
                />
              </div>
            </div>
            <div className="absolute right-0 bottom-20 w-20 h-28 md:w-40 md:h-48 flex  hover:opacity-10 active:opacity-10 z-50">
              <Image
                layout="fill"
                draggable={false}
                objectFit="contain"
                src={`${INFURA_GATEWAY_INTERNAL}${
                  [
                    "QmVdS3wEJrHg92ohiW4NtSMFtHYWQ2PEAWzcPnda8x9vNs",
                    "QmUwnZzChWa25DCWf4pKK3H4iF4ppjx3TgVpfdCjN9kmGU",
                    "QmXYb74MPSTTpCfFMWqSNDxsxNhAgVh9djQBbDx8zVMHya",
                    "QmNgjgZfGup3TMLTesu4bVxBn92zVfhjfU5mH6sXYdR4Uw",
                    "QmeZEE1f5CBkRD3wSsBXhtVLckuzFaxzwu4wtBgS6Q9VxM",
                    "QmWCnDsDb4H4KTfQdmrbSph3KB9hyqs2mDFpVLVk9D9EcU",
                  ][indice]
                }`}
              />
            </div>
            <div className="relative w-full h-fit flex items-center justify-center">
              <div className="w-full relative flex h-20">
                <Image
                  layout="fill"
                  draggable={false}
                  src={`${INFURA_GATEWAY_INTERNAL}QmXx822b1snWb1yhoUvzqrLD5ELSNmm1AzbpdjiKng6Ppb`}
                />
              </div>
            </div>
          </div>
        </>
      )}
      <div
        ref={context?.rewind}
        className={`absolute top-20 flex w-full items-center justify-center h-fit flex flex-col gap-2 text-white ${
          nivelZoom < 1 ? "flex" : "hidden"
        }`}
      >
        <h1 className="relative break-words font-retro text-2xl sm:text-4xl text-center">
          {dict.mona.agencia}
        </h1>
        <div className="relative break-words font-retro text-base sm:text-xl">
          {dict.mona.que}
        </div>
      </div>
      <div
        className={`relative transition-transform duration-300 ease-out ${
          etapa <= 1 ? "w-[1346px] h-[898px]" : "w-full h-full"
        }`}
        style={{
          transform:
            etapa <= 1
              ? `translate(${posicion.x}px, ${posicion.y}px) scale(${nivelZoom})`
              : etapa === 3
              ? `scale(${1.2})`
              : tipo == 1 && etapa === 5
              ? `scale(${1.5})`
              : tipo == 2 && etapa === 5
              ? `scale(${1.2})`
              : etapa === 7
              ? `scale(${1.1})`
              : (tipo == 2 && etapa === 9) || (tipo == 2 && etapa == 11)
              ? `scale(${1.1})`
              : undefined,
          transformOrigin: "center",
          cursor: fijo ? "default" : arrastrando ? "grabbing" : "grab",
        }}
        ref={imageRef}
      >
        <ImagenCambio tipo={tipo} etapa={etapa} />
        <TextoCambio
          centrarImagen={centrarImagen}
          setTipo={setTipo}
          dict={dict}
          tipo={tipo}
          textboxRef={textboxRef}
          etapa={etapa}
          setEtapa={setEtapa}
        />
      </div>
      <div
        className={`absolute bottom-20 w-full items-center justify-center h-fit flex break-words font-futur text-3xl sm:text-5xl text-center ${
          nivelZoom < 0.7 ? "flex" : "hidden"
        } text-white`}
      >
        {dict?.mona?.unclaimed}
      </div>
    </div>
  );
}
