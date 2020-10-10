const router = require("express").Router();

var productRoutes = require("./product");
var sessionRoutes = require("./session");
var cartRoutes = require("./cart")

router.use("/product", productRoutes);
router.use("/session", sessionRoutes);
router.use("/cart", cartRoutes);

module.exports = router;