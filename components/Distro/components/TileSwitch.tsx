import { FunctionComponent } from "react";
import Chromadin from "./Chromadin";
import CoinOp from "./CoinOp";
import Quest from "./Quest";
import Listener from "./Listener";
import LoadTile from "./LoadTile";
import Award from "./Award";
import {
  Award as AwardType,
  Creation,
  Quest as QuestType,
  TileSwitchProps,
} from "./../types/distro.types";

const TileSwitch: FunctionComponent<TileSwitchProps> = ({
  type,
  publication,
  index,
  dispatch,
  filterConstants,
  t,
}) => {
  if (type?.toLowerCase() == "loader") {
    return <LoadTile index={index} />;
  }

  if (type?.toLowerCase() == "award") {
    return (
      <Award
        dispatch={dispatch}
        publication={publication?.post as AwardType}
        t={t}
      />
    );
  }

  if (type?.toLowerCase() == "listener") {
    return (
      <Listener
        dispatch={dispatch}
        publication={publication?.post as Creation}
      />
    );
  }

  if (type?.toLowerCase() == "chromadin") {
    return (
      <Chromadin
        dispatch={dispatch}
        publication={publication?.post as Creation}
      />
    );
  }

  if (type?.toLowerCase() == "coinop" || type?.toLowerCase() == "f3m") {
    return (
      <CoinOp
        dispatch={dispatch}
        filterConstants={filterConstants}
        publication={publication?.post as Creation}
      />
    );
  }

  return <Quest t={t} publication={publication?.post as QuestType} />;
};

export default TileSwitch;
