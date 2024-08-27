import { HttpLink } from "@apollo/client";

import {
  registerApolloClient,
  InMemoryCache,
  ApolloClient,
} from "@apollo/experimental-nextjs-app-support";

const endpoint = process.env.NEXT_PUBLIC_ENDPOINT;

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: endpoint,
    }),
  });
});
