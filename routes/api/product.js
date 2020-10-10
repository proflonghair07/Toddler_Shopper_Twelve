const productController = require('../../controllers/productController');
var controller = require('../../controllers/productController');
var router = require('express').Router();

router
    .route("/")
    .get(productController.findAll);

router
    .route('/:id')
    .get(controller.findById);

router
    .route('/:id/toys')
    .get(controller.getToysForCategory);

module.exports = router;