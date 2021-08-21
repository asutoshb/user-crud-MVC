const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: Number,
    firstName: String,
    lastName: String,
    email: String,
    gender: String,
    age: Number
},{
    versionKey: false, 
    timestamps : true
});

const User = mongoose.model("users", userSchema);//users collection in mongodb

module.exports = User;