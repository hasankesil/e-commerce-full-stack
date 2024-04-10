const express = require("express");

const router = express.Router();

const Category = require("../models/Category.js");

// yeni bir kategori oluşturma (Create)

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

//! tüm kategorileri, getirme (read-all)
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    console.log("Kategoriler başarıyla getirildi:", categories);
    res.status(200).json(categories);
  } catch (error) {
    console.error("Kategorileri getirirken bir hata oluştu:", error);
    res.status(500).json({ error: "Sunucu hatası!!" });
  }
});


module.exports = router;
