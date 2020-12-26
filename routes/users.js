const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
router.post(
  "/",
  [
    check("name", "name is required").not().notEmpty(),
    check("email", "enter a valid email").isEmail(),
    check("password", "enter your password").isLength({ min: 6 }),
  ],
  (req, res) => {}
);
module.exports = router;
