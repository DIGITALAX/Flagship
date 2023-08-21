import { FunctionComponent } from "react";
import { ImCross } from "react-icons/im";
import { setNoHandle } from "../../redux/reducers/noHandleSlice";
import { NoHandleProps } from "../../types/general.types";

const NoHandle: FunctionComponent<NoHandleProps> = ({
  dispatch,
}): JSX.Element => {
  return (
    <div className="inset-0 justify-center fixed z-20 bg-opacity-50 backdrop-blur-sm overflow-y-hidden grid grid-flow-col auto-cols-auto w-full h-auto">
      <div className="relative w-full preG:w-80 h-96 col-start-1 place-self-center bg-black rounded-lg border border-white">
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <div className="absolute w-full h-full flex items-start opacity-40">
            <video
              muted
              playsInline
              autoPlay
              loop
              className="relative w-full h-full rounded-lg flex items-start justify-start object-cover"
            >
              <source src={"/videos/lens.mp4"} type="video/mp4" />
            </video>
            <div className="absolute w-full h-full flex bg-black/70 rounded-lg"></div>
          </div>
          <div className="relative w-full h-full flex flex-col gap-10 pb-8 items-center justify-center">
            <div className="relative w-full ml-auto h-fit flex justify-end items-start pr-3 pt-3 cursor-pointer mt-auto">
              <ImCross
                color="white"
                size={15}
                onClick={() => dispatch(setNoHandle(false))}
              />
            </div>
            <div className="relative w-full h-full flex flex-col gap-8 items-center justify-center">
              <div className="relative w-1/2 h-fit flex px-4 text-white text-base items-center justify-center break-words font-mana text-center">
                Own Your Digital Roots. Claim A Lens Handle to Sign In &
                Collect.
              </div>
              <a
                target="_blank"
                rel="noreferrer"
                href={"https://claim.lens.xyz"}
                className="relative w-fit h-10 flex px-4 cursor-pointer active:scale-95 bg-smo font-mana text-white rounded-md items-center justify-center"
              >
                <div className="relative w-fit h-fit items-center justify-center flex text-sm px-3 py-1.5 text-center">
                  Claim Handle
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoHandle;
