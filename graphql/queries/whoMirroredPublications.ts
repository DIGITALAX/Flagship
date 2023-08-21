import { gql } from "@apollo/client";
import { apolloClient,authClient } from "../../lib/lens/client";


const PROFILES = `
query Profiles($request: ProfileQueryRequest!) {
  profiles(request: $request) {
    items {
      id
      name
      bio
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
        __typename
      }
    }
    pageInfo {
      prev
      next
      totalCount
    }
  }
}
`;

export const whoMirroredPublications = (request: any) => {
  return authClient.query({
    query: gql(PROFILES),
    variables: {
      request: request,
    },
    fetchPolicy: "no-cache",
  });
};

export const getAllProfiles = (request: any) => {
  return apolloClient.query({
    query: gql(PROFILES),
    variables: {
      request: request,
    },
    fetchPolicy: "no-cache",
  });
};
