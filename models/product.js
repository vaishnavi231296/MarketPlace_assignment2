// models/Product.js

const mongoose = require('mongoose');

// Define the schema for the product
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  category: { type: String, required: true },
}, { timestamps: true });

const Product = mongoose.model('product', ProductSchema);
module.exports = Product;