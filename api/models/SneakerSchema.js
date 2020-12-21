const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sneakerSchema = new Schema ({
    title: String,
    image: String,
    release: String,
    price: String,
    gender: String,
    styleCode: String,
    region: String,
    locations: [String],
    stock: Number,
    company: String



});

const Sneakers = mongoose.model('Sneakers', sneakerSchema, 'sneakers');

module.exports = Sneakers;