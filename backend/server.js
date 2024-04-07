require("dotenv").config()
const port = process.env.PORT
const router = require("./routes/router")

const express = require("express")
const app = express()

app.use("/",router)

app.listen(port,()=>{
    console.log(`[+] Server Listening on ${port}`)
})