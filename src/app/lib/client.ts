import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const httpLinkPrint = new HttpLink({
  uri: "/api/graphql/print",
});

export const graphPrintClient = new ApolloClient({
  link: httpLinkPrint,
  cache: new InMemoryCache(),
});

const httpLinkKinora = new HttpLink({
  uri: "/api/graphql/kinora",
});

export const graphKinoraClient = new ApolloClient({
  link: httpLinkKinora,
  cache: new InMemoryCache(),
});
