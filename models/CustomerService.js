const {Schema, model} = require('mongoose');

const CustomerServiceSchema = new Schema({
    custServiceID:{
        type:'Number',
        required: true
    },
    custServiceName:{
        type:'Number',
        required: true
    },
    custServiceRole:{
        type:'String',
        required: true
    },
    custServiceEmail:{
        type:'String',
        required: true
    },
    custServicePhoneNum:{
        type:'Number',
        required: true
    },
    custServiceAge:{
        type:'Number',
        required: true
    },
    custServiceSalary:{
        type:'Number',
        required: true
    }

});

const CustomerServiceModel = model('Customer Service', CustomerServiceSchema);
module.exports = CustomerServiceModel;