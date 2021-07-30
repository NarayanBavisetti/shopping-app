const express = require('express')
const mongoose = require("mongoose")
const Product = require("./models/productSchema")
const app = express();

mongoose.connect('mongodb+srv://narayan:ashabala@mern-crud.nmch8.mongodb.net/PROJECT0?retryWrites=true&w=majority',{
    useCreateIndex:true,
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify:false
}).then((() => console.log("Connected DB")))
.catch(err => console.log(err));


const PORT = process.env.PORT || 5000;

app.get("/hi",(req,res) => {
    res.send("Ji haa");
})
app.get("/products",(req,res) => {
    res.send("Ji haa");
})

app.listen(PORT, console.log(`PORT is startes at ${PORT}`))