const mongoose = require('mongoose');
require('dotenv').config()
const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL);
console.log("Database connection successfull.")

const userSchema = new mongoose.Schema({
    name: String,
    email : String,
    password : String
})

const toDoSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
})

const User = mongoose.model('User', userSchema);
const ToDo = mongoose.model('ToDo', toDoSchema);

module.exports = {
    User,
    ToDo
}
