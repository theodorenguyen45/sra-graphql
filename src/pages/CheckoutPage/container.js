import React from 'react'

import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

import CheckoutPage from './index'

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`

const GET_CART_TOTAL = gql`
  {
    total @client
  }
`

export default () => (
  <Query query={GET_CART_ITEMS}>
    {({ data }) => {
      const { cartItems } = data
      return (
        <Query query={GET_CART_TOTAL}>
          {({ data }) => {
            const { total } = data
            return (
              <CheckoutPage
                cartItems={cartItems}
                total={total}
              />
            )
          }}
        </Query>
      )
    }}
  </Query>
)
