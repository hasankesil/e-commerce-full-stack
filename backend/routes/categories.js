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

// Belirli bir kategori getirme (read-single)

router.get("/:categoryId", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const category = await Category.findById(categoryId);
    console.log("kategori başarıyla getirildi:", category);
    res.status(200).json(category);
  } catch (error) {
    console.error("kategori getirilirken  hata oluştu", error);
    res.status(500).json({ error: "sunucu hatası!!" });
  }
});

// update

router.put("/:categoryId", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const updates = req.body;

    const updatedCategory = await Category.findByIdAndUpdate(
      categoryId,
      updates,
      { new: true }
    );

    if (!updatedCategory) {
      return res.status(404).json({ error: "Kategori bulunamadı." });
    }

    res.status(200).json(updatedCategory);
  } catch (error) {
    console.error("Kategori güncellenirken bir hata oluştu:", error);
    res.status(500).json({ error: "Sunucu hatası." });
  }
});

//delete

router.delete("/:categoryId", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;

    const deletedCategory = await Category.findByIdAndDelete(categoryId);

    if (!deletedCategory) {
      return res.status(404).json({ error: "Category not found." });
    }

    res.status(200).json(deletedCategory);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;
