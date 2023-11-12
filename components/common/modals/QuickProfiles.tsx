import { FunctionComponent } from "react";
import {
  QuickProfilesInterface,
  QuickProfilesProps,
} from "../../../types/general.types";
import Image from "next/legacy/image";

const QuickProfiles: FunctionComponent<QuickProfilesProps> = ({
  quickProfiles,
}): JSX.Element => {
  return (
    <div
      className="relative w-full h-fit grid grid-flow-col auto-cols-auto overflow-x-scroll"
      id="hozScroll"
    >
      <div
        className="relative w-fit h-full overflow-x-scroll grid grid-flow-col auto-cols-auto gap-2"
        id="hozScroll"
      >
        {quickProfiles?.map(
          (profile: QuickProfilesInterface, index: number) => {
            return (
              <div
                key={index}
                className="relative rounded-full hover:opacity-70 h-10 w-10"
                id="crt"
              >
                {profile?.image && (
                  <Image
                    layout="fill"
                    className="rounded-full w-full h-full"
                    objectFit="cover"
                    draggable={false}
                    objectPosition={"center"}
                    src={profile?.image}
                  />
                )}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default QuickProfiles;
