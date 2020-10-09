const router = require("express").Router();

var categoryRoutes = require("./category");
var sessionRoutes = require("./session");
var cartRoutes = require("./cart")

router.use("/category", categoryRoutes);
router.use("/session", sessionRoutes);
router.use("/cart", cartRoutes);

module.exports = router;