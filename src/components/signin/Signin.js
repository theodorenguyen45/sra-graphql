import React from 'react';
import FormInput from 'components/form-input/Form-Input';

import './Signin.scss';
import CustomButton from 'components/custom-button/Custom-Button';

export default class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ email: '', password: '' });
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
          <CustomButton type='Submit'>Sign In</CustomButton>
        </form>
      </div>
    );
  }
}
