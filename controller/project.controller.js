const project = require('../models/project.model')
const user = require('../models/user.model')
const auth = require('./auth')

const createProject = async(req,res)=>{
    try{
            const rol = await user.findById(req.user.id)
            if(rol.role === "student"){
              const data = req.body
              const object = await project.create(data)
              return res.status(200).json({message:"project crreated",object})
            }
            res.status(500).json("only student can create project")
    }
    catch(error){
        console.log(error)
        res.status(500).json("Error")
    }
}

const getProject = async(req,res)=>{
    try{
        const rol = await user.findById(req.user.id)
        if(rol.role === "student"){
            const data = await project.findById(rol)
            res.status(200).json({"message":"this is your project",data})
        }
        if(rol.role === "supervisor"){
            const data = await project.find()
            res.status(200).json({"message":"These are all projects",data})
        }
        
    }
    catch(error){
        console.log(error)
        res.status(500).json("Error")
    }
}

const getProjects = async(req,res)=>{
    try{
        const rol = await user.findById(req.user.id)
        const id = req.params.id
        if(rol.role === "student" && rol._id=== id){
            const data = await project.findById(rol)
            res.status(200).json({"message":"this is your project",data})
        }
        if(rol.role === "supervisor"){
            const data = await project.findById(id)
            res.status(200).json({"message":"This is the project",data})
        }
        
    }
    catch(error){
        console.log(error)
        res.status(500).json("Error")
    }
}

module.exports = {
    createProject,
    getProject,

}