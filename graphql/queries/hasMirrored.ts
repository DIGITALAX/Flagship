import { gql } from "@apollo/client";
import { authClient } from "../../lib/lens/client";


const HAS_MIRRORED = `
query Publication($request: PublicationQueryRequest!, $profileId: ProfileId) {
    publication(request: $request) {
        __typename 
            ... on Post {
            mirrors(by: $profileId)
    }
    ... on Comment {
      mirrors(by: $profileId)
    }
    }
  }
`;

const hasMirroredPost = (request: any, profileId: any) => {
  return authClient.query({
    query: gql(HAS_MIRRORED),
    variables: {
      request,
      profileId,
    },
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  });
};

export default hasMirroredPost;
