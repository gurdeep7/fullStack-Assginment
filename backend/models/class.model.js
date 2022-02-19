const mongoose = require("mongoose")

const clasSchema =  new mongoose.Schema({
    grade:{type:String, required: true},
    section: {type:String, required:true},
    subject:{type: String, required:true},
    teacher:{type: mongoose.Schema.Types.ObjectId,
        ref:"teacher",
        required:true
    }
},{
    versionKey:false
})

const clas = new mongoose.model("clas", clasSchema)

module.exports = clas