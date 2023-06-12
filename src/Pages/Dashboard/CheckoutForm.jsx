import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";


const CheckoutForm = ({ price }) => {
  console.log(price);
  const stripe = useStripe()
  const { user } = useContext(AuthContext)
  const elements = useElements();
  const [error, setError] = useState('')
  const [axiosSecure] = useAxiosSecure()
  const [clientSecret, setClientSecret] = useState('')
  const [process, setProcess] = useState(false)
  const [transactionId, setTransactionId] = useState('')
  useEffect(() => {
    axiosSecure.post('/create-payment-intent', { price })
      .then(res => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret)
      })
  }, [price, axiosSecure])
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!stripe || !elements) {
      return
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return
    }
    // console.log('card', card);
    const { error } = await stripe.createPaymentMethod({
      type: 'card',
      card
    })
    if (error) {
      console.log('error', error);
      setError(error)
    }
    else {
      setError('')
    }
    setProcess(true)
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'unknown',
            name: user?.displayName || 'anonymous'
          },
        },
      },
    );
    if (confirmError) {
      console.log(confirmError);
    }
    console.log('payment intent', paymentIntent);
    setProcess(false)
    if (paymentIntent.status === 'succeeded') {

      const transactionId = paymentIntent.id
      setTransactionId(transactionId)
      const payment = { email: user?.email, transactionId, price , date: new Date()}
      axiosSecure.post('/payment', payment)
        .then(res => {
          console.log(res.data);
          if (res.data.insertedId) {
            //
          }
        })
    }

  }
  return (
    <>
      <form className="md:w-2/3 mx-auto p-10 border my-10" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
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
        <button className="btn mt-10" type="submit" disabled={!stripe || !clientSecret || process}>
          Pay
        </button>
      </form>
      {
        transactionId && <p className="w-2/3 md:mx-auto text-green-600">Transaction complete . Your Transaction id: {transactionId}</p>
      }
      {
        error && <p className="w-2/3 md:mx-auto text-red-600">{error.message}</p>
      }
    </>
  );
};

export default CheckoutForm;