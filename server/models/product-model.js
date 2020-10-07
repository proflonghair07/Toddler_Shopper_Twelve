const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema(
    {
        title: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: String, required: true },
        category: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('products', Product)
