import { FunctionComponent } from "react";
import DIY from "./DIY";
import Templates from "./Templates";
import Text from "./Text";
import TextSmall from "./TextSmall";

const Dials: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative w-full h-fit grid grid-flow-row auto-rows-auto pt-8 pb-8">
      <div className="relative w-full h-fit row-start-1 place-self-center lg:pl-28 lg:pr-28 md:pr-20 md:pl-20 md:flex hidden 2xl:place-content-center">
        <Text />
      </div>
      <div className="relative w-full h-fit row-start-1 place-self-center md:hidden flex">
        <TextSmall />
      </div>
      <div className="relative w-full h-fit row-start-2 place-self-center overflow-x-hidden p-4">
        <Templates />
      </div>
      <div className="relative w-full h-fit row-start-3 place-self-center">
        <DIY />
      </div>
    </div>
  );
};

export default Dials;
