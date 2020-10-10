const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema(
  {
      dateCreated: { type: Date, required: true },
      user: { type: Schema.Types.ObjectId, ref: 'User'},
      products: [{type: Schema.Types.ObjectId, ref: 'Product'}]
  }
);
const Cart = mongoose.model("Product", cartSchema);

module.exports = Cart;