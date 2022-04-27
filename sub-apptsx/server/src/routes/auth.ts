import express from "express";
import { body, validationResult } from "express-validator";
import User from "../models/user";
import bcrypt from "bcryptjs";

const router = express.Router();

router.post(
  "/signup",
  body("email").isEmail().withMessage("The email is invalid"),
  body("password").isLength({ min: 5 }).withMessage("The password is invalid"),
  async (req, res) => {
    // returns an array of errors
    const validationErrors = validationResult(req);
    // check if validationError array is empty, if not return an error msg
    if (!validationErrors.isEmpty()) {
      const errors = validationErrors.array().map((error) => {
        return {
          msg: error.msg,
        };
      });

      return res.json({ errors, data: null });
    }

    const { email, password } = req.body;

    // returns null if no email found
    const user = await User.findOne({ email });
    // if email is already in use, return error msg
    if (user) {
      return res.json({
        errors: [
          {
            msg: "Email already in use",
          },
        ],
        data: null,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      password: hashedPassword,
    });
    res.json(user);
  }
);
export default router;
