import React from 'react'

import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

import Header from './index'

const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`

export default () => (
  <Query query={GET_CART_HIDDEN}>
    {({ data: { cartHidden } }) => (
      <Header hidden={cartHidden} />
    )}
  </Query>
)
