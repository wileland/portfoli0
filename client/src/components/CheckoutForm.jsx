// client/src/components/CheckoutForm.jsx
import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { motion } from 'framer-motion';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error(error);
    } else {
      console.log('PaymentMethod:', paymentMethod);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <CardElement
        className="p-4 border border-gray-300 rounded mt-1"
      />
      <button
        type="submit"
        disabled={!stripe}
        className="w-full p-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
      >
        Pay
      </button>
    </motion.form>
  );
};

export default CheckoutForm;
