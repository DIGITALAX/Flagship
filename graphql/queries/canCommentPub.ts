import { gql } from "@apollo/client";
import {  authClient } from "../../lib/lens/client";

const CAN_COMMENT = `
query Publication($request: PublicationQueryRequest!, $profileId: ProfileId) {
  publication(request: $request) {
    __typename 
    ... on Post {
      canComment(profileId: $profileId) {
        result
      }
    }
    ... on Mirror {
      canComment(profileId: $profileId) {
        result
      }
    }
    ... on Comment {
      canComment(profileId: $profileId) {
          result
      }
    }
  }
}
`;

const canCommentPub = (request: any, profileId: any) => {
  return authClient.query({
    query: gql(CAN_COMMENT),
    variables: {
      request,
      profileId,
    },
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  });
};

export default canCommentPub;
