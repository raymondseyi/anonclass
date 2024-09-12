const express = require("express");
const router = express.Router();
const ProductModel = require("../models/product.model");
const { fetchAllProduct,createProduct } = require("../controllers/product.controller");
fetchAllProduct
router.get("/allproducts",fetchAllProduct)
router.post("/createproduct",createProduct)
module.exports = router