const { Router } = require('express')
const zod = require('zod')
const router = Router()

function inputCheck(obj){
    const nameSchema = zod.string().min(1);
    const emailSchema = zod.string().email();
    const passwordSchema = zod.string().min(8);
    const parsedName = nameSchema.safeParse(obj.name);
    const parsedEmail = emailSchema.safeParse(obj.email);
    const parsedPass = passwordSchema.safeParse(obj.password);
    if(!parsedName.success || !parsedEmail.success || !parsedPass){
        return false;
    }
    return true;
}
router.post("/signup", (req, res)=>{
    
    if(inputCheck(req.body)){
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.email;
    }
    else{
        return res.status(411).json({
            message: 'Invalid Inputs, try again.'
        })
    }
})

module.exports = router;