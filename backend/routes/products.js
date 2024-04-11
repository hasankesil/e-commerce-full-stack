const express = require("express");

const router = express.Router();

const Product = require("../models/Product.js");

//yeni ürün oluşturma
router.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body);

    await newProduct.save();

    res.status(201).json(newProduct);

    console.log(name);
    console.log(img);
  } catch (error) {
    console.log(error);
  }
});

//! tüm ürünleri getirme (read-all)
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    console.log("products başarıyla getirildi:", products);
    res.status(200).json(products);
  } catch (error) {
    console.error("productsları getirirken bir hata oluştu:", error);
    res.status(500).json({ error: "Sunucu hatası!!" });
  }
});

// Belirli bir ürün getirme (read-single)

router.get("/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "ürün bulunamadı" });
    }

    console.log("ürün başarıyla getirildi:", product);
    res.status(200).json(product);
  } catch (error) {
    console.error("ürün getirilirken  hata oluştu", error);
    res.status(500).json({ error: "sunucu hatası!!" });
  }
});

module.exports = router;
