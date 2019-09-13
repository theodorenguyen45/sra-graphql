import React from 'react';

import SignIn from 'components/SignIn/';
import SignUp from 'components/SignUp';

import './style.scss';

const SignInAndSignUpPage = () => {
  return (
    <div className='signin-signup'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
