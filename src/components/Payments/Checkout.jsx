import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";

const Checkout = ({ cart, price }) => {
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        if (res.data?.clientSecret) {
          setClientSecret(res.data.clientSecret);
        }
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    setProcessing(true);
    setCardError("");

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "unknown",
          },
        },
      }
    );

    if (confirmError) {
      setCardError(confirmError.message);
    }

    setProcessing(false);

    if (paymentIntent?.status === "succeeded") {
      setTransactionId(paymentIntent.id);

      const payment = {
        email: user?.email,
        name: user?.displayName,
        transactionId: paymentIntent.id,
        price: price,
        date: new Date(),
        quantity: cart.length,
        cartItems: cart.map((item) => item._id),
        template: cart.map((item) => item.template),
        status: "service pending",
      };

      axiosSecure.post("/payment", payment).then((res) => {
        if (res.data?.insertResult?.insertedCount === 1) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Payment successful paid",
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch() // If you have a function called refetch, uncomment this line
          refetch()
              navigate('/dashboard/resumeBuilder/:id', {replace: true})
        }
      });
    }
  };

  return (
    <div>
    <form className="w-1/2 mx-auto" onSubmit={handleSubmit}>
      {/* <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
        className="p-3 border border-gray-300 rounded"
      /> */}
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
        onChange={() => {
          setCardError("");
        }}
        className="p-3  border border-gray-300 rounded"
      />
      <button
        className="btn btn-gradiant mt-4"
        type="submit"
        disabled={!stripe || !clientSecret || processing}
      >
        Pay with Stripe
      </button>
      {cardError && (
        <p className="container mx-auto text-red-500">{cardError}</p>
      )}
      {transactionId && (
        <p className="container mx-auto text-green-500">
          Your Transaction ID: {transactionId}
        </p>
      )}
    </form>
  </div>
  );
};

export default Checkout;
