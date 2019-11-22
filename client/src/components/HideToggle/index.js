import React from 'react'

import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`

export default () => {
  const {
    data: { cartHidden }
  } = useQuery(GET_CART_HIDDEN)

  if (!cartHidden)
    return <div style={{ width: '100%', height: '100vh', zIndex: 2 }} />
}
