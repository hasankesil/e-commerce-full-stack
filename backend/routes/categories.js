const express = require("express");

const router = express.Router();

const Category = require("../models/Category.js");

router.post("/", async (req, res) => {
  try {
    const { name, img } = req.body;

    const newCategory = new Category({ name, img });

    await newCategory.save();

    res.status(201).json(newCategory);

    console.log(name);
    console.log(img);
  } catch (error) {
    console.log(error);
  }
});

//! tüm kategorilşeri, getirme (read-all)
router.get("/", async (req, res) => {
  res.send("kategoriler getirildi.");
});

module.exports = router;
