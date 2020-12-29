const express = require("express")
const app = express();
const User = require("../models/UserSchema");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")


app.get("/users", (req, res) => {

    User.find()
        .then((user) => {
            res.json(user)
        })
        .catch((err) => {
            res.status(500), json({ message: "Oops" })
        })
});

app.get("/users/:id", (req, res) => {
    User.findById(req.params.id)
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            res.status(500).json({ message: "Oops" });
        });
});

app.post("/signup", (req, res) => {

    bcrypt.hash(req.body.password, 10, function (err, hash) {
        User.findOne({ email: req.body.email })
                .then((user) => {
                    if (user) return res.status(400).send("Existing email");
                    else {
                        return User.create({
                            email: req.body.email,
                            password: hash,
                            firstName: req.body.firstName,
                            lastName: req.body.lastName
                        }).then((user) => {
                            var token = jwt.sign({ id: user._id }, 'shhhh')
                            res.status(200).json({ 
                                token, 
                                user: {
                                    email: user.email,
                                    userType: user.userType
                                
                                } 
                            })
                        })
                    }
                })   
                .catch((err) => {
                    res.status(500).send("error")
                })
    });

    
        
})

app.post("/login", (req, res) => {
    User.findOne({ email: req.body.email })
        .then((user) => {
            if (!user) res.status(403).send("Invalid credentials");
            else if (user) {
                bcrypt.compare(req.body.password, user.password, function (err, result) {
                    
                    if(err) res.status(500).send("Invalid");
                    if(result) {
                        var token = jwt.sign({ id: user._id }, 'shhhh')
                        res.status(200).json({ 
                            token, 
                            user: {
                                email: user.email,
                                id: user._id,
                                userType: user.userType
                            } 
                        })
                    } else res.status(403).send("invalid");
                    
                })  
            } else {
                res.status(403).send("Invalid credentials");
            }
        })
})

module.exports = app;