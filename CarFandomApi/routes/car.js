const {Router} = require('express');

const carController = require('../controllers/Car');

const carRouter = Router();


carRouter.get('/', carController.getCar);

module.exports = carRouter;

carRouter.post('/', carController.postCar);