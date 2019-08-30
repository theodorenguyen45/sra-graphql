import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from 'pages/homepage/Home';
import ShopPage from 'pages/shop/Shop';
import SignInAndSignUpPage from 'pages/signin-and-signup/Signin-Signup';
import Header from 'components/header/Header';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </>
  );
}

export default App;
