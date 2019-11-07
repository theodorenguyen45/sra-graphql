import React from 'react'

import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

import Header from './index'

const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`

export default props => {
  const {
    data: { cartHidden }
  } = useQuery(GET_CART_HIDDEN)

  return <Header hidden={cartHidden} {...props} />
}
