import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";

const   CheckoutForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const response = await fetch("https://us-central1-your-project.cloudfunctions.net/createPaymentIntent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount, currency: "inr" }),
    });

    const { clientSecret } = await response.json();
    
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card: elements.getElement(CardElement) },
    });

    if (result.error) {
      console.error(result.error.message);
    } else {
      alert("Payment successful!");
      console.log("Payment successful!", result.paymentIntent);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || loading}>
        {loading ? "Processing..." : `Pay ₹${amount}`}
      </button>
    </form>
  );
};

export default CheckoutForm;
