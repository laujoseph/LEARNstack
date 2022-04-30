import express from "express";
import User from "../models/user";
import { stripe } from "../utils/stripe";
import { checkAuth } from "../middleware/checkAuth";
import Article from "../models/article";
const router = express.Router();

// only show the prices if user is authenticated
router.get("/prices", checkAuth, async (req, res) => {
  const prices = await stripe.prices.list({
    apiKey: process.env.STRIPE_SECRET_KEY,
  });

  return res.json(prices);
});

// stripe checkout route
// creates a subscription session, link item to user.
router.post("/session", checkAuth, async (req, res) => {
  const user = await User.findOne({ email: req.user });

  // Article.create({
  //   title: "Thomas Keller's Cooking Techniques ",
  //   imageUrl:
  //     "https://www.hollywoodreporter.com/wp-content/uploads/2016/06/thomas_keller_getty_p_2016.jpg",
  //   content:
  //     "Chef Thomas Keller’s MasterClass is devoted to preparing seafood, sous vide cooking, and making classic desserts.",
  //   access: "Standard",
  //   category: "Food",
  // });

  const session = await stripe.checkout.sessions.create(
    {
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: req.body.priceId,
          quantity: 1,
        },
      ],
      success_url: "http://localhost:3000/articles",
      cancel_url: "http://localhost:3000/article-plans",
      customer: user.stripeCustomerId,
    },
    {
      apiKey: process.env.STRIPE_SECRET_KEY,
    }
  );

  return res.json(session);
});

export default router;
