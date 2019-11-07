import React from 'react'

import SignIn from 'components/SignIn'
import SignUp from 'components/SignUp'

import './style.scss'

export default () => (
  <div className='signin-signup'>
    <SignIn />
    <SignUp />
  </div>
)
