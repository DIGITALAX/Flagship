import { graphPrintClient } from "@/app/lib/client";
import { FetchResult, gql } from "@apollo/client";

export const getAllCollections = async (
  first: number,
  skip: number
): Promise<FetchResult | void> => {
  let timeoutId: NodeJS.Timeout | undefined;
  const queryPromise = graphPrintClient.query({
    query: gql(`
    query($first: Int, $skip: Int) {
      collectionCreateds(first: $first, skip: $skip, orderDirection: desc, orderBy: postId) {
        amount
        drop {
          dropId
          uri
          metadata {
          cover
          title
        }
        }
        metadata {
          access
          visibility
          video
          title
          onChromadin
          sex
          style
          tags
          prompt
          sizes
          microbrand
          mediaTypes
          mediaCover
          id
          description
          audio
          colors
          images
          microbrandCover
        }
        postId
        acceptedTokens
        uri
        printType
        price
        designer
        tokenIdsMinted
        fulfiller
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
    query($first: Int, $skip: Int, $orderDirection: String) {
      collectionCreateds(first: $first, skip: $skip, orderDirection: $orderDirection, orderBy: postId, origin: $origin, collectionMetadata_: {mediaTypes_contains_nocase: "static"}) {
        uri
        metadata {
          access
          visibility
          video
          title
          onChromadin
          sex
          style
          tags
          prompt
          sizes
          microbrand
          mediaTypes
          mediaCover
          id
          description
          audio
          colors
          images
          microbrandCover
        }
       
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
