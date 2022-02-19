const express = require("express")


const router = express.Router()

const teacher = require("../models/teacher.model")
router.get("",async(req,res)=>{
    try{
        const Teacher = await teacher.find().lean().exec()
        res.status(201).send(Teacher)
    }catch(e){
        res.status(500).json({status: e.message})
    }
})

router.post("",async (req,res)=>{
    try{
        const Teacher = await teacher.create(req.body)
        res.status(201).send(Teacher)
    }catch(e){
        res.status(500).json({status: e.message})
    }
})

module.exports = router


