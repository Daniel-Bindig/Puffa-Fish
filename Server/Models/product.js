const mongoose = require('mongoose');

// Define the Product schema
const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  quantityAvailable: {
    type: Number,
    default: 0,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;