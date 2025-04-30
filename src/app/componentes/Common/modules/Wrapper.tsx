import FooterEntry from "./FooterEntry";
import { JSX } from "react";
import ModalsEntry from "../../Modals/modules/ModalsEntry";

export default function Wrapper({
  dict,
  page,
}: {
  dict: any;
  page: JSX.Element;
}) {
  return (
    <>
      <div
        className="min-h-full h-auto min-w-screen w-screen relative selection:bg-skyBlue selection:text-dull cursor-sewingS bg-mainBg overflow-x-hidden flex flex-col"
        id="noScroll"
      >
        {page}
        <FooterEntry dict={dict} />
      </div>
      <ModalsEntry dict={dict} />
    </>
  );
}
