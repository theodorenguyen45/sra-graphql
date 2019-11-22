import React, { Suspense } from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

import { auth, createUserProfileDocument } from 'firebase/FirebaseUtils'

import Spinner from 'components/Spinner'
import { default as Header } from 'components/Header/container'
import ErrorBoundary from 'components/ErrorBoundary'
import AppWrapper from './configs/Wrapper'

const SignInAndSignUpPage = React.lazy(() =>
  import('pages/SignInAndSignUpPage')
)

const routes = [
  {
    exact: true,
    path: '/',
    component: React.lazy(() => import('pages/HomePage'))
  },

  {
    exact: false,
    path: '/shop',
    component: React.lazy(() => import('pages/ShopPage'))
  },
  {
    exact: true,
    path: '/checkout',
    component: React.lazy(() => import('pages/CheckoutPage/container'))
  }
]

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
    <AppWrapper>
      <Header currentUser={currentUser} />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            {routes.map((route, index) => (
              <Route key={index} {...route} />
            ))}
            <Route
              exact
              path='/signin'
              render={() =>
                currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </AppWrapper>
  )
}
