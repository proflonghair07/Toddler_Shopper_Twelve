var controller = require('../../controllers/cartController');
var router = require('express').Router();

router
    .route('/:id')
    .get(controller.getById);

router
    .route('/add/:id')
    .post(controller.addToyToCart);

router
    .route('/remove/:id')
    .delete(controller.removeToyFromCart);

router
    .route('/checkout/:id')
    .post(controller.checkout);

router
    .route('/clear/:id')
    .delete(controller.clear);

module.exports = router;