const {Router} = require('express');

const RepairController = require('../controllers/Repair');

const RepairRouter = Router();

RepairRouter.post('/', RepairController.postRepair);

module.exports = RepairRouter;
/*RepairRouter.get('/', RepairController.getRepair);*/



