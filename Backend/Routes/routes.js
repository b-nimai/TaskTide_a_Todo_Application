const { Router } = require('express')
const zod = require('zod');
const { User, ToDo } = require('../DB/database');
const bcrypt = require('bcrypt');
const { userMiddleware } = require('../Middlewares/Middleware');
const router = Router();
const jwt = require('jsonwebtoken');
const { sendMail } = require('./../Mail/SendMail');
const wellcomeMail  = require('../Mail/WellcomeMail');
const resetPaswordConfirmation = require('../Mail/Confirmation');


const nameSchema = zod.string().min(1);
const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(8);
function inputCheck(obj){
    const parsedName = nameSchema.safeParse(obj.name);
    const parsedEmail = emailSchema.safeParse(obj.email);
    const parsedPass = passwordSchema.safeParse(obj.password);
    if(!parsedName.success || !parsedEmail.success || !parsedPass.success){
        return false;
    }
    return true;
}

// Signup route handler
router.post("/signup", async (req, res)=>{
    
    if(inputCheck(req.body)){
        const {name, email, password} = req.body;
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(411).json({
                success: false,
                message: "Email already registered with us."
            })
        }
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            await User.create({
                name,
                email,
                password: hashedPassword
            })
            const firstName = name.split(" ")[0];
            const sub = "TaskTide - Ultimate Task Planner";
            await sendMail(email, sub, wellcomeMail(firstName))
            return res.status(201).json({
                success: true,
                message: 'User created Successfully.'
            })
        } catch (error) {
            return res.status(511).json({
                success: false,
                message: error.message
            })
        }
    }
    else{
        return res.status(411).json({
            success: false,
            message: 'Invalid Inputs, try again.'
        })
    }
})

// Login route handler
router.post("/login", async (req, res)=>{
    const { email, password } = req.body;
    if(!emailSchema.safeParse(email).success || !passwordSchema.safeParse(password).success){
        return res.status(411).json({
            success: false,
            message: 'Invalid email or password, try again'
        })
    }
    try {
        const user = await User.findOne({email : email});
        if(!user){
            return res.status(411).json({
                success: false,
                message: "Wrong email, try again"
            })
        }
        const passwordMatched = await bcrypt.compare(password, user.password)
        if(!passwordMatched){
            return res.status(411).json({
                success: false,
                message: 'Wrong password, try again'
            })
        }

        const token = jwt.sign({
            id : user._id,
            name: user.name,
            email: user.email
        },
            process.env.TODO_JWT_SECRET
        )
        return res.status(201).json({
            token,
            name: user.name,
            email: user.email
        })
    } catch (error) {
        return res.status(511).json({
            success: false,
            message: error.message
        })
    }
})

// Forgot Password
router.put("/resetPassword", async(req, res) => {
    const {email, newPassword} = req.body;
    try {
        if(!emailSchema.safeParse(email).success){
            throw new Error("Invalid email, try again");
        }
        const user = await User.findOne({email})
        if(!user) {
            throw new Error("This is not registered email.");
        }
        if(!passwordSchema.safeParse(newPassword).success){
            throw new Error("Password length should be 8 or more.");
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        const updatedUser = await User.findOneAndUpdate({email}, {password: hashedPassword})
        const sub = "TaskTide - Ultimate Task Planner"
        const name = updatedUser.name.split(" ")[0]
        await sendMail(email, sub, resetPaswordConfirmation(name))
        return res.status(200).json({
            success: true,
            message: "Password update Success."
        })
    } catch (error) {
        return res.status(411).json({
            success: false,
            message: error.message
        })
    }
})

// Crete todo route handler
const check = zod.string().min(1);
router.post("/create", userMiddleware, async (req, res)=>{
    const {title, description} = req.body;
    
    const identity = req.userId;

    try {
        if(!check.safeParse(title).success || !check.safeParse(description).success){
            throw new Error("Write something in title and description.");
        }
        await ToDo.create({
            identity,
            title,
            description
        })
        return res.json({
            success: true,
            message: 'To-Do created Successfully'
        })
    } catch (error) {
        return res.json({
            success: false,
            message: error.message
        })
    }
})

// Find all the todos route handler
router.get("/todos", userMiddleware, async (req, res)=>{
    const identity = req.userId;
    try {
        const todos = await ToDo.find({identity: identity})
        return res.status(201).json({
            todos
        })
    } catch (error) {
        return res.status(510).json({
            message: error.message
        })
    }
})

// Delete todo route handler
router.delete("/delete", userMiddleware, async (req, res)=>{
    const {id} = req.body;
    try {
        await ToDo.findOneAndDelete({_id: id});
        return res.status(210).json({
            success: true,
            message : "To-Do deleted successfully."
        })
    } catch (error) {
        return res.status(511).json({
            success: false,
            message: error.message
        })
    }
})

// Update todo handler
router.put("/update", userMiddleware, async(req, res) =>{
    const id = req.headers["id"]
    const now = new Date();
    const options = { timeZone: 'Asia/Kolkata', hour12: true };
    let local = now.toLocaleString('en-IN', options)
    let time = local.split(",")[1];
    let date = local.split(",")[0];
    try {
        await ToDo.findByIdAndUpdate({_id: id}, {complete: true, updatedDate: date, updatedTime: time})
        return res.status(201).json({
            success: true,
            message: "Task Done"
        })
    } catch (error) {
        return res.status(501).json({
            success: false,
            message: error.message
        })
    }
})

// Delete User Profile 
router.delete("/deleteUser", userMiddleware, async(req, res) => {
    const email = req.body.email;
    try {
        await User.findOneAndDelete({email})
        return res.status(201).json({
            success: true,
            message: "User account Delete Successfully."
        })
    } catch (error) {
        return res.status(511).json({
            success: false,
            message: error.message
        })
    }
})

module.exports = router;