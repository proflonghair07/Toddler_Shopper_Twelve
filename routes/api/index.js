const router = require("express").Router();

var productRoutes = require("./product");
var userRoutes = require("./user");
var cartRoutes = require("./cart")

router.use("/product", productRoutes);
router.use("/user", userRoutes);
router.use("/cart", cartRoutes);

module.exports = router;