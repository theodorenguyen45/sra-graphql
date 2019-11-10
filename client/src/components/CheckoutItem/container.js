import React from 'react'

import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'

import CheckoutItem from './index'

const ADD_ITEM_TO_CART = gql`
  mutation AddItemToCart($item: Item!) {
    addItemToCart(item: $item) @client
  }
`

const REMOVE_ITEM_FROM_CART = gql`
  mutation RemoveItemFromCart($item: Item!) {
    removeItemFromCart(item: $item) @client
  }
`

const CLEAR_ITEM_FROM_CART = gql`
  mutation ClearItemFromCart($item: Item!) {
    clearItemFromCart(item: $item) @client
  }
`

export default props => {
  const [addItemToCart] = useMutation(ADD_ITEM_TO_CART)
  const [removeItemFromCart] = useMutation(REMOVE_ITEM_FROM_CART)
  const [clearItemFromCart] = useMutation(CLEAR_ITEM_FROM_CART)

  return (
    <CheckoutItem
      {...props}
      addItem={item => addItemToCart({ variables: { item } })}
      removeItem={item => removeItemFromCart({ variables: { item } })}
      clearItem={item => clearItemFromCart({ variables: { item } })}
    />
  )
}
