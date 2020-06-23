import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import { clearCart } from '../../redux/cart/cart.actions';

const StripeCheckoutButton = ({ price, clearCart }) => {
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

  const onToken = (token) => {
    axios({
      url: '/payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert('Payment Successful, hope to see you again SOON 😄');
        clearCart();
      })
      .catch((error) => {
        console.log('Payment Error: ', error);
        alert('Payment Unsuccessful, we are not actually receiving payments yet');
        // alert('Payment Unsuccessful, please make sure you use a valid credit card 🤔');
      });
  };

  return (
    <StripeCheckout
      label="Pay Now 💳"
      name="Crown Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(undefined, mapDispatchToProps)(StripeCheckoutButton);
