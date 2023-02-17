import { FunctionComponent } from "react";
import { SocialProps } from "../../../types/general.types";
import Grid from "./Grid";
import GridSmall from "./GridSmall";

const Social: FunctionComponent<SocialProps> = ({
  getMoreFeed,
  publicationsFeed,
  queryWindowSize,
  queryWindowSizeMobile,
  queryWindowSizeXL,
  queryWindowSize300,
  reactionsFeed,
}): JSX.Element => {
  return (
    <div className="bg-offBlack w-full h-full relative">
      {queryWindowSizeMobile ? (
        <GridSmall
          queryWindowSize={queryWindowSize}
          publicationsFeed={publicationsFeed}
          getMoreFeed={getMoreFeed}
          queryWindowSizeMobile={queryWindowSizeMobile}
          queryWindowSizeXL={queryWindowSizeXL}
          queryWindowSize300={queryWindowSize300}
          reactionsFeed={reactionsFeed}
        />
      ) : (
        <Grid
          queryWindowSize={queryWindowSize}
          publicationsFeed={publicationsFeed}
          getMoreFeed={getMoreFeed}
          queryWindowSizeMobile={queryWindowSizeMobile}
          queryWindowSizeXL={queryWindowSizeXL}
          reactionsFeed={reactionsFeed}
        />
      )}
    </div>
  );
};

export default Social;
