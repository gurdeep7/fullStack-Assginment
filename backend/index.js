const express = require("express")

const app = express()

app.use(express.json())

const classController = require("./controllers/class.controller")

const teacherController = require("./controllers/teacher.controller")

const searchController = require("./controllers/search.controller")

const {login,register}= require("./controllers/auth.controller")

app.use("/class", classController)

app.use("/teacher",teacherController)

app.use("/search", searchController)

app.post("/register", register); 

app.post("/login", login);


app.get("/", async (req,res)=>{
    res.send("Listening")
})

module.exports = app;
