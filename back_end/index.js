let express = require("express");
let mongoose = require("mongoose");

let app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/Secure_file_Storage")
    .then(() => {
        console.log("Database connected success");
    })
    .catch((err) => {
        console.log("Database connection error:", err);
    });

app.listen(3000, () => {
    console.log("Server running on port 3000");
});