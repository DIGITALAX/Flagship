
import { ApolloQueryResult, gql } from "@apollo/client";
import { apolloClient, authClient } from "../../lib/lens/client";

const PROFILE = `
query Profile($request: SingleProfileQueryRequest!) {
    profile(request: $request) {
      id
      name
      bio
      isFollowedByMe
      attributes {
        displayType
        traitType
        key
        value
      }
      followNftAddress
      metadata
      isDefault
      picture {
        ... on NftImage {
          contractAddress
          tokenId
          uri
          verified
        }
        ... on MediaSet {
          original {
            url
            mimeType
          }
        }
        __typename
      }
      handle
      coverPicture {
        ... on NftImage {
          contractAddress
          tokenId
          uri
          verified
        }
        ... on MediaSet {
          original {
            url
            mimeType
          }
        }
        __typename
      }
      ownedBy
      dispatcher {
        address
        canUseRelay
      }
      stats {
        totalFollowers
        totalFollowing
        totalPosts
        totalComments
        totalMirrors
        totalPublications
        totalCollects
      }
      followModule {
        ... on FeeFollowModuleSettings {
          type
          amount {
            asset {
              symbol
              name
              decimals
              address
            }
            value
          }
          recipient
        }
        ... on ProfileFollowModuleSettings {
          type
        }
        ... on RevertFollowModuleSettings {
          type
        }
      }
    }
  }
`;

export const getOneProfile = async (
  request: any,
): Promise<ApolloQueryResult<any>> => {
  return authClient.query({
    query: gql(PROFILE),
    variables: {
      request,
    },
    fetchPolicy: "no-cache",
  });
};

export const getOneProfileAuth = async (
  request: any,
): Promise<ApolloQueryResult<any>> => {
  return apolloClient.query({
    query: gql(PROFILE),
    variables: {
      request,
    },
    fetchPolicy: "no-cache",
  });
};
