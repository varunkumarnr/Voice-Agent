const express = require("express");
const router = express.Router();
router.post("/", (req, res) => {
  res.send("auth req");
});
module.exports = router;
