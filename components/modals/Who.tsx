import { FunctionComponent } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ImCross } from "react-icons/im";
import Image from "next/image";
import { AiOutlineLoading } from "react-icons/ai";
import { setReactionState } from "../../redux/reducers/reactionStateSlice";
import createProfilePicture from "../../lib/lens/helpers/createProfilePicture";
import { WhoProps } from "../../types/general.types";

const Who: FunctionComponent<WhoProps> = ({
  loading,
  fetchMore,
  accounts,
  dispatch,
  hasMore,
  type,
}): JSX.Element => {
  return (
    <div className="inset-0 justify-center fixed z-20 bg-opacity-50 backdrop-blur-sm overflow-y-hidden grid grid-flow-col auto-cols-auto w-full h-auto">
      <div className="relative w-full md:w-[40vw] lg:w-[25vw] h-fit col-start-1 place-self-center bg-black rounded-lg">
        <div className="relative w-full row-start-2 h-fit rounded-xl grid grid-flow-col auto-cols-auto">
          <div className="relative w-full h-full col-start-1 rounded-xl place-self-center">
            <div className="relative w-full h-full flex flex-col items-center justify-center gap-4 pb-8">
              <div className="relative w-fit h-fit items-end justify-end ml-auto pr-3 pt-3 cursor-pointer flex">
                <ImCross
                  color="white"
                  size={10}
                  onClick={() =>
                    dispatch(
                      setReactionState({
                        actionOpen: false,
                        actionType: "",
                        actionValue: "",
                        actionResponseReact: "",
                      })
                    )
                  }
                />
              </div>
              {!loading ? (
                <>
                  {accounts?.length > 0 && (
                    <div className="relative w-full h-fit flex flex-col">
                      <InfiniteScroll
                        hasMore={hasMore}
                        dataLength={accounts?.length}
                        next={fetchMore}
                        loader={""}
                        height={"10rem"}
                        className="relative w-full h-fit flex flex-col px-4 gap-2 overflow-y-scroll"
                      >
                        {accounts?.map((reacter: any, index: number) => {
                          const profileImage = createProfilePicture(
                            type === 0
                              ? reacter?.profile
                              : type === 1
                              ? reacter.defaultProfile
                              : reacter
                          );

                          return (
                            <div
                              key={index}
                              className="relative w-full h-fit p-2 drop-shadow-lg flex flex-row bg-gradient-to-r from-black via-gray-600 to-black auto-cols-auto rounded-lg border border-black font-vcr text-white cursor-pointer text-sm"
                              onClick={() =>
                                window.open(
                                  `https://chromadin.xyz/#chat?option=history&profile=${
                                    type === 0
                                      ? reacter?.profile?.handle?.split(
                                          ".lens"
                                        )[0]
                                      : type === 1 &&
                                        reacter?.defaultProfile?.handle?.split(
                                          ".lens"
                                        )[0]
                                  }`
                                )
                              }
                            >
                              <div className="relative w-fit h-fit flex flex-row gap-6">
                                <div
                                  className="relative w-6 h-6 rounded-full col-start-1"
                                  id="crt"
                                >
                                  {profileImage && (
                                    <Image
                                      src={profileImage}
                                      objectFit="cover"
                                      layout="fill"
                                      alt="pfp"
                                      className="relative w-fit h-fit rounded-full self-center flex"
                                      draggable={false}
                                    />
                                  )}
                                </div>
                                <div
                                  id="handle"
                                  className="relative w-fit h-fit justify-center flex"
                                >
                                  @
                                  {type == 1
                                    ? reacter.defaultProfile
                                      ? reacter.defaultProfile?.handle?.split(
                                          ".lens"
                                        )[0]
                                      : reacter.address.slice(0, 13)
                                    : (type === 0
                                        ? reacter?.profile
                                        : reacter
                                      )?.handle?.split(".lens")[0]}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </InfiniteScroll>
                    </div>
                  )}
                </>
              ) : (
                <div className="relative w-[40vw] md:w-full h-60 grid grid-flow-col auto-cols-auto">
                  <div className="relative w-fit h-fit col-start-1 place-self-center animate-spin">
                    <AiOutlineLoading color="white" size={20} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Who;
