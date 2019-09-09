import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_kLlideDFCc8BZEXVrrlmDadl00dQXoElqM';

  const onToken = token => {
    console.log(token);
    alert('Successfully');
  };

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
  );
};

export default StripeCheckoutButton;
