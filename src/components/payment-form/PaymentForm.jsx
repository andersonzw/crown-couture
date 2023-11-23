import  { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button from "../button/Button";
import "./PaymentForm.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { setPaymentFormToggle } from "../../store/payment/payment.reducer";

const PaymentForm = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser);
  const totalPrice = useSelector(selectCartTotal);

  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    console.log("fired");
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: totalPrice * 100 }),
    }).then((res) => res.json());

    const clientSecret = response.paymentIntent.client_secret;

    //  create the payment
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful!");
      }
    }
  };

  const handleOutsideClick = (e) =>{
    e.preventDefault()
    if (e.target === e.currentTarget){
        dispatch(setPaymentFormToggle(false))
    }
  }


  return (
    <div onClick={handleOutsideClick} className="background-overlay">
      <div className="payment-form-container flexCenterCol">
        <span className="x-button" onClick={()=> dispatch(setPaymentFormToggle(false))}>X</span>
        <form
          className="flexColCenter form-container "
        >
          <h2>Credit Card payment: </h2>
          <CardElement />
          <Button onClick = {paymentHandler} isLoading={isProcessingPayment} buttonType={"inverted"}>
            PAY NOW
          </Button>
          <button type="submit">test</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
