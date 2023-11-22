const express = require('express');
const router = express.Router()
const path = require('path')
const Product = require('../Models/product');

// GET all products
router.get('/products', async (req, res) => {
  try {
    // Fetch all products from the database
    const products = await Product.find({});
    res.json(products); // Return products as JSON
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;