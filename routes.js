var controller = require('./Controller/controller');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/', controller.api);


module.exports = router;