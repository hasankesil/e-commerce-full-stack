const express = require("express");

const router = express.Router();

//! tüm kategorilşeri, getirme (read-all)
router.get("/", async (req, res) => {
  res.send("kategoriler getirildi.");
});

module.exports = router;
