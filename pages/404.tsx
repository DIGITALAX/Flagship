import { NextRouter } from "next/router";

const Custom404 = ({ router }: { router: NextRouter }): JSX.Element => {
  return (
    <div className="relative min-h-screen min-w-screen h-screen w-screen flex items-center justify-center cursor-sewingS">
      <div className="relative w-fit h-fit flex flex-row gap-2 items-center justify-center text-mainText font-fira p-6 text-center">
        There's been a glitch in the fabric. Find your way back
        <div
          onClick={() => router.push("/")}
          className="hover:opacity-80 cursor-sewingHS flex items-center justify-center relative"
        >
          home.
        </div>
      </div>
    </div>
  );
};

export default Custom404;
