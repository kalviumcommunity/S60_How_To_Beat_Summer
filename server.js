const express = require("express")
const app = express()
const cors = require("cors")
const route = require("./routes")
const {connectdb,model} = require("./mongodatabase")

app.use(cors())
app.use(express.json())
app.use("/",route)
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

