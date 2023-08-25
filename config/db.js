const mongoose = require("mongoose");

// Подключение к базе данных MongoDB
mongoose.connect("mongodb://localhost:27017/electronics_store", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(error => {
        console.error("Error connecting to MongoDB:", error);
    });
