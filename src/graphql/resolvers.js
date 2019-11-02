import { gql } from 'apollo-boost'

import { addItemToCart } from './CartUtils'

export const typeDefs = gql`
  extend type Item {
    quantity: Int
  }
  extend type Mutation {
    ToggleCartHidden: Boolean!
    AddItemToCart(item: Item!): [Item]!
  }
`
const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`

export const resolvers = {
  Mutation: {
    toggleCartHidden: (_root, _args, _context) => {
      const { cartHidden } = _context.cache.readQuery({
        query: GET_CART_HIDDEN
      })

      _context.cache.writeQuery({
        query: GET_CART_HIDDEN,
        data: { cartHidden: !cartHidden }
      })

      return !cartHidden
    },
    addItemToCart: (_root, _args, _context) => {
      const { cartItems } = _context.cache.readQuery({
        query: GET_CART_ITEMS
      })

      const newCartItems = addItemToCart(cartItems, _args.item)

      _context.cache.writeQuery({
        query: GET_CART_ITEMS,
        data: { cartItems: newCartItems }
      })

      return newCartItems
    }
  }
}
