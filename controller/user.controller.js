const user = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
require('dotenv').config()
const register = async (req,res)=>{
    try{
        const data = req.body
        let pass = data.password
        pass = await bcrypt.hash(pass,10)
        data.password = pass

        const object = await user.create(data)
        res.status(200).json(data)
        }
    catch(error){
        console.log(error)
        res.status(500).json("Error creating user")
    }
}

const login = async (req,res)=>{
    try{
        const data = req.body
        const email = await user.findOne({email:data.email})
        
        console.log(email.password,data.password)
        
        if(email && validate(email.password,data.password)){
            const token = jwt.sign({id:email._id},process.env.Jwt_key)
            res.status(200).json({"message":"login successfull",token:token})
        }
    }
    catch(error){
        console.log(error,"this is error")
        res.status(500).json("Error in login")
    }
}

const validate = async (haash,simple)=>{
    if(!haash || !simple){
        console.log("one is missing")
    }
    const v  = await bcrypt.compare(simple,haash)
    return v;
}

module.exports = {
    register,
    login
}