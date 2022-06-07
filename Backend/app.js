const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes")
const cors = require('cors');
const app = express();
// Middleware
app.use(express.json());
app.use(cors());
app.use("/books", router);


mongoose
    .connect(
        "mongodb+srv://admin:gw3lRLO4LWyM4S4R@cluster0.zf5vqh0.mongodb.net/BOOKSTORE?retryWrites=true&w=majority"
    ).then(() => console.log("connected to DataBase"))
    .then(() => {
        app.listen(5000);
    }).catch((err) => console.log(err));
