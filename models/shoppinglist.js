const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ListSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
  },
  itemname: {
    type: String,
  },
  itemQty: {
    type: String,
  },
  itemPrice: {
    type: String,
  },
  inStack: {
    type: Boolean,
    default: true,
  },
});
module.exports = List = mongoose.model("list", ListSchema);
