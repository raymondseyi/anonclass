const express = require("express");
const app = express();
const PORT = 5002
const mongoose = require("mongoose")
app.use(express.urlencoded({extended:true}))
// bodyParser
// Connect to MongoDB
// URI - Uniform Resource Identifier
// CRUD - CREATE, READ, UPDATE, DELETE
require("dotenv").config()
const ProductModel = require("./models/product.model")
const URI = process.env.MONGO_DB_URI
mongoose.connect(URI)
.then(()=>{
    console.log("mongodb iyaf connect")
})
.catch((err)=>{
    console.log("an err occured",err)
})

app.post("/createproduct",(req,res)=>{
    console.log(req.body)
    let form = new ProductModel(req.body)
    form.save()
    .then(()=>{
        console.log("saved successfully")
    })
    .catch((err)=>{
        console.log("e no gree save",err)
    })
})
app.get("/allproducts",(req,res)=>{
    ProductModel.find()
    .then((products)=>{
        console.log(products)
    })
})

app.listen(PORT,(err)=>{
    if(err){
        console.log("Node no gree start")
    }else{
        console.log("Node iyfa start")
    }
})
