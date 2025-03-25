import { FunctionComponent, JSX } from "react";
import { PrintTypeProps } from "../types/distro.types";

const PrintType: FunctionComponent<PrintTypeProps> = ({
  printType,
}): JSX.Element => {
  return (
    <div
      className="relative flex flex-row w-fit px-1.5 py-1 h-fit text-white font-aust gap-1 items-center justify-center"
      style={{
        backgroundColor:
          printType === "hoodie"
            ? "#32C5FF"
            : printType === "shirt"
            ? "#6236FF"
            : printType === "poster"
            ? "#FFC800"
            : printType === "sleeve"
            ? "#29C28A"
            : "#B620E0",
      }}
    >
      <div className="relative w-2 h-2 rounded-full bg-white flex items-center justify-center"></div>
      <div className="relative w-fit h-fit flex items-center justify-center text-xxs">
        {printType}
      </div>
    </div>
  );
};
export default PrintType;
