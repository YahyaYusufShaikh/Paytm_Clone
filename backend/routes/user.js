const express = require('express');
const {User} = require('../db.js') 
const zod = require('zod');
const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../config.js')
const router = express.Router();

const signupSchema = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstname: zod.string(),
    password: zod.string(),
})

router.post('/signup', async(req, res)=>{
    const body = req.body;
    const {success} = signupSchema.safeParse(req.body);
    if(!success){
        return res.json({
            message: "Email already taken/ invalid",
        })
    }

    const user = User.findOne({
        username: body.username
    })

    if(user._id){
        return res.json({
            message: "Email. already taken/ invalid",
        })
    }

    const dbUser = await User.create(body);
    const token = jwt.sign({
        userId: dbUser._id,
    }, JWT_SECRET)
    res.json({
        token: token 
    })

})



module.exports = router;