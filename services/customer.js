const Customermodel=require('../models/Customer');
module.exports.findAllProducts= async ()=>{
    try{
        const customer= await Customermodel.find();
        return customer;
    }catch(err){
        throw new Error('Could not retrieve products');
    }
}
module.exports.addNewCustomer = async(cinfo) =>{
    try{
        const cust= new Customermodel({
            ID : cinfo.ID,
            Name:cinfo.Name,
            phonenumber:cinfo.phonenumber,
            Email:cinfo.Email
        });
        const createdcustomer=await customer.save();
        return createdcustomer;
    }catch(err){
        throw new Error('Could not create product');
    }
};