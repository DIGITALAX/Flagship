import { FunctionComponent } from "react";
import { ImCross } from "react-icons/im";
import { setNoHandle } from "../../redux/reducers/noHandleSlice";
import { NoHandleProps } from "../../types/general.types";
import Image from "next/legacy/image";
import { INFURA_GATEWAY } from "../../lib/lens/constants";

const NoHandle: FunctionComponent<NoHandleProps> = ({
  dispatch,
}): JSX.Element => {
  return (
    <div className="inset-0 justify-center fixed z-20 bg-opacity-50 backdrop-blur-sm overflow-y-hidden grid grid-flow-col auto-cols-auto w-full h-auto">
      <div className="relative w-full preG:w-80 h-fit col-start-1 place-self-center bg-mainBg rounded-lg border border-mainText">
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          {/* <div className="absolute w-full h-full flex items-start opacity-40">
            <Image
              src={`${INFURA_GATEWAY}/ipfs/Qma4968Gu8irNB74GJqg9xMqs8g4aDYqsx5pTUgJAUBD28`}
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute w-full h-full flex bg-black/50 rounded-lg"></div>
          </div> */}
          <div className="relative w-full h-full flex flex-col gap-10 pb-8 items-center justify-center">
            <div className="relative w-full ml-auto h-fit flex justify-end items-start pr-3 pt-3 cursor-sewingHS mt-auto">
              <ImCross
                color="#FBDB86"
                size={12}
                onClick={() => dispatch(setNoHandle(false))}
              />
            </div>
            <div className="relative w-full h-full flex flex-col gap-8 items-center justify-center">
              <div className="relative w-3/4 h-fit flex px-4 text-mainText text-base items-center justify-center break-words font-dosis text-center">
                Own Your Digital Roots. Claim A Lens Handle to Sign In &
                Collect.
              </div>
              <a
                target="_blank"
                rel="noreferrer"
                href={"https://claim.lens.xyz"}
                onClick={() => dispatch(setNoHandle(false))}
                className="relative w-fit h-fit px-3 py-2 flex  font-dosis rounded-md cursor-sewingHS active:scale-95"
              >
                <Image
                  src={`${INFURA_GATEWAY}/ipfs/QmfDmMCcgcseCFzGam9DbmDk5sQRbt6zrQVhvj4nTeuLGq`}
                  layout="fill"
                  alt="backdrop"
                  priority
                  draggable={false}
                  className="rounded-md w-full h-full"
                />
                <div className="relative text-ama w-20 h-8 flex items-center justify-center">
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
