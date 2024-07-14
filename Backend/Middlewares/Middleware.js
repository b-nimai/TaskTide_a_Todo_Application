const { User } = require("../DB/database");
const bcrypt = require('bcrypt');
require('dotenv').config();

async function userMiddleware(req, res, next){
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];
    const decodedValue = null;
    let verified = true;
    try {
        decodedValue = jwt.verify(jwtToken, process.env.JWT_SECRET);
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
