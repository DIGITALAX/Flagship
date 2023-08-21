import { gql } from "@apollo/client";
import { authClient } from "../../lib/lens/client";

const HAS_REACTED = `
query Publications($publicationsRequest: PublicationsQueryRequest!, $reactionRequest: ReactionFieldResolverRequest) {
  publications(request: $publicationsRequest) {
    items {
      __typename 
      ... on Post {
        reaction(request: $reactionRequest)
      }
      ... on Comment {
        reaction(request: $reactionRequest)
      }
      ... on Mirror {
        reaction(request: $reactionRequest)
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

const HAS_REACTED_INDI = `
query Publication($publicationRequest: PublicationQueryRequest!, $reactionRequest: ReactionFieldResolverRequest) {
  publication(request: $publicationRequest) {
    __typename 
     ... on Post {
      reaction(request: $reactionRequest)
    }
    ... on Comment {
      reaction(request: $reactionRequest)
    }
    ... on Mirror {
      reaction(request: $reactionRequest)
    }
  }
}
`;

export const hasReactedPost = (
  publicationsRequest: any,
  reactionRequest: any
) => {
  return authClient.query({
    query: gql(HAS_REACTED),
    variables: {
      publicationsRequest,
      reactionRequest,
    },
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  });
};

export const hasReactedIndi = (
  publicationRequest: any,
  reactionRequest: any
) => {
  return authClient.query({
    query: gql(HAS_REACTED_INDI),
    variables: {
      publicationRequest,
      reactionRequest,
    },
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  });
};
