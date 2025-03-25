"use client";

import { ModalContext } from "@/app/providers";
import { useContext } from "react";
import BookMessage from "./BookMessage";
import ImageLarge from "./ImageLarge";
import FullScreenVideo from "./FullScreenVideo";

export default function Modals() {
  const context = useContext(ModalContext);
  return (
    <>
      {context?.fullScreenVideo?.open && <FullScreenVideo />}
      {context?.imageViewer && <ImageLarge />}
      {context?.bookMessage?.open && <BookMessage />}
    </>
  );
}
