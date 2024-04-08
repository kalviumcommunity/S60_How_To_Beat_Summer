var express = require("express")
var app = express()
const {connectdb,model} = require("./mongodatabase")
function getted(){
    return model.db.readyState === 1
}

app.get("/ping",(req,res)=>{
    const checking = getted()
    let con = checking? "connected" : "not connected"
    return res.send(con)
})

app.listen(8080,()=>{
    connectdb()
    console.log("This is Express.js file.")
})