import { createSelector } from 'reselect'

const selectCart = state => state.cart

//From the state select Cart and return the CartItems
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
)

//From the selected CartItems calculate and return the quantity of the cart items
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
)

//From the state selected and return the hidden status of the Cart Dropdown
export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
)
