import React from 'react';
import { connect } from 'react-redux';
import CustomButton from 'components/custom-button/Custom-Button';
import CartItem from 'components/cart-item/Cart-Item';
import { selectCartItems } from 'redux/cart/Cart.Selector';

import './Cart-Dropdown.scss';

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
