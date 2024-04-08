require("dotenv").config()
const port = process.env.PORT
const cors = require("cors")
const router = require("./routes/router")

const express = require("express")
const app = express()


app.use(cors());
app.use("/api",router)

app.listen(port,()=>{
    console.log(`[+] Server Listening on ${port}`)
})