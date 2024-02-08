import { FunctionComponent } from "react";
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
  const renderTile = ({
    index,
    data,
  }: {
    index: number;
    data: Publication;
  }) => {
    return (
      <TileSwitch
        type={data?.type}
        filterConstants={filterConstants}
        publication={data}
        index={index + searchItems?.items?.length}
        dispatch={dispatch}
      />
    );
  };
  return (
    <div className={`relative w-full flex pt-6 h-fit`} id="tileSearch">
      <InfiniteScroll
        dataLength={
          searchLoading
            ? 20
            : (searchItems?.items || [])?.length + (moreSearchLoading ? 20 : 0)
        }
        loader={<></>}
        scrollThreshold={1}
        hasMore={searchItems?.hasMore}
        next={handleMoreSearch}
        className={`w-full relative flex overflow-y-scroll h-[90rem] pt-6`}
        height={
          typeof window !== "undefined" && window.innerWidth < 768
            ? "40rem"
            : "90rem"
        }
      >
        <Masonry
          overscanBy={5}
          
          className="w-full h-[90rem] flex overflow-y-scroll"
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

          maxColumnCount={
            typeof window !== "undefined" &&
            window.innerWidth < 1280 &&
            window.innerWidth > 768
              ? 1
              : 2
          }
        />
      </InfiniteScroll>
    </div>
  );
};

export default Tiles;
