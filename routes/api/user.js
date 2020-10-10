var controller = require("../../controllers/userController")
var router = require('express').Router();

console.log('setting login routes');

router
    .route('/login')
    .post(controller.login);

router
    .route('/logout')
    .post(controller.logout);

router
    .route('/create')
    .post(controller.createUser);

module.exports = router;
