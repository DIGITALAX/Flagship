import { FunctionComponent, JSX } from "react";
import TileSwitch from "./TileSwitch";
import { Publication, TilesProps } from "../types/distro.types";
import dynamic from "next/dynamic";

const Masonry = dynamic(() => import("masonic").then(mod => mod.Masonry), {
  ssr: false,
});
const Tiles: FunctionComponent<TilesProps> = ({
  searchLoading,
  searchItems,
  filterConstants,
  dict,
}): JSX.Element => {
  const renderTile = ({
    data,
    index,
  }: {
    index: number;
    data: Publication;
  }) => {
    return (
      <TileSwitch
        dict={dict}
        type={data?.type}
        filterConstants={filterConstants}
        publication={data}
        index={index + searchItems?.length}
      />
    );
  };
  return (
    <div
      className={`relative z-0 w-full flex pt-6 overflow-y-scroll h-full ${
        (searchLoading || searchItems?.length < 1) && "animate-pulse"
      }`}
      id="tileSearch"
    >
      <Masonry
        overscanBy={300}
        key={
          searchLoading || searchItems?.length < 1 ? 20 : searchItems?.length
        }
        items={
          searchLoading || searchItems?.length < 1
            ? Array.from({ length: 20 }, (_) => ({
                id: Math.random(),
                type: "loader",
              }))
            : searchItems
        }
        id="tileSearch"
        render={renderTile as any}
        columnGutter={50}
        maxColumnCount={
          typeof window !== "undefined" && window.innerWidth < 1280 ? 1 : 2
        }
        columnWidth={100}
        itemHeightEstimate={1000}
      />
    </div>
  );
};

export default Tiles;
