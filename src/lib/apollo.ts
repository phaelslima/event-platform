import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ov9xkr1cqr01xl5q6da37n/master',
  cache: new InMemoryCache()
})