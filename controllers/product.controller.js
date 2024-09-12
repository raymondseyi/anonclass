const ProductModel = require("../models/product.model")
const fetchAllProduct = (req,res)=>{
    ProductModel.find()
    .then((products)=>{
        console.log(products)
    })
}
const createProduct = (req,res)=>{
    console.log(req.body)
    let form = new ProductModel(req.body)
    form.save()
    .then(()=>{
        console.log("saved successfully")
        res.send({status:true,message:"Data Saved Successfully"})
    })
    .catch((err)=>{
        console.log("e no gree save",err)
        res.send({status:false,message:"Data did not save"})
    })
}
module.exports ={
    fetchAllProduct, createProduct
}