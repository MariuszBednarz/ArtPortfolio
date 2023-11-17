import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const httpLink = new HttpLink({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cla6oo57y09j701uqduxb0zuv/master", // Zastąp swoim endpointem GraphQL
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
