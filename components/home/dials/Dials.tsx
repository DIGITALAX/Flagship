import { FunctionComponent } from "react";
import DIY from "./DIY";
import Templates from "./Templates";
import Text from "./Text";

const Dials: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative w-full h-fit grid grid-flow-row auto-rows-auto pt-8 pb-8">
      <div className="relative w-full h-fit row-start-1 place-self-center lg:px-28 md:px-20 px-4 flex 2xl:place-content-center">
        <Text />
      </div>
      <div className="relative w-full h-fit row-start-2 place-self-center overflow-x-hidden py-4">
        <Templates />
      </div>
      <div className="relative w-full h-fit row-start-3 place-self-center">
        <DIY />
      </div>
    </div>
  );
};

export default Dials;
