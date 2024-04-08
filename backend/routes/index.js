const express = require("express");

const router = express.Router();

// diğer route dosyalarını içe aktarıyoruz.

const productRoute = require("./products.js");
const categoryRoute = require("./categories.js");

// her rotayı ilgili yol altında kullanıyoruz.

router.use("/categories", categoryRoute)
router.use("/products", productRoute);

module.exports = router;

