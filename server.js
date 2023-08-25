const express = require("express");
const app = express();
const db = require("./config/db");
const apiRoutes = require("./routes/api");

app.use(express.json());

// Маршруты API
app.use("/api", apiRoutes);

// Статические файлы
app.use(express.static("public"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
