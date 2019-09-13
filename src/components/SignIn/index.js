import React from 'react';

import { auth, signInWithGoogle } from 'firebase/FirebaseUtils';

import FormInput from 'components/FormInput';
import CustomButton from 'components/CustomButton';

import './style.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    };
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (err) {
      this.setState({ error: 'Wrong username or password' });
    }
  };

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>Already has an account?</h2>
        <span>Sign in with your email and password</span>
        {this.state.error && <p className='error'>{this.state.error}</p>}
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            label='email'
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />
          <FormInput
            name='password'
            type='password'
            label='password'
            handleChange={this.handleChange}
            value={this.state.password}
            required
          />
          <div className='buttons'>
            <CustomButton type='Submit'>Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
