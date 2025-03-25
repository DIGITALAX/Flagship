import { graphPrintClient } from "@/app/lib/client";
import { FetchResult, gql } from "@apollo/client";


export const getAllCollections = async (
  first: number,
  skip: number
): Promise<FetchResult | void> => {
  let timeoutId: NodeJS.Timeout | undefined;
  const queryPromise = graphPrintClient.query({
    query: gql(`
    query($first: Int, $skip: Int, $orderBy: String) {
      collectionCreateds(first: $first, skip: $skip, orderDirection: desc, orderBy: blockTimestamp) {
        amount
        dropMetadata {
          dropCover
          dropTitle
        }
        collectionMetadata {
          access
          visibility
          video
          title
          onChromadin
          sex
          style
          tags
          prompt
          profileHandle
          sizes
          microbrand
          mediaTypes
          mediaCover
          id
          description
          audio
          colors
          communities
          images
          microbrandCover
        }
        pubId
        profileId
        acceptedTokens
        uri
        printType
        prices
        owner
        soldTokens
        fulfillerPercent
        fulfillerBase
        fulfiller
        designerPercent
        dropId
        dropCollectionIds
        collectionId
        unlimited
        origin
        blockTimestamp
      }
    }
  `),
    variables: {
      first,
      skip,
    },
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  });

  const timeoutPromise = new Promise((resolve) => {
    timeoutId = setTimeout(() => {
      resolve({ timedOut: true });
    }, 60000);
    return () => clearTimeout(timeoutId);
  });

  const result: any = await Promise.race([queryPromise, timeoutPromise]);

  timeoutId && clearTimeout(timeoutId);
  if (result.timedOut) {
    return;
  } else {
    return result;
  }
};

export const getGallery = async (
  first: number,
  skip: number,
  orderDirection: string
): Promise<FetchResult | void> => {
  let timeoutId: NodeJS.Timeout | undefined;
  const queryPromise = graphPrintClient.query({
    query: gql(`
    query($first: Int, $skip: Int, $orderDirection: String, $orderBy: String) {
      collectionCreateds(first: $first, skip: $skip, orderDirection: $orderDirection, orderBy: blockTimestamp, origin: $origin, collectionMetadata_: {mediaTypes_contains_nocase: "static"}) {
        amount
        dropMetadata {
          dropCover
          dropTitle
        }
        collectionMetadata {
          access
          visibility
          video
          title
          onChromadin
          sex
          style
          tags
          prompt
          profileHandle
          sizes
          microbrand
          mediaTypes
          mediaCover
          id
          description
          audio
          colors
          communities
          images
          microbrandCover
        }
        pubId
        profileId
        acceptedTokens
        uri
        printType
        prices
        owner
        soldTokens
        fulfillerPercent
        fulfillerBase
        fulfiller
        designerPercent
        dropId
        dropCollectionIds
        collectionId
        unlimited
        origin
        blockTimestamp
      }
    }
  `),
    variables: {
      first,
      skip,
      orderDirection,
    },
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  });

  const timeoutPromise = new Promise((resolve) => {
    timeoutId = setTimeout(() => {
      resolve({ timedOut: true });
    }, 60000);
    return () => clearTimeout(timeoutId);
  });

  const result: any = await Promise.race([queryPromise, timeoutPromise]);

  timeoutId && clearTimeout(timeoutId);
  if (result.timedOut) {
    return;
  } else {
    return result;
  }
};
