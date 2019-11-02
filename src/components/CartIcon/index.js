import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartItemsCount } from 'redux/cart/CartSelector'

import { ReactComponent as ShoppingIcon } from 'assets/shopping-bag.svg'
import './style.scss'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
)

const mapstateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

export default connect(mapstateToProps)(CartIcon)
