const express = require("express");


const router = express.Router();

const CryptoJs = require("crypto-js");

const User = require("../models/User");

const jwt = require('jsonwebtoken');


//REGISTER

router.post('/register', async(req,res) =>{



    const newUser = User({


        username: req.body.username,

        email: req.body.email,

        password: CryptoJs.AES.encrypt(req.body.password, process.env.PASS).toString(),
    });


    try {


        const user = await newUser.save();

        res.status(201).json(user);
        
    } catch (error) {
        
        res.status(500).json(error);
    }

})


//LOGIN


router.post("/login", async(req,res) => {

try {

    const user = await User.findOne({username: req.body.username});

    !user && res.status(401).json("You have not registered");
    
    const hashedPassword = CryptoJs.AES.decrypt(user.password, process.env.PASS);

    const originalPassword = hashedPassword.toString(CryptoJs.enc.Utf8);


    originalPassword !== req.body.password && res.status(401).json("wrong credentials");

    const {password, ...info} = user._doc;

    const accessToken = jwt.sign({id:user._id, isAdmin: user.isAdmin}, process.env.JWT_SEC, {expiresIn: '10d'});


    res.status(200).json({...info, accessToken});


    
} catch (error) {


    res.status(500).json(error);
    
}

})

module.exports = router;

