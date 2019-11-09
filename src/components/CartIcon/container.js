import React from 'react'

import gql from 'graphql-tag'
import { useMutation, useQuery } from '@apollo/react-hooks'

import CartIcon from './index'

const TOGGLE_CART_HIDDEN = gql`
  mutation TOGGLE_CART_HIDDEN {
    toggleCartHidden @client
  }
`

const GET_ITEM_COUNT = gql`
  {
    itemCount @client
  }
`

export default () => {
  const [toggleCartHidden] = useMutation(TOGGLE_CART_HIDDEN)
  const {
    data: { itemCount }
  } = useQuery(GET_ITEM_COUNT)

  return <CartIcon toggleCartHidden={toggleCartHidden} itemCount={itemCount} />
}
