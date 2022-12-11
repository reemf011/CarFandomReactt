const {Router} = require('express');

const repairController = require('../controllers/Repair');

const repairRouter = Router();

repairRouter.get('/', RepairController.postRepair);

module.exports = repairRouter;
/*RepairRouter.post('/', RepairController.getRepair);*/



