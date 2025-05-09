import { FunctionComponent, JSX } from "react";
import { LoadTileProps } from "../types/distro.types";

const LoadTile: FunctionComponent<LoadTileProps> = ({ index }): JSX.Element => {
  return (
    <div className="relative w-full h-fit flex items-center justify-center flex rounded-sm border border-cost p-4">
      <div className="relative flex flex-col h-fit w-full border border-white">
        <div
          className={`relative w-full flex`}
          style={{
            height: `${
              index % 2 == 0 ? "10rem" : index % 3 == 0 ? "20rem" : "40rem"
            }`,
          }}
          id="staticLoad"
        ></div>
      </div>
    </div>
  );
};

export default LoadTile;
