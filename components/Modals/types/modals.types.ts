import { Dispatch } from "react";
import { AnyAction } from "redux";

export type ImageLargeProps = {
  mainImage: string;
  dispatch: Dispatch<AnyAction>;
  type: string;
};

export type RefactorElementProps = {
  setRefactorModal: (e: { open: boolean; transparency: boolean }) => void;
  transparency: boolean;
};
