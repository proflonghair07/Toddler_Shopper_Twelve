const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema(
  {
      dateCreated: { 
        type: Date, 
        required: true,
        default: Date.now()
      },
      user: { type: Schema.Types.ObjectId, ref: 'User'},
      products: [{type: Schema.Types.ObjectId, unique: true, ref: 'Product'}]
  }
);
const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;