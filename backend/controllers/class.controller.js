const express = require("express")

const clas = require("../models/class.model")

const router = express.Router()

router.get("",async (req,res)=>{
try{
    const Clas = await clas.find().populate("teacher").lean().exec()
    res.status(201).send(Clas)
}catch(e){
    res.status(500).json({status: e.message})
}
})

router.post("",async(req,res)=>{
    try{
        const Clas = await clas.create(req.body)
        res.status(201).send(Clas)
    }catch(e){
        res.status(500).json({status: e.message})
    }
})

module.exports = router