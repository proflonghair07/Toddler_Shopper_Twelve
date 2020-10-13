var controller = require('../../controllers/cartController');
var router = require('express').Router();

router
    .route('/:id')
    .get(controller.getByEmail);

router
    .route('/add/:id')
    .post(controller.addToyToCart);
    //add user id as param as well and a product id

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