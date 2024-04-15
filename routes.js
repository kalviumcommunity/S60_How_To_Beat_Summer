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
AppRoute.post("/post",async (request,res)=>{
    await model.create(request.body)
    .then((ele)=>{
        res.json(ele)
    })
    .catch((err)=>{
        res.json(err)
    })
})
AppRoute.put("/put/:key",(request,res)=>{
    const key = request.params.key;
    console.log(request.body)
    console.log(key)
    model.findByIdAndUpdate(key,{
    category: request.body.cateory,
    image: request.body.image,
    health: request.body.health,
    beauty: request.body.beauty,
    dos: request.body.dos,
    donts: request.body.donts
    }).then(()=>{res.send("done")})
})
AppRoute.delete("/delete/:key",(request,res)=>{
    const key = request.params.key;
    model.findByIdAndDelete(key)
    .then(e => res.json(e))
    .catch(error => res.status(404).json(error))
})
module.exports = AppRoute
