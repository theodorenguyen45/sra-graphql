import React from 'react'

import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

import CartIcon from './index'

const TOGGLE_CART_HIDDEN = gql`
  mutation TOGGLE_CART_HIDDEN {
    toggleCartHidden @client
  }
`

export default () => (
  <Mutation mutation={TOGGLE_CART_HIDDEN}>
    {toggleCartHidden => (
      <CartIcon toggleCartHidden={toggleCartHidden} />
    )}
  </Mutation>
)
