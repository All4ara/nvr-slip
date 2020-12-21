const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
const MONGODB_URI = "mongodb://localhost:27017/Sneakers";

app.use(cors());
app.options('*', cors());


mongoose
    .connect(MONGODB_URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((x) => {
        console.log(
            `Connected to Mongo! Database name: "${x.connections[0].name}"`
        );

    })
    .catch((err) => {
        console.error("Error connecting to mongo", err);
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/user", require("./routes/users"))
app.use("/", require("./routes/sneakerPage.js"))

app.listen(3000, () => {
    console.log("Express running");
  });