import React from 'react'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from 'redux/user/UserSelector'

import { auth } from 'firebase/FirebaseUtils'

import { default as CartIcon } from 'components/CartIcon/container'
import { default as CartDropdown } from 'components/CartDropdown/container'

import { ReactComponent as Logo } from 'assets/crown.svg'
import './style.scss'

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>

    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/contact'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to={'/signin'}>
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {!hidden && <CartDropdown />}
  </div>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(Header)
