const { Router } = require('express')
const zod = require('zod');
const { User, ToDo } = require('../DB/database');
const bcrypt = require('bcrypt');
const { userMiddleware } = require('../Middlewares/Middleware');
const router = Router()
const jwt = require('jsonwebtoken')


const nameSchema = zod.string().min(1);
const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(8);
function inputCheck(obj){
    const parsedName = nameSchema.safeParse(obj.name);
    const parsedEmail = emailSchema.safeParse(obj.email);
    const parsedPass = passwordSchema.safeParse(obj.password);
    if(!parsedName.success || !parsedEmail.success || !parsedPass){
        return false;
    }
    return true;
}

// Signup route handler
router.post("/signup", async (req, res)=>{
    
    if(inputCheck(req.body)){
        if(!inputCheck(req.body)){
            return res.status(411).json({
                message:'Invalid inputs, try again.'
            })
        }
        const {name, email, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            name,
            email,
            password: hashedPassword
        })
        return res.status(201).json({
            message: 'User created Successfully.'
        })
    }
    else{
        return res.status(411).json({
            message: 'Invalid Inputs, try again.'
        })
    }
})

// Login route handler
router.post("/login", async (req, res)=>{
    const { email, password } = req.body;
    if(!emailSchema.safeParse(email).success || !passwordSchema.safeParse(password).success){
        return res.status(411).json({
            message: 'Invalid email or password, try again'
        })
    }
    const user = await User.findOne({email : email});
    if(!user){
        return res.status(411).json({
            message: "Invalid email, try again"
        })
    }
    const passwordMatched = await bcrypt.compare(password, user.password)
    if(!passwordMatched){
        return res.status(411).json({
            message: 'Invalid password, try again'
        })
    }

    const token = jwt.sign({
        id : user._id,
        name: user.name,
        email: user.email
    },
        process.env.JWT_SECRET
    )
    return res.status(201).json({
        token
    })
})

// Crete todo route handler
const check = zod.string().min(1);
router.post("/create", userMiddleware, async (req, res)=>{
    const {title, description} = req.body;
    if(!check.safeParse(title).success || !check.safeParse(description).success){
        return res.status(411).json({
            message: 'Invalid input, try again.'
        })
    }
    const identity = req.userId;

    const todo = await ToDo.create({
        identity,
        title,
        description
    })
    return res.json({
        message: 'To-Do created Successfully'
    })
})

// Find all the todos route handler
router.get("/todos", userMiddleware, async (req, res)=>{
    const identity = req.userId;
    try {
        const todos = await ToDo.find({identity: identity})
        if(!todos){
            return res.status(511).json({
                message: "To-Do list is empty."
            })
        }
        return res.status(201).json({
            todos
        })
    } catch (error) {
        return res.status(510).json({
            error: error.message
        })
    }
})

// Delete todo route handler
router.delete("/delete", userMiddleware, async (req, res)=>{
    const {id} = req.body;
    try {
        await ToDo.findOneAndDelete({_id: id});
    } catch (error) {
        return res.status(511).json({
            message: error.message
        })
    }
    return res.status(210).json({
        message : "To-Do deleted successfully."
    })
})

module.exports = router;