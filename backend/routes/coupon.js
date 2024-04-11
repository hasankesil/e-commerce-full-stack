const express = require("express");

const router = express.Router();

const Coupon = require("../models/Coupon.js");


// Yeni bir kupon oluşturma (Create)
router.post("/", async (req, res) => {
    try {
      const newCoupon = new Coupon(req.body);
      await newCoupon.save();

      res.status(201).json(newCoupon);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error." });
    }
  });

  //! tüm kuponları, getirme (read-all)
router.get("/", async (req, res) => {
  try {
    const coupons = await Coupon.find();
    console.log("Kategoriler başarıyla getirildi:", coupons);
    res.status(200).json(coupons);
  } catch (error) {
    console.error("Kategorileri getirirken bir hata oluştu:", error);
    res.status(500).json({ error: "Sunucu hatası!!" });
  }
});

// Belirli bir kuponu getirme (Read - Single by Coupon ID)
router.get("/:couponId", async (req, res) => {
  try {
    const couponId = req.params.couponId;

    const coupon = await Coupon.findById(couponId);

    if (!coupon) {
      return res.status(404).json({ error: "Coupon not found." });
    }
  

    res.status(200).json(coupon);
 } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});


// Belirli bir kuponu getirme (Read - Single by Coupon Code)
router.get("/code/:couponCode", async (req, res) => {
  try {
    const couponCode = req.params.couponCode;

    const coupon = await Coupon.findOne({ code: couponCode });

    if (!coupon) {
      return res.status(404).json({ error: "Coupon not found." });
    }
    const { discountPercent } = coupon;
    res.status(200).json({ discountPercent });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});





  module.exports = router