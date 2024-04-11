const expressTech = require("express")
const AppRoute = expressTech()
const {model} = require("./mongodatabase")
AppRoute.get("/get",(request,res)=>{
    model.find({})
    .then((a)=>{ 
        res.json({a});
    })
    .catch((err)=>{
        res.json({err});
    })
})
AppRoute.get("/get",(request,res)=>{
    res.send("Get is successful")
})
AppRoute.post("/post",(request,res)=>{
    res.send("Posted successful")
})
AppRoute.put("/put/:key",(request,res)=>{
    res.send("Updated successful")
})
AppRoute.delete("/delete/:key",(request,res)=>{
    res.send("Deleted successful")
})
module.exports = AppRoute
