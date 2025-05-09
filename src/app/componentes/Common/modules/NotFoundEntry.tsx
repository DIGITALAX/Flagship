"use client";

import { useRouter } from "next/navigation";

export default function NotFoundEntry({ dict }: { dict: any }) {
  const router = useRouter();
  return (
    <div className="relative min-h-screen min-w-screen h-screen w-screen flex items-center justify-center cursor-sewingS">
      <h1 className="relative w-fit h-fit flex flex-row gap-2 items-center justify-center text-mainText font-fira p-6 text-center">
        {dict?.[404]?.glitch} 
        <div
          onClick={() => router.push("/")}
          className="hover:opacity-80 cursor-sewingHS flex items-center justify-center relative"
        >
          {dict?.[404]?.home}
        </div>
      </h1>
    </div>
  );
}
