
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const userSchema = new Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    imageUrl: String,
    userType: {
        type: String,
        enum: ["normal", "admin"],
        default: "normal"
    }
});

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;