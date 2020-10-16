var controller = require('../../controllers/cartController');
var router = require('express').Router();

// router
    // .route('/get:id')
    // .get(controller.getByEmail);

router
    .route('/add')
    .post(controller.addToyToCart);
    //add user id as param as well and a product id


router
    .route('/remove')
    .post(controller.removeToyFromCart);

router
    .route('/checkout/:id')
    .get(controller.checkout);

router
    .route('/clear/:id')
    .delete(controller.clear);

module.exports = router;