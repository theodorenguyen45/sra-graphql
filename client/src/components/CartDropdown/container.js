import React from 'react'

import gql from 'graphql-tag'
import { useMutation, useQuery } from '@apollo/react-hooks'

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

export default () => {
  const [toggleCartHidden] = useMutation(TOGGLE_CART_HIDDEN)
  const {
    data: { cartItems }
  } = useQuery(GET_CART_ITEMS)

  return (
    <CartDropdown cartItems={cartItems} toggleCartHidden={toggleCartHidden} />
  )
}
