// const express = require('express');
// const user = require('../models/userSchema');
// const router = express.Router();
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')

// router.post('/register',async(req,res) => {

//     try{
//     const {username,email,password,confirmpassword} = req.body;
//     if(!username,!email,!password,!confirmpassword){
//         return res.status(400).json({msg:"Please fill all the details"})
//     }
//     if(password !==confirmpassword){
//         return res.status(400).json({msg:"Passwords does not match"})
//     }
//     const check = await user.findOne({email})
//     if(check){
//         return res.status(400).json({msg:"User already exist"})
//     }
//     const salt = await bcrypt.genSalt();
//     const sg = await bcrypt.hash(salt,password)
 
// }catch(e){
//     return res.status(500).json({msg:"Server side error"})
// }

// })


// router.post("/login", async(req,res) => {
//     const {email,password} = req.body;
// try{
//     if(!email || !password){
//         return res.status(400).json({msg:"Please fill all the deatils"});
//     }
//     const existingUser = await user.findOne({email})
//     if(!existingUser){
//         return res.status(400).json({msg:"Account deos not exist"});
//     }
//     const check = await bcrypt.compare(password,existingUser.password)
//     if(!check){
// return res.status(400).json({msg:"Incorrect Password"})
//     }

// }
// catch(e){
//     return res.status(500).json({msg:"Server issue"})
// }
// })

//module.exports = router