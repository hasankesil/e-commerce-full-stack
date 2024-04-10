const express = require("express");

const router = express.Router();

const User = require("../models/User.js");

const bcrypt = require("bcrypt");



//kullanıcı oluşturma (create-register);

router.post ("/register", async (req , res) => {
    try {
        const {username, email, password} = req.body;

        const existingUser = await User.findOne({email});

        if(existingUser) {
            return res.status(400).json({error: "email address is already registed"})
        }

        const hashedPassword = await bcrypt.hash(password, 10);

    const newUser  =  await new User ({username, email, password: hashedPassword});

    await newUser.save();

        res.status(201).json(newUser)
        console.log(req.body)
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"server error!!"});
    }   

})

module.exports = router;

