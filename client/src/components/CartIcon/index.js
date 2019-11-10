import React from 'react'

import { ReactComponent as ShoppingIcon } from 'assets/shopping-bag.svg'
import './style.scss'

export default ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
)
