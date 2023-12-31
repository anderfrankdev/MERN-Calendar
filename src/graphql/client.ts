import { ApolloClient, DefaultOptions, InMemoryCache } from "@apollo/client";
const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
  mutate: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}
export const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache:new InMemoryCache(),
  defaultOptions: defaultOptions
});
