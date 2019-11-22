import React from 'react'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseLine from '@material-ui/core/CssBaseline'
import { Helmet } from 'react-helmet'

import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'

import client from './apollo'

client.writeData({
  data: {
    cartHidden: true,
    cartItems: [],
    itemCount: 0,
    total: 0
  }
})

const AppWrapper = ({ children }) => {
  return (
    <>
      <Helmet>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseLine />
        <ApolloProvider client={client}>
          <BrowserRouter>{children}</BrowserRouter>
        </ApolloProvider>
      </ThemeProvider>
    </>
  )
}

const theme = createMuiTheme({})

export default AppWrapper
