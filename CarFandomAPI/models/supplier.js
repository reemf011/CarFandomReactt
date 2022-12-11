const {Schema, model} = require ('mongoose');
const SupplierSchema = new Schema ({
    name: {
        type: 'String',
        required: true
    },

    email: {
        type: 'String',
        required: true
    },

    address: {
        type: 'String',
        required: true
    },

    imgURL: {
        type: 'String',
        
    }

});


const Suppliermodel = model('suppliers', SupplierSchema);

module.exports = Suppliermodel;