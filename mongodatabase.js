const mongobd = require("moongose")
const summerDB=require("./summerData")
const dot =require("dotenv")
dot.config()
function backEnd(){

mongobd.connect(process.env.Connection)
.then(()=>{
    console.log("Conneted")
})
.catch(()=>{
    console.log("error")
})

}
const summerSchema=mongobd.Schema({
    category : String,
    image: String,
    health:String,
    beauty : String,
    dos : String,
    donts : String
})
console.log(summerDB)
const data = mongobd.model("basicData",summerSchema)
module.exports={model:data,connectdb:backEnd}