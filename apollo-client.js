import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
const endpoint = process.env.NEXT_PUBLIC_ENDPOINT;

const httpLink = new HttpLink({
  uri: endpoint, // Zastąp swoim endpointem GraphQL
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
