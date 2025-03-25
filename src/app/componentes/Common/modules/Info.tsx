import { FunctionComponent, JSX } from "react";
import { useDraggable } from "@dnd-kit/core";
import { InfoProps } from "../types/common.types";
import { CSS } from "@dnd-kit/utilities";

const Info: FunctionComponent<InfoProps> = ({
  setInfoOpen,
  dict,
  position,
}): JSX.Element => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "info",
  });

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Translate.toString(transform),
        position: "absolute",
        left: position.x,
        top: position.y,
      }}
      {...listeners}
      {...attributes}
      className="absolute sm:w-80 w-full h-fit flex items-start justify-start text-white font-nerd text-xs flex-col gap-2 border border-white bg-black p-2"
    >
      <div className="relative w-full h-fit flex items-center justify-between gap-3">
        <div className="relative w-fit h-fit flex">Info</div>
        <div
          className="relative w-fit h-fit flex cursor-sewingHS"
          onClick={() => setInfoOpen(false)}
        >
          <div className="relative w-5 h-5 flex text-black bg-white p-1 items-center justify-center text-center">
            x
          </div>
        </div>
      </div>
      <div className="relative w-full h-fit flex">
        <div className="relative w-full h-2 flex bg-white"></div>
      </div>
      <div
        className="relative w-full h-fit flex items-center justify-between whitespace-pre-line"
        dangerouslySetInnerHTML={{
          __html: dict?.common?.info,
        }}
      ></div>
    </div>
  );
};

export default Info;
