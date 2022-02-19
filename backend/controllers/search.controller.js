const express = require("express")
const router = express.Router()

const clas = require("../models/class.model")

const teacher = require("../models/teacher.model")

router.get("", async (req,res)=>{
   try {const page = +req.query.page
    console.log(page)
    const subject = req.query.subject
    console.log(subject)
if(subject == undefined || subject == ""){
    const Class = await clas.find().skip((page-1)*3).limit(3).populate("teacher").lean().exec()

    const totalPages = Math.ceil(await clas.find().countDocuments()/3)

    res.status(201).json({error:false, Class, totalPages})
}else{
    const Class = await clas.find({subject:subject}).skip((page-1)*3).limit(3).populate("teacher").lean().exec()

    const totalPages = Math.ceil(await clas.find({subject:subject}).countDocuments()/3)
console.log("subject")
    res.status(201).json({error:false, Class, totalPages})
}
}catch(e){
res.status(501).json({error:true , message: e.message})
}
})

module.exports = router