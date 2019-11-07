import React, { Suspense } from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

import {
  auth,
  createUserProfileDocument
} from 'firebase/FirebaseUtils'

import Spinner from 'components/Spinner'
import { default as Header } from 'components/Header/container'
import ErrorBoundary from 'components/ErrorBoundary'

import './App.css'

const HomePage = React.lazy(() => import('pages/HomePage'))
const ShopPage = React.lazy(() => import('pages/ShopPage'))
const CheckoutPage = React.lazy(() =>
  import('pages/CheckoutPage/container')
)
const SignInAndSignUpPage = React.lazy(() =>
  import('pages/SignInAndSignUpPage')
)

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
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route
              exact
              path='/checkout'
              component={CheckoutPage}
            />
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
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  )
}
