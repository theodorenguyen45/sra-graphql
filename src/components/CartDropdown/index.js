import React from 'react'

import { useHistory } from 'react-router-dom'

import CustomButton from 'components/CustomButton'
import CartItem from 'components/CartItem'

import './style.scss'

export default ({ cartItems, toggleCartHidden }) => {
  const history = useHistory()

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-message'>
            Your cart is empty
          </span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout')
          toggleCartHidden()
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  )
}
