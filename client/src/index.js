import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'

import { ApolloProvider } from 'react-apollo'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-boost'

import App from './commons/App'
import './index.css'
import * as serviceWorker from './commons/serviceWorker'

import { resolvers, typeDefs } from 'graphql/resolvers'

const httpLink = createHttpLink({
  uri: 'https://crwn-clothing.com'
})

const cache = new InMemoryCache()

const client = new ApolloClient({
  link: httpLink,
  cache,
  typeDefs,
  resolvers
})

client.writeData({
  data: {
    cartHidden: true,
    cartItems: [],
    itemCount: 0,
    total: 0
  }
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
