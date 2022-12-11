const {Router} = require('express');
const suppliersController = require('../controllers/suppliers');

const suppliersRouter = Router();

suppliersRouter.post('/',suppliersController.postSupplier);

module.exports = suppliersRouter;