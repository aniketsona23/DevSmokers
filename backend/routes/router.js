const {authenticate} = require("../controllers/controller")

const express = require('express')
const router = express.Router()


router.get("/auth",async(req,res)=>{
    const {userMail} = req.query
    const userRole =  await authenticate(userMail)
    console.log(userRole    )
    if (userRole){
        res.json({role :userRole}).status(200)
    }
    else{
        res.json({role:"Invalid"}).status(300)
    }
})

module.exports = router
