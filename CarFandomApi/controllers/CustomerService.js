const CustService_Services = require('../services/CustomerService');

module.exports.getCustServiceEmp = async (req, res) => {
    try{
        const Employees = await CustService_Services.findAllEmployees();
        res.send({Employees});

    } catch(err){
        res.status(500);
        res.send({
            error: err
        });
    }

}