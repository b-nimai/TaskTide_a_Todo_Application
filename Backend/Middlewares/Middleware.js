const { User } = require("../DB/database");
const bcrypt = require('bcrypt');
require('dotenv').config();
const jwt = require('jsonwebtoken')

async function userMiddleware(req, res, next){
    const token = req.headers['authorization'];
    const words = token.split(" ");
    const jwtToken = words[1];
    let verified = true;
    try {
        const decodedValue = jwt.verify(jwtToken, process.env.TODO_JWT_SECRET);
        req.userId = decodedValue.email;
        req.userName = decodedValue.name;
    } catch (error) {
        verified = false;
    }

    if(!verified){
        return res.status(411).json({
            message:'You are not allowed to do this task'
        })
    }
    next(); 
}

module.exports = {
    userMiddleware
}
