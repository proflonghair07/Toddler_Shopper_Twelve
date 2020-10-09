var controller = require('../../controllers/sessionController');
var router = require('express').Router();

console.log('setting login routes');

router
    .route('/login')
    .post(controller.login);

router
    .route('/logout')
    .post(controller.logout);

module.exports = router;
