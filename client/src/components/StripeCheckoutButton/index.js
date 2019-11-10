import React from 'react'

import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_kLlideDFCc8BZEXVrrlmDadl00dQXoElqM'

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(res => alert('Payment successful'))
      .catch(error => {
        console.log(error)
        alert(
          'There was an issue with your payment. Please sure you sure to provided credit card'
        )
      })
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='Second React App'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
