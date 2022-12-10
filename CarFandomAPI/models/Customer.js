const {Schema, model}=require('mongoose');
const CustomerSchema= new Schema({
    ID:{
        type:'Number',
        required: true
    },
    Name:{
     
        type:'String',
        required: true
    },
    phonenumber:{
        type:'Number',
        required: true
    },

    Email:{
     
        type:'String',
        required: true
    },
    
})
const CustomerModel = model('Customer',CustomerSchema);
module.exports=CustomerModel;