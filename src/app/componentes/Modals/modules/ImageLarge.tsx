import { ModalContext } from "@/app/providers";
import Image from "next/legacy/image";
import { FunctionComponent, JSX, useContext } from "react";

const ImageLarge: FunctionComponent = (): JSX.Element => {
  const context = useContext(ModalContext);
  return (
    <div className="inset-0 justify-center fixed z-50 bg-opacity-50 backdrop-blur-sm overflow-y-hidden grid grid-flow-col auto-cols-auto w-full h-auto">
      <div
        className="relative w-screen h-full col-start-1 justify-self-center grid grid-flow-col auto-cols-auto self-start cursor-sewingHS"
        onClick={() => context?.setImageViewer(undefined)}
      >
        <div className="relative w-full h-screen grid grid-flow-row auto-rows-auto py-8">
          <div className="relative w-4/5 h-full row-start-1 grid grid-flow-col auto-cols-auto place-self-center px-4">
            {context?.imageViewer?.type === "image/png" ||
            context?.imageViewer?.type === "image/gif" ||
            context?.imageViewer?.type === "image/webp" ||
            context?.imageViewer?.type === "image/jpeg" ||
            context?.imageViewer?.type === "image/jpg" ||
            (!context?.imageViewer?.type?.includes("video") &&
              context?.imageViewer?.type?.includes("audio")) ? (
              <Image
                src={context?.imageViewer?.content}
                layout="fill"
                objectFit="contain"
                draggable={false}
              />
            ) : context?.imageViewer?.type?.includes("audio") ? (
              <audio
                muted
                controls
                className="rounded-md absolute w-full h-full object-cover"
              >
                <source src={context?.imageViewer?.content} />
              </audio>
            ) : (
              <video
                muted
                controls
                className="rounded-md absolute w-full h-full object-cover"
              >
                <source src={context?.imageViewer?.content} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageLarge;
