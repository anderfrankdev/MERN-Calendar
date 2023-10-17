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
  uri: "https://mern-calendar-backend-dev-tzer.2.us-1.fl0.io/graphql",
  cache:new InMemoryCache(),
  defaultOptions: defaultOptions
});
