const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    imageUrl: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true }
},
{
    collection: "Product",
    timestamps: true
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;