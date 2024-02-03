import { NextRouter } from "next/router";
import { MutableRefObject } from "react";

export type FooterProps = {
  handleRewind: () => void;
};

export type HeaderProps = {
  rewind: MutableRefObject<HTMLDivElement | null>;
  changeColor: () => void;
  heartColor: string;
  handleShop: () => void;
  router: NextRouter;
};
