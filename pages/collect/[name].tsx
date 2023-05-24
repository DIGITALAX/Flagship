import Image from "next/image";
import React, { createContext, useEffect, useRef, useState } from "react";
import { Gallery, TokenDetailsProps } from "../../types/general.types";
import tokens from "./../api/tokens.json";
import { AiFillBackward } from "react-icons/ai";
import Metadata from "../../components/collect/Metadata";
import Connect from "../../components/common/connect/Connect";
import Approve from "./../../components/common/modals/Approve";
import useMetadata from "../../components/collect/hooks/useMetadata";
import { useAccount, useBalance } from "wagmi";
import Head from "next/head";
import { NextPage } from "next";
import { useRouter } from "next/router";

export const CollectContextDefault = {
  showApprovalModal: false,
  setShowApprovalModal: (showApproval: boolean) => {},
  approvedData: false,
  setApprovedData: (approved: boolean) => {},
  approvedSuccess: false,
  setApprovedSuccess: (approvedSuccess: boolean) => {},
};

export const CollectContext = createContext(CollectContextDefault);

export const getStaticPaths = async () => {
  const response = tokens.filter((token: Gallery) => token.realm);
  const paths = response.map((token: Gallery) => {
    return {
      params: {
        name: token.name.replaceAll(" ", "-").toLowerCase(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const name: string = context.params.name;
  const response = tokens.filter((token: Gallery) => token.realm);
  const renamedTokens = response.filter(
    (token: Gallery) =>
      token.name.replaceAll(" ", "-").toLowerCase() === name.toLowerCase()
  );
  return {
    props: { token: renamedTokens },
  };
};

const TokenDetails: NextPage<TokenDetailsProps> = ({
  token,
  heartColor,
}): JSX.Element => {
  const { address } = useAccount();
  const connect = useRef<null | HTMLDivElement>(null);
  const [showApprovalModal, setShowApprovalModal] = useState(
    CollectContextDefault.showApprovalModal
  );
  const [approvedData, setApprovedData] = useState(
    CollectContextDefault.approvedData
  );
  const [approvedSuccess, setApprovedSuccess] = useState(
    CollectContextDefault.approvedData
  );
  const {
    errorState,
    prepareNFTDataCollection,
    prepareNFTDataMarket,
    errorMessage,
    setAbiFunction,
    isSuccess,
    isError,
    collectMarket,
    collectNFT,
    loading,
    isLoading,
    data,
  } = useMetadata();
  const balance: any = useBalance({
    addressOrName: address,
    chainId: 1,
    watch: true,
  });
  const ethBalance = Number(balance.data?.formatted).toFixed(3);
  useEffect(() => {
    if (token[0].type === "collection") {
      setAbiFunction("collection");
      prepareNFTDataCollection(
        token[0].contract,
        token[0].price,
        token[0].amount
      );
      setApprovedData(true);
    } else {
      setAbiFunction("market");
      prepareNFTDataMarket(token[0].contract, token[0].price, token[0].amount);
      setApprovedData(data);
    }
  }, [
    errorState,
    address,
    ethBalance,
    errorMessage,
    approvedData,
    isError,
    isSuccess,
    data,
  ]);
  const router = useRouter();
  return (
    <CollectContext.Provider
      value={{
        approvedData,
        setShowApprovalModal,
        setApprovedData,
        showApprovalModal,
        approvedSuccess,
        setApprovedSuccess,
      }}
    >
      <div className="flex min-h-screen h-fit min-w-screen relative cursor-sewingS selection:bg-lightYellow selection:text-lightYellow bg-gradient-to-b from-mainBg via-white to-mainBg z-0">
        <Head>
          <title>{token[0].name}</title>
          <meta
            name="og:url"
            content={`https://digitalax.xyz/collect/${token[0].name
              .replaceAll(" ", "-")
              .toLowerCase()}`}
          />
          <meta name="og:title" content={token[0].name} />
          <meta name="og:description" content={token[0].description} />
          <meta
            name="og:image"
            content={`https://digitalax.xyz${token[0].image}`}
          />
          <meta name="twitter:card" content="summary" />
          <meta
            name="og:url"
            content={`https://digitalax.xyz/collect/${token[0].name
              .replaceAll(" ", "-")
              .toLowerCase()}`}
          />
          <meta
            name="og:image"
            content={`https://digitalax.xyz${token[0].image}`}
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@digitalax" />
          <meta name="twitter:creator" content="@digitalax" />
          <meta
            name="twitter:image"
            content={`https://digitalax.xyz${token[0].image}`}
          />
          <meta
            name="twitter:url"
            content={`https://digitalax.xyz/collect/${token[0].name
              .replaceAll(" ", "-")
              .toLowerCase()}`}
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="canonical"
            href={`https://digitalax.xyz/collect/${token[0].name
              .replaceAll(" ", "-")
              .toLowerCase()}`}
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
        </Head>
        {showApprovalModal && (
          <div
            className={`${
              !showApprovalModal && "hidden"
            } z-10 items-center justify-center fixed inset-0 w-full h-auto grid grid-flow-col auto-cols-auto backdrop-blur-sm`}
          >
            <Approve />
          </div>
        )}
        <div className="grid grid-flow-row auto-rows-auto w-full h-full">
          <div className="relative row-start-1 w-full h-fit grid grid-flow-col auto-cols-auto pb-28 galaxy:pb-0">
            <div
              onClick={() => router.back()}
              className="relative col-start-1 w-fit h-fit"
            >
              <div className="text-mainText font-fira left-7 self-center pt-8 pl-6 place-self-start h-fit w-fit top-7 opacity-80 hover:opacity-20 cursor-sewingHS row-start-1 pb-0 galaxy:pb-28">
                <AiFillBackward
                  color={heartColor}
                  size={25}
                  className="float-left mr-2"
                />{" "}
                Return
              </div>
            </div>
            <div
              className="row-start-2 col-start-1 galaxy:row-start-1 galaxy:col-start-2 w-fit h-fit hover:text-offBlue text-mainText underline underline-offset-4 cursor-pointer h-fit pt-8 pr-6 z-10 justify-self-start pl-6 galazy:pl-0 galaxy:justify-self-end"
              ref={connect}
            >
              <Connect />
            </div>
          </div>
          <div className="relative w-full h-fit row-start-2 border-t-4 border-lightWhite grid grid-flow-col auto-cols-auto">
            <div className="relative text-mainText col-start-1 place-self-start pl-4 sm:pr-14 pr-4 sm:pl-14 pt-8 pb-4 font-jacklane text-4xl sm:text-7xl place-self-start">
              {token[0].name.toUpperCase()}
            </div>
          </div>
          <div className="relative w-full row-start-3 h-fit bg-foot grid grid-flow-col auto-cols-auto pt-8 pb-8 border-b-8 border-t-8 border-lightWhite">
            <div className="relative w-full h-[120vw] sm:h-[90vw] md:[80vw] lg:h-[50vw] col-start-1 place-self-center">
              <Image
                priority
                layout="fill"
                objectFit="contain"
                unoptimized
                draggable={false}
                blurDataURL={token[0].blurred}
                placeholder="blur"
                loader={() =>
                  token[0]?.trueImage ? token[0].trueImage : token[0].image
                }
                src={token[0]?.trueImage ? token[0].trueImage : token[0].image}
              />
            </div>
          </div>
          <Metadata
            token={token}
            connect={connect}
            errorMessage={errorMessage}
            collectNFT={collectNFT}
            isLoading={isLoading}
            collectMarket={collectMarket}
            isSuccess={isSuccess}
            loading={loading}
            data={data}
          />
        </div>
      </div>
    </CollectContext.Provider>
  );
};

export default TokenDetails;
