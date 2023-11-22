import React from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button from "../button/Button";
import "./PaymentForm.scss";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectCartTotal } from "../../store/cart/cart.selector";

const PaymentForm = () => {
  const currentUser = useSelector(selectCurrentUser)
  const totalPrice = useSelector(selectCartTotal)

  const stripe = useStripe();
  const elements = useElements();
  const paymentHandler = async (e) => {
    console.log("fired");
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: totalPrice*100 }),
    }).then((res) => res.json());

    const clientSecret = response.paymentIntent.client_secret;
    console.log(clientSecret);

    //  create the payment

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest',
        },
      },
    });


    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Successful!');
      }
    }


    
  };

  return (
    <div className="payment-form-container flexCenterCol">
      <form onSubmit={paymentHandler} className="flexColCenter form-container ">
        <h2>Credit Card payment: </h2>
        <CardElement />
        <Button buttonType={"inverted"}>PAY NOW</Button>
      </form>
    </div>
  );
};

export default PaymentForm;
