import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCartResume from "../../Hooks/useCartResume";
import { useNavigate } from "react-router-dom";

// import useCart from "../../Hooks/useCart";



const Checkout = ({ cart, price, resumeId  }) => {
  const { user } = useAuth();
  // const { refetch} =useCart();
  const {resume, refetch} = useCartResume();
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();

  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const navigate = useNavigate();

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

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "unknown",
          },
        },
      });

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

      axiosSecure.post("/payment", payment)
      .then((res) => {
        if(res.data?.updateClass?.modifiedCount > 0 && res.data?.updateInst?.modifiedCount > 0 && res.data?.updateStudent?.modifiedCount > 0 ){
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Payment successful paid",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
          console.log("Redirecting to:", `/resumeBuilder/${resume._id}`);
          // Redirect to the appropriate route based on resumeId
          navigate(`/resumeBuilder/${resume._id}`, { replace: true });
        }
      });
    }
  };

  return (
    <div className="w-1/2 mx-auto bg-white rounded-lg shadow-lg p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-semibold">
            Cardholder Name
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            placeholder={user?.displayName}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">
            Card Number
          </label>
          <div className="border border-gray-300 rounded p-2">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                  },
                },
              }}
              onChange={() => {
                setCardError("");
              }}
            />
          </div>
        </div>

        <button
          className="btn btn-gradient mt-4 hover:shadow-xl transition duration-300 w-full py-2"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay with Stripe
        </button>

        {cardError && <p className="text-red-500">{cardError}</p>}

        {transactionId && (
          <p className="text-green-500">Your Transaction ID: {transactionId}</p>
        )}
      </form>
    </div>
  );
};

export default Checkout;
