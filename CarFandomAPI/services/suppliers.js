const Suppliermodel=require('../models/suppliers');
module.exports.findAllSuppliers= async ()=>{
    try{
        const suppliers= await Suppliermodel.find();
        return suppliers;
    }catch(err){
        throw new Error('Could not retrieve suppliers');
    }
}
module.exports.addNewSupplier = async(Sinfo) =>{
    try{
        const supp= new Suppliermodel({
        
            name: Sinfo.name,
            email: Sinfo.email,
            address: Sinfo.address,
            imgURL: Sinfo.imgURL
        });
        const createdSupplier=await suppliers.save();
        return createdSupplier;
    }catch(err){
        throw new Error('Could not create supplier');
    }
};