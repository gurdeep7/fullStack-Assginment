const mongoose = require("mongoose")

const teacherSchema = new mongoose.Schema({
    name:{type:String, required:true},
    profile:{type:String, required:false, default:"#"},
    gender:{type:String, required:false, default:"male"},
    age:{type:Number, required:true}
},{
    versionKey:false
})

const teacher = new mongoose.model("teacher",teacherSchema)

module.exports = teacher