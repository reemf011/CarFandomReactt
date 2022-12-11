const RepairModel = require('../models/Repair');

module.exports.findAllProducts = async () => {
    try{
        const repair = await RepairModel.find();
        return repair;
    } catch (err) {
        throw new Error ('Could not retrieve repair centers models');
    }
};


module.exports.addNewRepair = async (RepairInfo) => {
    try {
        const repair = new RepairModel ({
        MName:req.body.MName,
        RDescription:req.body.RDescription,
        RLocation:req.body.RLocation
        });
        const createdRepair = await RepairModel.save();
        return createdRepair;
    } catch (err) {
        throw new Error ('could not create Repair Center');
    }
};