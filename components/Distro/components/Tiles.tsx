import { FunctionComponent, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import TileSwitch from "./TileSwitch";
import { Masonry } from "masonic";
import { Publication, TilesProps } from "../types/distro.types";

const Tiles: FunctionComponent<TilesProps> = ({
  handleMoreSearch,
  dispatch,
  searchLoading,
  searchItems,
  moreSearchLoading,
  filterConstants,
}): JSX.Element => {
  const renderTile = useCallback(
    ({ index, data }: { index: number; data: Publication }) => {
      return (
        <TileSwitch
          type={data?.type}
          filterConstants={filterConstants}
          publication={data}
          index={index}
          dispatch={dispatch}
        />
      );
    },
    [searchItems?.items?.length]
  );
  return (
    <div
      className={`relative w-full max-h-[90rem] h-fit overflow-y-scroll pt-6 flex items-start justify-center`}
      id="tileSearch"
    >
      <InfiniteScroll
        dataLength={
          searchLoading
            ? 20
            : (searchItems?.items || [])?.length + (moreSearchLoading ? 20 : 0)
        }
        loader={<></>}

        scrollThreshold={0.9}
        hasMore={searchItems?.hasMore}
        next={handleMoreSearch}
        className={`w-full h-full items-start justify-center flex`}
      >
        <Masonry
          // overscanBy={5}
          key={
            searchLoading
              ? 20
              : (searchItems?.items || [])?.length +
                (moreSearchLoading ? 20 : 0)
          }
          items={
            moreSearchLoading
              ? [
                  ...(searchItems?.items || []),
                  ...Array.from({ length: 20 }, (_) => ({
                    id: Math.random(),
                    type: "loader",
                  })),
                ]
              : searchLoading
              ? Array.from({ length: 20 }, (_) => ({
                  id: Math.random(),
                  type: "loader",
                }))
              : searchItems?.items || []
          }
          render={renderTile}
          columnGutter={50}
          maxColumnCount={2}
        />
      </InfiniteScroll>
    </div>
  );
};

export default Tiles;
