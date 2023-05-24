import Image from "next/image";
import { FunctionComponent } from "react";
import Marquee from "react-fast-marquee";
import useTemplates from "./hooks/useTemplates";

const Templates: FunctionComponent = (): JSX.Element => {
  const { collectionTemplates } = useTemplates();
  return (
    <Marquee gradient={false} speed={30} direction={"right"}>
      {collectionTemplates.map((image, index) => {
        return (
          <div
            key={index}
            className="relative w-60 h-60 rounded-md mr-4 place-self-center"
          >
            <Image
              src={`https://thedial.infura-ipfs.io/ipfs/${image}`}
              objectFit={"contain"}
              layout={"fill"}
              objectPosition="top"
              draggable={false}
            />
          </div>
        );
      })}
    </Marquee>
  );
};

export default Templates;
