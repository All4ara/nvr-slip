const express = require('express');
const Sneaker = require('../models/SneakerSchema');
const app = express();

app.get("/sneakers", (req, res) => {

    Sneaker.find()
        .then((kicks) => {
            res.json(kicks)
        })
        .catch((err) => {
            res.status(500), json({ message: "Oops" })
        })
});

app.get("/sneakers/:id", (req, res) => {
    Sneaker.findById(req.params.id)
        .then((kick) => {
            res.json(kick);
        })
        .catch((err) => {
            res.status(500).json({ message: "Oops" });
        });
});

app.put("/sneakers/:id", (req, res) => {
    console.log(req.body)
    Sneaker.findByIdAndUpdate(req.params.id, req.body)
        .then((oldPost) => {
            res.send("updated")
        })
        .catch((err) => {
            res.status(500).send("Oops");
        });
});

app.delete("/sneakers/:id", (req, res) => {
    Sneaker.findByIdAndDelete(req.params.id, req.body)
        .then((deletePost) => {
            res.send("Deleted")
        })
        .catch((err) => {
            res.status(500).send("Oops");
        });
});

module.exports = app