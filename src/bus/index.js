import functions from "firebase-functions";
import admin from "firebase-admin";
import stripePackage from "stripe";

const stripe = stripePackage("your-stripe-secret-key");

admin.initializeApp();

export const createPaymentIntent = functions.https.onRequest(async (req, res) => {
  try {
    const { amount, currency } = req.body;
    
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).send(error.message);
  }
});
