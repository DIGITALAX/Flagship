import { FetchResult } from "@apollo/client";
import { authClient } from "../../../lib/lens/client";
import {
  PublicationsDocument,
  PublicationsQuery,
  PublicationsRequest,
} from "@/lib/generated";

export const getPublications = async (
  request: PublicationsRequest
): Promise<FetchResult<PublicationsQuery>> => {
  try {
    return await authClient.query({
      query: PublicationsDocument,
      variables: {
        request,
      },
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    });
  } catch (err) {
    return await authClient.query({
      query: PublicationsDocument,
      variables: {
        request,
      },
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    });
  }
};
export default getPublications;
