const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    userType: {
        type: String,
        enum: ["normal", "admin"],
        default: "normal"
    }
});

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;