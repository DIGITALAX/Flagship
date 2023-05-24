import Image from "next/image";
import { FunctionComponent, useState } from "react";
import { Blender, useGalleryBoxProps } from "../../../types/general.types";

const Gallery: FunctionComponent<useGalleryBoxProps> = ({
  currentImages,
}): JSX.Element => {
  const [blur, setBlur] = useState<boolean>(true);
  return (
    <div className="relative grid grid-flow-row auto-rows-auto sm:grid-flow-col sm:auto-cols-auto w-full h-fit justify-evenly gap-4 lg:gap-8 p-8">
      {currentImages.slice(0, 3).map((image: Blender, index: number) => {
        return (
          <div
            key={index}
            className={`h-fit w-full relative`}
          >
            <div
              className={`rounded-lg w-fit h-fit border-2 border-offBlack relative flex ${
                blur && "blur-sm animate-unblur"
              }`}
            >
              <Image
                src={image.image}
                height={300}
                width={300}
                priority
                onLoadingComplete={() => setBlur(false)}
                blurDataURL={image.blurred}
                className="rounded-md"
                draggable={false}
                
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
