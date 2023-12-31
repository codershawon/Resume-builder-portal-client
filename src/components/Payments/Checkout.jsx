import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCartResume from "../../Hooks/useCartResume";
import { useNavigate } from "react-router-dom";

const Checkout = ({ cart, price, resumeId }) => {
  const { user } = useAuth();
  const { resume, refetch } = useCartResume();
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const navigate = useNavigate();

  console.log(resumeId);
  // console.log(resume);
  console.log(cart);

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        if (res.data?.clientSecret) {
          setClientSecret(res.data.clientSecret);
        }
      });
    }
  }, [price]);

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

    try {
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
          template: cart.map((item) => item.name),
          status: "service pending",
        };

        // Send payment data to your server
        axiosSecure
          .post("/payment", payment)
          .then((res) => {
            if (
              res.data?.insertResult?.acknowledged &&
              res.data?.deleteResult?.acknowledged &&
              res.data?.deleteResult?.deletedCount > 0
            ) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Payment successful paid",
                showConfirmButton: false,
                timer: 1500,
              }).then(() => {
                // Check if `cart` is defined and not empty
if (cart && cart.length > 0) {
  // List of desired names to navigate to
  const desiredNames = [ "template1", "template2", "template3", "template4", "template5", "template6", "template7", "template8", "template9", "template10","template11", "template12", "template13", "template14", "template15", "template16", "template17", "template18", "template19", "template20", "template21", "template22", "template23"];

  // Iterate over each desired name and navigate
  desiredNames.forEach((desiredName) => {
    const cartItem = cart.find((item) => item.name === desiredName);
    if (cartItem && cartItem.name) {
      console.log("Navigating to:", `/templates/${cartItem.name}`);
      // Use a setTimeout for navigation (adjust delay as needed)
      setTimeout(() => {
        navigate(`/templates/${cartItem.name}`, { replace: true });
      }, 1000); // Delay navigation by 1 second (adjust as needed)
    } else {
      // Handle the case when the desired item's `name` is undefined or not found
      console.error("Invalid cart item data for desiredName:", desiredName);
    }
  });
} else {
  // Handle the case when `cart` is undefined or empty
  console.error("Cart is empty or undefined");
}
              });
            }
          })
          .catch((error) => {
            console.error("Payment error:", error);
            // Handle payment error here
            setProcessing(false);
            setCardError("Payment failed. Please try again.");
          });
      }
    } catch (error) {
      console.error("Payment error:", error);
      // Handle payment error here
      setProcessing(false);
      setCardError("Payment failed. Please try again.");
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
