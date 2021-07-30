const express = require('express')
const mongoose = require("mongoose")
const Product = require("./models/productSchema")
const app = express();
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL,{
    useCreateIndex:true,
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify:false
}).then((() => console.log("Connected DB")))
.catch(err => console.log(err));


const PORT = process.env.PORT || 5000;

app.use(express.json())

// const authroute = require("./routes/authRoute")
// app.use(authroute);
// app.get("/hi",(req,res) => {
//     res.send("Ji haa");
// })
// app.get("/products",(req,res) => {
//     res.send("Ji haa");
// })
const productRoute = require("./routes/productRoute")
app.use(productRoute);
app.listen(PORT, console.log(`PORT is startes at ${PORT}`))