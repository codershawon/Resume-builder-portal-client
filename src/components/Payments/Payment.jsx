import Checkout from "./Checkout";
import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import SectionTitle from "../../Hooks/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../Hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_Payment);

const Payment = () => {
  const [cart] = useCart();

const total = cart.reduce((sum, resume) => sum + parseFloat(resume.price || 0), 0);
const price = total.toFixed(2); // Format total to two decimal places


  return (
    <div className="w-full">
      <div className="pb-8">
      <SectionTitle heading="100% Secure Payment" />
     
      </div>
      <Elements stripe={stripePromise}>
        <Checkout cart={cart} price={price} />
      </Elements>
    </div>
  );
};

export default Payment;


