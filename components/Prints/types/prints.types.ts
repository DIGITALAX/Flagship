import { NextRouter } from "next/router";
import { MutableRefObject } from "react";

export type PrintsProps = {
  rewind: MutableRefObject<HTMLDivElement | null>;
  changeColor: () => void;
  heartColor: string;
  router: NextRouter;
};
