const customerservice=require('../services/Customer');
module.exports.getCustomer= async(req,res)=>{
    try{
        const customer= await customer.findAllProducts();
        res.send({customer});
    }catch(err){
        res.status(500);
        res.send({
            error:err
        });
    }
};

module.exports.postCustomer = async(req,res)=>{
    const customerInfo ={
        ID: req.body.ID,
        Name:req.body.Name,
        phonenumber:req.body.phonenumber,
        Email:req.body.Email
    };
    try{
        const createdcustomer = await customerservice.addNewCustomer(customerInfo);
        return res.status(201).send({
            msg:'Customer created successfully',
            customerid: createdcustomer.ID
        });
    }catch(err){
        return res.status(500).send({
            error:err.message 
        });
    }
}