import { NextRouter } from "next/router";
import { MutableRefObject } from "react";

export type LogProps = {
    rewind: MutableRefObject<HTMLDivElement | null>;
    router: NextRouter;
  };