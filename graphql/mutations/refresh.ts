import { gql } from "@apollo/client";
import { authClient } from "../../lib/lens/client";

const REFRESH_LOGIN = `
mutation Refresh($request: RefreshRequest!) {
  refresh(request: $request) {
    accessToken
    refreshToken
  }
}
`;

const refresh = async (refreshToken: string): Promise<any> => {
  return authClient.mutate({
    mutation: gql(REFRESH_LOGIN),
    variables: {
      request: {
        refreshToken,
      },
    },
  });
};

export default refresh;
