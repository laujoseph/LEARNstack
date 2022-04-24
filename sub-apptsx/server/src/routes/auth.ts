import express from "express";
import { body, validationResult } from "express-validator";

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

      return res.json({ errors });
    }

    const { email, password } = req.body;

    res.json({
      email,
      password,
    });
  }
);
export default router;
