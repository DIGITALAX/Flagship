import { FunctionComponent } from "react";

const World: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative w-screen h-fit grid grid-flow-col auto-col-auto items-center justify-center bg-gradient-to-r from-grad1 via-grad2 to-grad3 pt-0.5 pb-0.5">
      <div className="text-center font-lib text-offBlack bg-offWhite text-[4vw] break-word sm:text-[2.1vw] sm:whitespace-nowrap py-3 w-screen h-full">
        TOMORROW’S SO CALLED REAL WORLD… WILL IT EVER BE THE WAY WE REMEMBER?
      </div>
    </div>
  );
};

export default World;
