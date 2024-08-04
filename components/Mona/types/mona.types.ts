import { NextRouter } from "next/router";
import { MutableRefObject } from "react";

export type MonaProps = {
  router: NextRouter;
  rewind: MutableRefObject<HTMLDivElement | null>;

};
