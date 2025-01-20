const mongoose = require('mongoose')
const {Schema}  = require('mongoose')

const userSchema = new Schema({
    name:String,
    email:String,
    password:String,
    role:{
        type:String,
        enum:['student','supervisor']
    },
    department:String
})

const user = mongoose.model('user',userSchema)

module.exports = user