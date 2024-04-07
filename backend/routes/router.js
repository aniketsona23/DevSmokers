const {authenticate} = require("../controllers/controller")

const express = require('express')
const router = express.Router()


router.post("/auth",(req,res)=>{
    const {userMail} = req.body
    const userRole =  authenticate(userMail)
    if (userRole){
        res.json({role :userRole}).status(200)
    }
    else{
        res.json({role:"Invalid"}).status(300)
    }
})

