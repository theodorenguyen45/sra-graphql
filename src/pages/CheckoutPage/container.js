import React from 'react'

import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

import CheckoutPage from './index'

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`

export default () => (
  <Query query={GET_CART_ITEMS}>
    {({ data }) => {
      const { cartItems } = data
      return <CheckoutPage cartItems={cartItems} />
    }}
  </Query>
)
