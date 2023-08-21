import { FetchResult, gql } from "@apollo/client";
import { authClient } from "../../lib/lens/client";

const AUTHENTICATE_LOGIN = `
mutation Authenticate($request: SignedAuthChallenge!) { 
  authenticate(request: $request) {
    accessToken
    refreshToken
  }
}
`;

const authenticate = async (
  address: string | undefined,
  signature: string
): Promise<FetchResult<any, Record<string, any>, Record<string, any>>> => {
  return authClient.mutate({
    mutation: gql(AUTHENTICATE_LOGIN),
    variables: {
      request: {
        address,
        signature,
      },
    },
  });
};

export default authenticate;
