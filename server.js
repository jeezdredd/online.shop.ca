const express = require("express");
const app = express();

// Массив с имитацией данных о продуктах
const products = [
    { id: 1, name: "Smartphone", price: 500 },
    { id: 2, name: "Laptop", price: 1000 },
    { id: 3, name: "Tablet", price: 300 },
    // ...
];

// API для получения списка товаров
app.get("/api/products", (req, res) => {
    res.json(products);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
