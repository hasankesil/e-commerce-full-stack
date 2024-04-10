const express = require("express");

const router = express.Router();

const User = require("../models/User.js");


//kullanıcı oluşturma (create-register);

router.post ("/register", async (req , res) => {
    try {
        const {username, email, password} = req.body;
    const newUser  =  await new User ({username, email, password});

    await newUser.save();

        res.status(201).json(newUser)
        console.log(req.body)
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"server error!!"});
    }   

})

module.exports = router;

