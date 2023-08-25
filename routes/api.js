const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// API для получения списка товаров
router.get("/products", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products" });
    }
});

// API для добавления товара в корзину
router.post("/cart/:productId", async (req, res) => {
    const productId = req.params.productId;

    try {
        // Логика добавления товара в корзину

        res.json({ message: `Product with ID ${productId} added to cart.` });
    } catch (error) {
        res.status(500).json({ message: "Error adding product to cart" });
    }
});

module.exports = router;
