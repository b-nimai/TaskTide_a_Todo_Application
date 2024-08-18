const mongoose = require('mongoose');
require('dotenv').config()
const DB_URL = process.env.TODO_DB_URL;

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
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
            const now = new Date();
            const options = { timeZone: 'Asia/Kolkata', hour12: true };
            let local = now.toLocaleString('en-IN', options)
            let date = local.split(",")[0];
            return date;
        }
    },
    createdTime: {
        type: String,
        default: function () {
            const now = new Date();
            const options = { timeZone: 'Asia/Kolkata', hour12: true };
            let local = now.toLocaleString('en-IN', options)
            let time = local.split(",")[1];
            return time;
        }
    },
    updatedDate: {
        type: String,
        default: "--:--:----"
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
