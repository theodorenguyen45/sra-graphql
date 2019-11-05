import React from 'react'

import { Query, Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

import CartDropdown from './index'

const TOGGLE_CART_HIDDEN = gql`
  mutation TOGGLE_CART_HIDDEN {
    toggleCartHidden @client
  }
`

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`

export default () => (
  <Mutation mutation={TOGGLE_CART_HIDDEN}>
    {toggleCartHidden => (
      <Query query={GET_CART_ITEMS}>
        {({ data }) => {
          const { cartItems } = data
          return (
            <CartDropdown
              cartItems={cartItems}
              toggleCartHidden={toggleCartHidden}
            />
          )
        }}
      </Query>
    )}
  </Mutation>
)
