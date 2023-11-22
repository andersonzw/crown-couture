const dotenv = require('dotenv')
dotenv.config()
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    // $amount comes from event body which is in JSON
    const { amount } = JSON.parse(event.body);

    // make a request to stripe server
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "AUD",
      payment_method_types: ["card"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error });

    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};