import { useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

function CheckoutForm() {
  const [response, setResponse] = useState(false)

  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return
    }

    // Get a reference to a mounted CardElement component.
    const cardElement = elements.getElement(CardElement)

    // Create a payment method using the card element.
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    })

    if (error) {
      console.log('Error:', error)
      setResponse(false)
    } else {
      console.log('PaymentMethod:', paymentMethod)
      // Handle the payment method server-side
      setResponse(true)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="h-screen flex flex-col items-center">
      <div className="w-[960px]">
        <CardElement />
      </div>
      <button
        type="submit"
        disabled={!stripe}
        className={`w-full ${
          response
            ? 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600'
            : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
        } text-white font-bold py-4 px-6 mx-6 rounded-lg max-w-[340px] active:scale-95 transition cursor-pointer text-center my-6 shadow-md`}
      >
        {response && !response ? 'Failed' : response ? 'Success' : 'Pay'}
      </button>
    </form>
  )
}

export default CheckoutForm
