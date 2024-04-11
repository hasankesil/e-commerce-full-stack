const mongoose = require("mongoose");

const CouponSchema = mongoose.Schema(
  {
    code: { type: String, required: true },
    discountPercent: { type: Number, required: true },
    //indirim oranı
  },
  { timestamps: true }
);

const Coupon = mongoose.model("Coupon", CouponSchema);
module.exports = Coupon;
