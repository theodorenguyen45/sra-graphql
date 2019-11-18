import React from 'react'

import { BrowserRouter } from 'react-router-dom'

import { ApolloProvider } from 'react-apollo'

import client from './apollo'

client.writeData({
  data: {
    cartHidden: true,
    cartItems: [],
    itemCount: 0,
    total: 0
  }
})

const AppWrapper = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>{children}</BrowserRouter>
    </ApolloProvider>
  )
}

export default AppWrapper
