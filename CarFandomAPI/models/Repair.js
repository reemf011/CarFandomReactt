const {Schema, model}=require(`mongoose`);
const RepairSchema= new Schema({

    MName:{
     
        type:`String`,
        required: true
    },
    RDescription:{
        type:`String`,
        required: true
    },

    RLocation:{
     
        type:`String`,
        required: true
    }
    
})
const RepairModel = model('Repair',RepairSchema);
module.exports=RepairModel;