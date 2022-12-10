const azMapsService = require('../services/asMaps');
const Repairservice = require('../services/Repair');

module.exports.postRepair = async (req, res) => {
   const RepairInfo ={
    MName: req.body.MName,
    RDescription: req.body.RDescription,
    RLocation: req.body.RLocation
    };
    try{
        const RepairCoords = await azMapsService.gepcodeAddress(req.body.RLocation);
        if(!RepairCoords){
            return res.status(422).send({
                error: 'Could not find a valid location using the given address.'

            });

        }
        const addedRepair = await repairsService.addNewRepair(
            RepairInfo,
            RepairInfo
        );
        res.status(201).send({
         msg: 'Repair added successfully.',
         RepairId: addedRepair._id
        });
    }catch(err){
    res.status(500);
    res.send({
        error: err.message
    });
    }
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
        MName:req.body.MName,
        RDescription:req.body.RDescription,
        RLocation:req.body.RLocation
        
    };
    try {
        const createdRepair = await RepairService.addNewrepair(RepairInfo);
        return res.status(201).send({
            msg: 'Repair mechanics created successfully',
            RepairId: createdRepair.RepairId
        });
    } catch (err) {
        return res.status(500).send({
            error: err.message
        });
    }
};