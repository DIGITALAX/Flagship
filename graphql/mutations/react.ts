import { FetchResult } from "@apollo/client";
import { AddReactionDocument, AddReactionMutation, ReactionRequest } from "../../types/generated";
import { apolloClient } from "../../lib/lens/client";

const addReaction = async (
  request: ReactionRequest
): Promise<FetchResult<AddReactionMutation>> => {
  return await apolloClient.mutate({
    mutation: AddReactionDocument,
    variables: {
      request,
    },
    fetchPolicy: "no-cache",
  });
};

export default addReaction;
