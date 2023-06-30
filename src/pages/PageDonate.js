import { useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { FaLock } from 'react-icons/fa'

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
      <div className="w-[90%] md:w-[960px] flex justify-center items-center flex-col bg-white shadow-md rounded-md mt-4 p-8">
        <div className="border-b">
          <h2 className="text-3xl font-bold text-gray-700 pb-8 text-center italic">Stripe Secure Checkout</h2>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '18px',
                  color: '#0b23d8',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
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
        <div className="flex items-center justify-center text-gray-600 text-xs pb-4 opacity-50">
          <FaLock className="mr-1" />
          Secure Stripe Checkout
        </div>
      </div>
    </form>
  )
}

export default CheckoutForm
