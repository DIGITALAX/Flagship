import { NextPage } from "next";

const BuildLog: NextPage = (): JSX.Element => {
  return (
    <div className="min-w-screen min-h-screen h-full flex flex-col bg-windows justify-start items-center pb-28 px-8 pt-16 gap-32">
      <div className="relative w-full h-fit flex flex-col items-center justify-start gap-10 text-white font-bit">
        <div className="relative w-fit h-fit flex items-center justify-center gap-1 text-xl flex-col">
          <div>++ A visual record of ++</div>
          <div>++ what's been built & ++</div>
          <div>++ what's in development ++</div>
        </div>
        <div className="relative w-full h-fit flex items-start justify-center gap-4 text-left flex-col">
          <div className="relative w-fit h-fit flex items-start justify-center flex-col gap-1">
            <div className="relative w-fit h-fit flex items-center justify-start text-lg">
              But first, what's the point?
            </div>
            <div className="relative w-fit h-fit flex items-center justify-start text-sm">We know why you're here.</div>
          </div>
          <div className="relative w-fit h-fit flex items-start justify-center flex-col gap-1">
            <div className="relative w-fit h-fit flex items-center justify-start text-lg">
              Why start with web3fashion?
            </div>
            <div className="relative w-fit h-fit flex items-center justify-start text-sm"></div>
          </div>
          <div className="relative w-fit h-fit flex items-start justify-center flex-col gap-1">
            <div className="relative w-fit h-fit flex items-center justify-start text-lg">
              How do you break through barriers in creative markets?
            </div>
            <div className="relative w-fit h-fit flex items-center justify-start text-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildLog;
