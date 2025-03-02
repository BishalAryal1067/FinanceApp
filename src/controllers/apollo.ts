import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client/core";

import { DebugLink } from "@storipress/apollo-vue-devtool";

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: import.meta.env.VITE_API_URL,
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: ApolloLink.from([httpLink, new DebugLink()]),
  cache,
});

export default apolloClient;
