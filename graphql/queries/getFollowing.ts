import { ApolloQueryResult, gql } from "@apollo/client";
import { apolloClient } from "../../lib/lens/client";

const FOLLOWING = `
query Profile($request: SingleProfileQueryRequest!, $profileId: ProfileId) {
  profile(request: $request) {
    isFollowing(who: $profileId)
  }
}
`;

export const getFollowingAuth = async (
  request: any,
  profileId: any
): Promise<ApolloQueryResult<any>> => {
  return apolloClient.query({
    query: gql(FOLLOWING),
    variables: {
      request,
      profileId,
    },
    fetchPolicy: "no-cache",
  });
};
