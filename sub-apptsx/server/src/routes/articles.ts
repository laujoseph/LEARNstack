import express, { Request } from "express";
import User from "../models/user";
import { stripe } from "../utils/stripe";
import { checkAuth } from "../middleware/checkAuth";
import Article from "../models/article";
const router = express.Router();

router.get("/", checkAuth, async (req, res) => {
  // user has stripe customer id
  const user = await User.findOne({ email: req.user });
  // this gets all the subscriptions of this particular customer
  const subscriptions = await stripe.subscriptions.list(
    {
      customer: user.stripeCustomerId,
      status: "all",
      expand: ["data.default_payment_method"],
    },
    {
      apiKey: process.env.STRIPE_SECRET_KEY,
    }
  );
  // do not return articles if user has no subscription plan
  if (!subscriptions.data.length) return res.json([]);

  //@ts-ignore
  const plan = subscriptions.data[0].plan.nickname;

  // conditionally render articles based on user plan
  if (plan === "Basic") {
    const articles = await Article.find({ access: "Basic" });
    return res.json(articles);
  } else if (plan === "Standard") {
    const articles = await Article.find({
      // get all articles that have access that are either basic or standard
      access: { $in: ["Basic", "Standard"] },
    });
    return res.json(articles);
  } else {
    const articles = await Article.find({});
    return res.json(articles);
  }

  res.json(plan);
});

router.post("/create", checkAuth, async (req, res) => {
  const user = await User.findOne({ email: req.user });

  const newArticle = new Article({
    title: req.body.title,
    imageUrl: req.body.imageUrl,
    content: req.body.content,
    access: req.body.access,
    category: req.body.category,
  });

  try {
    await newArticle.save();
    res.send("Article Created");
  } catch (err) {
    console.log(err);
  }
});

router.get("/:category", checkAuth, async (req: any, res: any) => {
  let category = req.params.category;

  const user = await User.findOne({ email: req.user });
  // this gets all the subscriptions of this particular customer
  const subscriptions = await stripe.subscriptions.list(
    {
      customer: user.stripeCustomerId,
      status: "all",
      expand: ["data.default_payment_method"],
    },
    {
      apiKey: process.env.STRIPE_SECRET_KEY,
    }
  );
  // do not return articles if user has no subscription plan
  if (!subscriptions.data.length) return res.json([]);

  //@ts-ignore
  const plan = subscriptions.data[0].plan.nickname;

  // conditionally render articles based on user plan
  if (plan === "Basic") {
    const articles = await Article.find({
      access: "Basic",
      category: category,
    });
    return res.json(articles);
  } else if (plan === "Standard") {
    const articles = await Article.find({
      // get all articles that have access that are either basic or standard
      access: { $in: ["Basic", "Standard"] },
      category: category,
    });
    return res.json(articles);
  } else {
    const articles = await Article.find({ category: category });
    return res.json(articles);
  }

  // res.json(plan);
  // console.log(articles);
});

// get articles for articleDetails page
router.get("/course/:title", checkAuth, async (req: any, res: any) => {
  let title = req.params.title.replace("%20", " ");
  console.log(title);
  const user = await User.findOne({ email: req.user });
  // this gets all the subscriptions of this particular customer
  const subscriptions = await stripe.subscriptions.list(
    {
      customer: user.stripeCustomerId,
      status: "all",
      expand: ["data.default_payment_method"],
    },
    {
      apiKey: process.env.STRIPE_SECRET_KEY,
    }
  );
  // do not return articles if user has no subscription plan
  if (!subscriptions.data.length) return res.json([]);

  //@ts-ignore
  const plan = subscriptions.data[0].plan.nickname;
  const articles = await Article.find({ title: title });
  return res.json(articles);
  // console.log(articles);
});

export default router;
