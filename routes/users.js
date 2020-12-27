const express = require("express");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("config");
const { check, validationResult } = require("express-validator");
const router = express.Router();
router.post(
  "/",
  [
    check("name", "name is required").not().notEmpty(),
    check("email", "enter a valid email").isEmail(),
    check("password", "enter your password").isLength({ min: 6 }),
    check("city", "enter your city").not().notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password, city } = req.body;
    try {
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "email already exists" }] });
      }
      user = new User({
        name,
        email,
        password,
        city,
      });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        config.get("jwtsecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);
module.exports = router;
