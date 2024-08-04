import { FunctionComponent } from "react";

const TipoCambio: FunctionComponent<{
  tipo: boolean;
}> = ({ tipo }) => {
  switch (tipo) {
    case false:
      return (
        <div className="relative w-full h-fit flex items-center justify-start flex-col gap-4"></div>
      );

    default:
      return (
        <div className="relative w-full h-fit flex items-center justify-start flex-col gap-4"></div>
      );
  }
};

export default TipoCambio;
