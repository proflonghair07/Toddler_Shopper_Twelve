const productController = require('../../controllers/productController');
var router = require('express').Router();

router
    .route("/")
    .get(productController.findAll);

// router
//     .route('/:id')
//     .get(controller.findById);

router
    .route('/:id')
    .get(productController.findById);

router
    .route('/category/:category')
    .get(productController.findByCategory);

module.exports = router;