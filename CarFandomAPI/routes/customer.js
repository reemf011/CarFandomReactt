const {Router}=require('express');
const customerController=require('../controllers/customer');
const customerrouter=Router();
customerrouter.get('/',customerController.getCustomer);
module.exports=customerrouter;
customerrouter.post('/',customerController.postCustomer);