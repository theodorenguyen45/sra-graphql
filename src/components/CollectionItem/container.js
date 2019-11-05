import React from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'

import CollectionItem from './index'

const ADD_ITEM_TO_CART = gql`
  mutation AddItemToCart($item: Item!) {
    addItemToCart(item: $item) @client
  }
`

export default props => {
  const [addItemToCart] = useMutation(ADD_ITEM_TO_CART)

  return (
    <CollectionItem
      {...props}
      addItem={item => addItemToCart({ variables: { item } })}
    />
  )
}
