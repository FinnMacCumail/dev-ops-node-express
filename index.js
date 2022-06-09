const express = require("express");
const { default: mongoose } = require("mongoose");
const momgoose = require("mongoose");

const app = express();

mongoose
    .connect("mongodb://derm:vidal*12@mongo:27017/?authSource=admin")
    .then(() => console.log("successfully connected to mongo database"))
    .catch((e) => console.log(e));

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("<h2>Hi There</h2>");
});

app.listen(port, () => console.log(`listening on port ${port}`))