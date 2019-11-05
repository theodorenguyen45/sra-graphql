import React from 'react'

import { Mutation, Query } from 'react-apollo'
import { gql } from 'apollo-boost'

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

export default () => (
  <Mutation mutation={TOGGLE_CART_HIDDEN}>
    {toggleCartHidden => (
      <Query query={GET_ITEM_COUNT}>
        {({ data }) => {
          const { itemCount } = data
          return (
            <CartIcon
              toggleCartHidden={toggleCartHidden}
              itemCount={itemCount}
            />
          )
        }}
      </Query>
    )}
  </Mutation>
)
