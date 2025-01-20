//initializing server
const express = require('express')
const app = express()
const port = 3000
const dotenv = require('dotenv').config()

//Require route
const userRouter = require('./router/user.router')

//require mongoose
const mongoose = require('mongoose')
//connect to db
mongoose.connect(process.env.Mongo_URL)
.then(()=>console.log("mongodb connected"))
.catch((err)=>console.error(err))

app.use(express.json())
app.use('/user',userRouter)


app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})