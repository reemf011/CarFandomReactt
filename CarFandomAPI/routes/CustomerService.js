const {Router} = require('express');

const custServiceController = require('../controllers/CustomerService');

const custServiceRouter = Router();


custServiceRouter.get('/', custServiceController.getCustServiceEmp);

module.exports = custServiceRouter;