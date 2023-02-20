import { FunctionComponent } from "react";

const Description: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative w-full h-full min-h-fit grid grid-flow-row auto-rows-auto justify-center bg-offBlack p-8 gap-6">
      <div
        id="world"
        className="text-center font-mag break-word pt-3 w-fit h-full relative place-self-center text-5xl"
      >
        Our worlds are run by interfaces,
        <br /> machine code, and APIs.
      </div>
      <div className="relative h-full text-skyBlue font-fut w-fit text-left text-xs place-self-center text-xl break-word">
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
