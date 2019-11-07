import React from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

import {
  auth,
  createUserProfileDocument
} from 'firebase/FirebaseUtils'

import Homepage from 'pages/HomePage'
import ShopPage from 'pages/ShopPage'
import SignInAndSignUpPage from 'pages/SignInAndSignUpPage'
import { default as CheckoutPage } from 'pages/CheckoutPage/container'

import { default as Header } from 'components/Header/container'

import './App.css'

export default () => {
  const [currentUser, setCurrentUser] = React.useState('')

  React.useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        setCurrentUser('')
      }
    })
  }, [])

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route
          exact
          path='/signin'
          render={() =>
            currentUser ? (
              <Redirect to='/' />
            ) : (
              <SignInAndSignUpPage />
            )
          }
        />
      </Switch>
    </div>
  )
}
