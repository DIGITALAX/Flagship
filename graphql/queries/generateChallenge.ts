import { gql } from "@apollo/client";
import { authClient } from "../../lib/lens/client";

const GET_CHALLENGE = `
  query($request: ChallengeRequest!) {
    challenge(request: $request) { text }
  }
`;

export const generateChallenge = (address?: string) => {
  return authClient.query({
    query: gql(GET_CHALLENGE),
    variables: {
      request: {
        address,
      },
    },
    fetchPolicy: "no-cache"
  });
};
export default generateChallenge;
