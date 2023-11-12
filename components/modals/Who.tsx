import { FunctionComponent } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ImCross } from "react-icons/im";
import { WhoProps } from "../../types/general.types";
import { setReactionState } from "../../redux/reducers/reactionStateSlice";
import { Profile } from "../../types/generated";
import createProfilePicture from "../../lib/lens/helpers/createProfilePicture";
import Image from "next/legacy/image";
import { AiOutlineLoading } from "react-icons/ai";

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
      <div className="relative w-full md:w-[40vw] lg:w-[25vw] h-fit col-start-1 place-self-center bg-offBlack rounded-lg">
        <div className="relative w-full row-start-2 h-fit rounded-xl grid grid-flow-col auto-cols-auto">
          <div className="relative w-full h-full col-start-1 rounded-xl place-self-center">
            <div className="relative w-full h-full flex flex-col items-center justify-center gap-4 pb-8">
              <div className="relative w-fit h-fit items-end justify-end ml-auto pr-3 pt-3 cursor-sewingHS flex">
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
                        {accounts?.map((account: any, index: number) => {
                          const reacter: Profile =
                            type === 0 ? account.profile : account;

                          const profileImage = createProfilePicture(
                            reacter?.metadata?.picture
                          );

                          return (
                            <div
                              key={index}
                              className="relative w-full h-fit p-2 drop-shadow-lg flex flex-row bg-gradient-to-r from-offBlack via-gray-600 to-black auto-cols-auto rounded-lg border border-black font-dosis text-white cursor-sewingHS"
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
                                  {
                                    reacter?.handle?.suggestedFormatted
                                      ?.localName
                                  }
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
