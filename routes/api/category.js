const categoryController = require('../../controllers/categoryController');
var controller = require('../../controllers/categoryController');
var router = require('express').Router();

router
    .route("/")
    .get(categoryController.findAll);

router
    .route('/:id')
    .get(controller.findById);

router
    .route('/:id/toys')
    .get(controller.getToysForCategory);

module.exports = router;