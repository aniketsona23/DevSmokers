const { authenticate, getApplications, getProjects ,addProject,applyApp , dropProj,changeStatus} = require("../controllers/controller")

const express = require('express')
const router = express.Router()

router.get("/",(req,res)=>{
    res.send("Hello")
})
router.get("/auth",async(req,res)=>{
    const {email} = req.query
    console.log(email)
    const userRole =  await authenticate(email)
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
    if (status.success){
        res.status(200)
    }
})

router.post('/newApp',async(req,res)=>{
    const status = await applyApp(req.query)
    if (status.success){
        res.status(200)
    }
})

router.patch("/status",async(req,res)=>{
    const statu = await changeStatus(req.query)
})

router.delete("/dropProj",async(req,res)=>{
    const statu = await dropProj(req.query)
})
module.exports = router