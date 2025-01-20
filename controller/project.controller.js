const project = require('../models/project.model')
const user = require('../models/user.model')
const auth = require('./auth')

const createProject = async(req,res)=>{
    try{
            const rol = await user.findById(req.user.id)
            if(rol.role === "student"){
              const data = req.body
              data.studentId = req.user.id 
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
            console.log(rol._id)
            const data = await project.findOne(rol.studentId)
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
        if(rol.role === "student" ){            
            const data = await project.findById(id)
            console.log(data.studentId)
            console.log(rol._id)
            if (data.studentId.equals(rol._id)) {
                return res.status(200).json({ 
                    message: "This is your project", 
                    data 
                });
            } else {
                return res.status(403).json({ 
                    message: "You are a student and are not allowed to access this data" 
                });
            }
                           
        }
        if(rol.role === "supervisor"){
            const data = await project.findById(id)
          return  res.status(200).json({"message":"This is the project",data})
        }
        
        res.json("both are not matched")
    }
    catch(error){
        console.log(error)
        res.status(500).json("Error")
    }
}

const deleteProject = async(req,res)=>{
    try{
        const rol = await user.findById(req.user.id)
        const id = req.params.id

        if(rol.role === "supervisor"){
          const data = req.body
          const object = await project.findByIdAndDelete(id)
          return res.status(200).json({message:"project deleted",object})
        }
        res.status(500).json("only supervisor can delete project")
    }
    catch(error){
    console.log(error)
    res.status(500).json("Error")
    }
}

const updateProject = async(req,res)=>{
    try{
        const rol = await user.findById(req.user.id)
        const id = req.params.id

        if(rol.role === "supervisor"){
          const data = req.body
          const object = await project.findByIdAndUpdate(id,data)
          return res.status(200).json({message:"project updated",object})
        }
        res.status(500).json("only supervisor can update project")
    }
    catch(error){
    console.log(error)
    res.status(500).json("Error")
    }
}
module.exports = {
    createProject,
    getProject,
    getProjects,
    updateProject,
    deleteProject

}