const azMapsService = require('../services/azMaps');
const suppliersService = require('../services/suppliers');

module.exports.postSupplier = async(req,res) => {
    const supplierInfo ={

    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    imgURL: req.body.imgURL
};

try{
    const supplierCoods = await azMapsService.geocodeAddress(req.body.address);
    if(!supplierCoods){
        return res.status(422).send({
            error: 'Could not find a valid location using the given address'
        });
    }
    const addedSupplier = await suppliersService.addNewSupplier(
        supplierInfo,
        supplierCoods
    );

    res.status(201).send({
        msg: 'Supplier added successfully',
        supplierId: addedSupplier._id
    });
}catch(err){
    res.status(500);
    res.send({
        error:err.message
    });
}
};