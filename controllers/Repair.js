const Repairservice = require('../services/Repair');

module.exports.getRepair = async (req, res) => {
    try {
        const repair = await RepairService.findAllProducts();
        res.send({repair});
    } catch (err) {
        res.status(500);
        res.send({
            error: err
        });
    }
};


module.exports.postRepair = async (req, res) => {
    const RepairInfo = {
        RId:req.body.RID,
        MName:req.body.MName,
        RDescription:req.body.RDescription,
        RLocation:req.body.RLocation
        
    };
    try {
        const createdRepair = await RepairService.addNewrepair(RepairInfo);
        return res.status(201).send({
            msg: 'Repair mechanics created successfully',
            RID: createdRepair.RID
        });
    } catch (err) {
        return res.status(500).send({
            error: err.message
        });
    }
};