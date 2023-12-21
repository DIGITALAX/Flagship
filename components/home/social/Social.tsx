import { FunctionComponent } from "react";
import { SocialProps } from "../../../types/general.types";
import Grid from "./Grid";

const Social: FunctionComponent<SocialProps> = ({
  getMoreFeed,
  publicationsFeed,
  queryWindowSize,
  queryWindowSizeMobile,
  queryWindowSizeXL,
  dispatch,
  feedLoading,
}): JSX.Element => {
  return (
    <div className="bg-offBlack w-full h-fit relative">
      <Grid
        queryWindowSize={queryWindowSize}
        publicationsFeed={publicationsFeed}
        getMoreFeed={getMoreFeed}
        queryWindowSizeMobile={queryWindowSizeMobile}
        queryWindowSizeXL={queryWindowSizeXL}
        dispatch={dispatch}
        feedLoading={feedLoading}
      />
    </div>
  );
};

export default Social;
