const expressTech = require("express")
const AppRoute = expressTech()
const {model,clientModel} = require("./mongodatabase")
const schema = require("./SchemaJoi")
const jwt = require("jsonwebtoken")
const env = require("dotenv")

env.config()

AppRoute.get("/get",(request,res)=>{
    model.find({})
    .then((a)=>{ 
        res.json({a});
    })
    .catch((err)=>{
        res.json({err});
    })
})
AppRoute.post("/post", (request,res)=>{
    const {error, value} = schema.validate(request.body)
    if(error){
        return res.json({message : "Invalid input", error : error.message})
    }
 model.create(request.body)
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

AppRoute.post("/sign", (request,res)=>{
    clientModel.create(request.body)
    .then((ele)=>{
        res.json(ele)
    })
    .catch((err)=>{
        console.log(err)
        res.json(err)
    })
})

AppRoute.post("/login", (request, res) => {
    const {name,email,pin} = request.body
    clientModel.findOne({email : email})
    .then(infro => {
        console.log(name,"outside if")
        if(infro){
            if(infro.pin === pin && infro.name === name){
                const token = jwt.sign({name : infro.name, email : infro.email}, process.env.key)
                res.json({message:"User Login",cookieToken : token})

            }else{
                console.log("User detail did not match")
                res.json({message: "Invalid user details, Prefer to signup"})
            }
        }else{
            console.log("login failed")
            res.json({message: "Invalid user details, Prefer to signup"})
        }
    })
    .catch(error => {
        console.log(`Error: ${error.message}`);
        res.json({ message: "An error occurred during login" });
    });
})

AppRoute.delete("/delete/:key",(request,res)=>{
    const key = request.params.key;
    model.findByIdAndDelete(key)
    .then(e => res.json(e))
    .catch(error => res.status(404).json(error))
})
module.exports = AppRoute
