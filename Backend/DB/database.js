const mongoose = require('mongoose');
require('dotenv').config()
const DB_URL = process.env.TODO_DB_URL;

mongoose.connect(DB_URL);
console.log("Database connection successfull.")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    }
})

const toDoSchema = new mongoose.Schema({
    identity:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    complete:{
        type: Boolean,
        default: false
    },
    createdDate: {
        type: String,
        default: function (){
            const now = new Date()
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            const date = `${year}:${month}:${day}`;
            return date;
        }
    },
    createdTime: {
        type: String,
        default: function () {
            const now = new Date();
            return now.toTimeString().split(' ')[0];
        }
    },
    updatedDate: {
        type: String,
        default: "----:--:--"
    },
    updatedTime: {
        type: String,
        default: "--:--:--"
    }
})

const User = mongoose.model('User', userSchema);
const ToDo = mongoose.model('ToDo', toDoSchema);

module.exports = {
    User,
    ToDo
}
