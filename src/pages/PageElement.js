import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import PageDonate from './PageDonate'
import stripePromise from '../plugins/Stripe.js' // Import the Stripe instance

function CheckoutPage() {
  return (
    <Elements stripe={stripePromise}>
      <PageDonate />
    </Elements>
  )
}

export default CheckoutPage
