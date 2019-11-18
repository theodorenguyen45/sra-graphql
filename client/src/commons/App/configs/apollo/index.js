import { GRAPHQL_API_ENDPOINT } from 'commons/configs'
import { resolvers, typeDefs } from 'graphql/resolvers'

import { ApolloClient, InMemoryCache, ApolloLink, HttpLink } from 'apollo-boost'

export default new ApolloClient({
  link: ApolloLink.from([
    new HttpLink({
      uri: GRAPHQL_API_ENDPOINT
    })
  ]),
  cache: new InMemoryCache(),
  typeDefs,
  resolvers
})
