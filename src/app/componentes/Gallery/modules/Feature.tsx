import Image from "next/legacy/image";
import { FunctionComponent, JSX } from "react";
import { FeatureProps } from "../types/gallery.types";
import { INFURA_GATEWAY_INTERNAL } from "@/app/lib/constants";

const Feature: FunctionComponent<FeatureProps> = ({
  title,
  image,
  router,
  link,
}): JSX.Element => {
  return (
    <div
      className="relative w-full h-96 border border-ruido flex items-center justify-center cursor-sewingHS bg-ruido"
      onClick={() =>
        link?.includes("https://") ? window.open(link) : router.push(link)
      }
    >
      <Image
        draggable={false}
        title={title}
        alt={title}
        layout="fill"
        src={`${INFURA_GATEWAY_INTERNAL}${image}`}
        objectFit="cover"
        priority
      />
      <div className="absolute bottom-2 font-bit text-white text-lg flex items-center justify-center right-2">
        {title}
      </div>
    </div>
  );
};

export default Feature;
