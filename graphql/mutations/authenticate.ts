import { FetchResult } from "@apollo/client";
import { authClient } from "../../lib/lens/client";
import {
  AuthenticateDocument,
  AuthenticateMutation,
  SignedAuthChallenge,
} from "../../types/generated";

const authenticate = async (
  request: SignedAuthChallenge
): Promise<FetchResult<AuthenticateMutation>> => {
  return await authClient.mutate({
    mutation: AuthenticateDocument,
    variables: {
      request,
    },
  });
};

export default authenticate;
