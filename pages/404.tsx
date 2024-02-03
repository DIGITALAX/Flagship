import { NextPage } from "next";
import Link from "next/link";
import Header from "../components/Layout/components/Header";

const Custom404: NextPage = (): JSX.Element => {
  return (
    <div className="relative min-h-screen min-w-screen h-screen w-screen grid grid-flow-col auto-cols-auto cursor-sewingS">
      <div className="relative w-fit h-fit place-self-center text-mainText font-fira p-6 text-center">
        There's been a glitch in the fabric. Find your way back{" "}
        <Link href="/">
          <a className="hover:opacity-80 cursor-sewingHS">home.</a>
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
