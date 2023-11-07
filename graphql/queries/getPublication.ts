import { FetchResult } from "@apollo/client";
import {
  PublicationDocument,
  PublicationQuery,
  PublicationRequest,
} from "../../types/generated";
import { apolloClient, authClient } from "../../lib/lens/client";

export const getPublicationAuth = async (
  request: PublicationRequest
): Promise<FetchResult<PublicationQuery>> => {
  return await apolloClient.query({
    query: PublicationDocument,
    variables: {
      request,
    },
    fetchPolicy: "no-cache",
  });
};

export const getPublication = async (
  request: PublicationRequest
): Promise<FetchResult<PublicationQuery>> => {
  return await authClient.query({
    query: PublicationDocument,
    variables: {
      request,
    },
    fetchPolicy: "no-cache",
  });
};
