const expressTech = require("express")
const AppRoute = expressTech()

AppRoute.get("/get",(request,respond)=>{
    respond.send("Get is successful")
})

AppRoute.post("/post",(request,respond)=>{
    respond.send("Posted successful")
})

AppRoute.put("/put/:key",(request,respond)=>{
    respond.send("Updated successful")
})

AppRoute.delete("/delete/:key",(request,respond)=>{
    respond.send("Deleted successful")
})

module.exports = AppRoute