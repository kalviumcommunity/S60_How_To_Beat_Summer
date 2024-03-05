var express = require("express")
var app = express()

app.get("/ping",(req,res)=>{
    return res.send("pong")
})

app.listen(8080,()=>{
    console.log("This is Express.js file.")
})