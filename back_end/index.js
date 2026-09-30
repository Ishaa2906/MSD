const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/secure_file_db")
    .then(() => {
        console.log("Database connected");
    })
    .catch((err) => {
        console.log("Database connection error:", err);
    });

app.listen(3000, () => {
    console.log("Server running on port 3000");
});