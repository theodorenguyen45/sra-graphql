import React from 'react'

import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

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

export default () => {
  const {
    data: { cartItems }
  } = useQuery(GET_CART_ITEMS)
  const {
    data: { total }
  } = useQuery(GET_CART_TOTAL)

  return <CheckoutPage cartItems={cartItems} total={total} />
}
