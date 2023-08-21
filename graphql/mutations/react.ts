import { gql } from "@apollo/client";
import { apolloClient } from "../../lib/lens/client";

export const ADD_REACTION = `mutation AddReaction($request: ReactionRequest!) {
    addReaction(request: $request)
  }`;

const addReaction = (request: any) => {
  return apolloClient.mutate({
    mutation: gql(ADD_REACTION),
    variables: {
      request: request,
    },
    fetchPolicy: "no-cache",
  });
};

export default addReaction;
