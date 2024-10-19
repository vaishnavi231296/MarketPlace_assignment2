// routes/products.js
const express = require('express');
const router = express.Router();

const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct, deleteAllProducts, searchProductsByName} = require('../controllers/productController'); // Adjust path as necessary

// Get all products
router.get('/', getAllProducts);

// Get a product by ID
router.get('/:id', getProductById);

// Create a new product
router.post('/', createProduct);

// Update an existing product
router.put('/:id', updateProduct);

// Delete a product
router.delete('/:id', deleteProduct);

// Delete all products
router.delete('/', deleteAllProducts);

// Get products by name containing 'kw'
router.get('/search/:kw', searchProductsByName);

module.exports = router;