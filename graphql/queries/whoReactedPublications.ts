import { gql } from "@apollo/client";
import { authClient } from "../../lib/lens/client";

const WHO_REACTED_PUBLICATION = `
query WhoReactedPublication($request: WhoReactedPublicationRequest!) {
    whoReactedPublication(request: $request) {
      items {
        reactionId
        reaction
        reactionAt
        profile {
          ...ProfileFields
        }
      }
      pageInfo {
        prev
        next
        totalCount
      }
    }
  }
  
  fragment MediaFields on Media {
    url
    width
    height
    mimeType
  }
  
  
  fragment ProfileFields on Profile {
    id
    name
    bio
    attributes {
      displayType
      traitType
      key
      value
    }
    isFollowedByMe
    isFollowing(who: null)
    followNftAddress
    metadata
    isDefault
    handle
    picture {
      ... on NftImage {
        contractAddress
        tokenId
        uri
        verified
      }
      ... on MediaSet {
        original {
          ...MediaFields
        }
        small {
          ...MediaFields
        }
        medium {
          ...MediaFields
        }
      }
    }
    coverPicture {
      ... on NftImage {
        contractAddress
        tokenId
        uri
        verified
      }
      ... on MediaSet {
        original {
          ...MediaFields
        }
        small {
          ...MediaFields
        }
        medium {
          ...MediaFields
        }
      }
    }
    ownedBy
    dispatcher {
      address
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
      ...FollowModuleFields
    }
  }
  
  fragment FollowModuleFields on FollowModule {
    ... on FeeFollowModuleSettings {
      type
      amount {
        asset {
          name
          symbol
          decimals
          address
        }
        value
      }
      recipient
    }
    ... on ProfileFollowModuleSettings {
      type
      contractAddress
    }
    ... on RevertFollowModuleSettings {
      type
      contractAddress
    }
    ... on UnknownFollowModuleSettings {
      type
      contractAddress
      followModuleReturnData
    }
  }
`;

const whoReactedublications = (pubId: any) => {
  return authClient.query({
    query: gql(WHO_REACTED_PUBLICATION),
    variables: {
      request: pubId,
    },
    fetchPolicy: "no-cache",
  });
};

export default whoReactedublications;
