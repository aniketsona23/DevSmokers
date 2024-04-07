const { authenticate, getApplications, getProjects ,addProject,applyApp} = require("../controllers/controller")

const express = require('express')
const router = express.Router()


router.get("/auth",async(req,res)=>{
    const {userMail} = req.query
    const userRole =  await authenticate(userMail)
    if (userRole){
        res.json({role :userRole}).status(200)
    }
    else{
        res.json({role:"Invalid"}).status(300)
    }
})

router.get("/getApp",async(req,res)=>{
    const applications =await getApplications(req.query)
    console.log(req.query)
    return applications
})

router.get("/getProj",async(req,res)=>{
    const projects  =await getProjects(req.query)
    return projects
})

router.post('/newProj',async(req,res)=>{
    const status = await addProject(req.query)
    if (status){
        
    }
})

router.post('/newApp',async(req,res)=>{
    const status = await applyApp(req.query)
    if (status){

    }
})
module.exports = router