const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");
const List = require("../models/shoppinglist");
const User = require("../models/user");
router.post(
  "/",
  [auth, check("itemname", "sorry we could not get the name").not().notEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.findById(req.user.id).selected("-password");
      const newList = new List({
        name: user.name,
        user: req.user.id,
        itemname: req.body.itemname,
        itemQty: req.body.itemQty,
        itemPrice: req.body.itemPrice,
        inStack: req.body.inStack,
      });
      const list = await newList.save();
      res.json(list);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("server error");
    }
  }
);
//@desc get all your list items
router.get("/:user", auth, async (req, res) => {
  try {
    const list = await List.find({ user: req.params.user });

    res.json(list);
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});

//@desc checkout by product name

router.get("/product/:itemname", auth, async (req, res) => {
  try {
    const product = await List.find({ itemname: req.params.itemname });
    res.json(product);
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});

//@desc delete item

router.delete("/:id", auth, async (req, res) => {
  try {
    const item = await List.findById(req.params.id);
    if (!item) {
      return res.status(400).json({ msg: "no such item" });
    }
    if (item.user.toString() !== req.user.id) {
      return res.status(500).json({ msg: "user not authorized" });
    }
    await item.remove();
    res.json({ msg: "item deleted" });
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "item not found" });
    }
    res.status(500).send("server error");
  }
});
module.exports = router;
