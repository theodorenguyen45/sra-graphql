import React from 'react';
import SignIn from 'components/signin/SignIn';
import SignUp from 'components/signup/SignUp';

import './SignInSignUp.scss';

const SignInAndSignUpPage = () => {
  return (
    <div className='signin-signup'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
