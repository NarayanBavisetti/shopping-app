const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    desc:{
        type:String,
        require:true
    },
    img:{
        type:String,
        require:true
    }
})

const Product = mongoose.model("Shopping-app-product",postSchema);

module.exports = Product;