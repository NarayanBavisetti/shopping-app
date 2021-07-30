const express = require("express");
const Product = require("../models/productSchema");
const router = express.Router();


router.get('/products',async(req,res) => {
    try{
        const products = await Product.find({});
        res.json(products)
    }catch(e){
        console.log("Error in getting the product")
    }
})
router.post("/products",async(req,res) => {
    const {name,img,desc,price} = req.body;

    if(!name || !img || !desc || !price){
        return res.status(400).json({msg:"Please fill all the details"})
    }
    await Product.create(req.body)
    res.status(200).json(Product)
    // console.log(req.body);
}
)

router.get(`/products/:id`,async(req,res) => {
 const data = await Product.findById(req.params.id)
     return res.json(data)

})

router.patch(`/products/:id`,async(req,res) => {
    const data = await Product.findByIdAndUpdate(req.params.id,req.body)
        return res.json(data);
   
   })

   router.delete(`/products/:id`,async(req,res) => {
    const data = await Product.findByIdAndDelete(req.params.id)
        return res.json(data);
   
   })


module.exports = router