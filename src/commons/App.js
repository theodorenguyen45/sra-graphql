import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { auth } from 'firebase/firebase.utils';
import Homepage from 'pages/homepage/Home';
import ShopPage from 'pages/shop/Shop';
import SignInAndSignUpPage from 'pages/signin-and-signup/Signin-Signup';
import Header from 'components/header/Header';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubcribeFromAuth = null;

  componentDidMount() {
    this.unsubcribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </>
    );
  }
}

export default App;
