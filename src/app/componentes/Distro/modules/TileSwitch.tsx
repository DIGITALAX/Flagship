import { FunctionComponent } from "react";
import Chromadin from "./Chromadin";
import CoinOp from "./CoinOp";
import Quest from "./Quest";
import Listener from "./Listener";
import LoadTile from "./LoadTile";
import Award from "./Award";
import {
  Award as AwardType,
  Quest as QuestType,
  TileSwitchProps,
} from "./../types/distro.types";
import { Creation } from "../../Gallery/types/gallery.types";

const TileSwitch: FunctionComponent<TileSwitchProps> = ({
  type,
  publication,
  index,
  filterConstants,
  dict,
}) => {
  if (type?.toLowerCase() == "loader") {
    return <LoadTile index={index} />;
  }

  if (type?.toLowerCase() == "award") {
    return <Award publication={publication?.post as AwardType} dict={dict} />;
  }

  if (type?.toLowerCase() == "listener") {
    return <Listener publication={publication?.post as Creation} />;
  }

  if (type?.toLowerCase() == "chromadin") {
    return <Chromadin publication={publication?.post as Creation} />;
  }

  if (type?.toLowerCase() == "coinop" || type?.toLowerCase() == "f3m") {
    return (
      <CoinOp
        filterConstants={filterConstants}
        publication={publication?.post as Creation}
      />
    );
  }

  return <Quest dict={dict} publication={publication?.post as QuestType} />;
};

export default TileSwitch;
