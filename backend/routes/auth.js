const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router()
const User = require('../models/User');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const fetchuser = require('../midileware/fetchuser');
const { success } = require('concurrently/src/defaults');



const JWT_SCRIPT = 'brajeshisa$oy';

// Route 1   Authenticate a user using post "/api/auth/createuser" no login required
router.post('/createuser', [
    body('firstname','Enter a valid firstname').isLength({ min: 3 }),
    body('lastname','Enter a valid lastname').isLength({ min: 3 }),
    body('email','Enter a valid email').isEmail(),
    body('password','Password must be atleast 5 charactors').isLength({ min: 5 }),
], async (req,res)=>{
    let success = false;
    //if there are errors return bad request and the error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    try {
    //check user exists
    let user = await User.findOne({email: req.body.email});
    if (user){
        return res.status(400).json({ success, error: " Sorry auser with this email already exists"})
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password,salt)
    //create new user
     user = await User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: secPass,
      })
      const data = {
        user:{
            id: user.id
        }
      }
    const authtoken = jwt.sign(data, JWT_SCRIPT);
    // res.json(user)
    success = true;
    res.json({success, authtoken})


} catch (error) {
    console.log(error.message);
    res.status(500).send("Internal sever error");
}
})

//Route 2  Authenticate a user using post "/api/auth/login" no login required
router.post('/login', [
    body('email','Enter a valid email').isEmail(),
    body('password','Password cannot be blank').exists(),
], async (req,res)=>{
    let success = false;
//if there are errors return bad request and the error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }3
    const {email,password} = req.body;
    try {
        let user = await User.findOne({email});
        if(!user){
            success = false;
            return res.status(400).json({error: "Please try to login with correct credentials"});
        }
        const passCompare =await bcrypt.compare(password,user.password);
        if(!passCompare){
            success = false;
            return res.status(400).json({success, error: "Please try to login with correct credentials"});
        }
        const data = {
            user:{
                id: user.id
            }
          }
        const authtoken = jwt.sign(data, JWT_SCRIPT);
        success = true;
        res.json({success, authtoken})

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal sever error");
    }

})

// Route 3 get login user details using post "/api/auth/getuser" login required
router.post('/getuser',fetchuser, async (req,res)=>{
try {
    userid = req.user.id;
    const user = await User.findById(userid).select("-password");
    res.send(user)
    
} catch (error) {
    console.log(error.message);
    res.status(500).send("Internal sever error");
}
});
module.exports = router