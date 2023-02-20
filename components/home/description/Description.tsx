import { FunctionComponent } from "react";

const Description: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative w-full h-fit grid grid-flow-row auto-rows-auto justify-center bg-offBlack px-2 galaxy:px-4 md:px-8 py-16 gap-6">
      <div
        id="world"
        className="text-center font-mag break-word pt-3 w-fit h-fit relative place-self-center text-2xl sm:text-5xl"
      >
        Our worlds are run by interfaces,
        <br /> machine code, and APIs.
      </div>
      <div className="relative h-fit text-skyBlue font-fut w-fit text-left text-xs place-self-center text-sm min-w-fit sm:text-base md:text-xl break-word">
        Here cypherpunks write prompts, design across multiple dimensions by
        hand, and build the end to end decentralize-it-yourself network economy.
        <br />
        <br />
        We create fashion, co•operate complex machinery, and collect NFTs as
        conductors for what move people to action in every reality –– virtual,
        latent, or IRL. We are drawn as if by a dreaming machine to works that
        have something to say through their stunning appearance, the novel
        status they carry, and innate keys to social mobility in code.
      </div>
    </div>
  );
};

export default Description;
