const user = require('../models/user.model')

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

    }
    catch(error){
        
    }
}

module.exports = {
    register,
    login
}