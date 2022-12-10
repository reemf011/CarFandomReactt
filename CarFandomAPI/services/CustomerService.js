const CustomerServiceModel = require('../models/CustomerService');

module.exports.findAllEmployees = async () => {
    try{
        const Employees = await CustomerServiceModel.find();
        return Employees;


    } catch(err){
    throw new Error("could not retrieve customer service employees");
}
};
module.exports.addNewEmployees = async (EmployeesInfo) => {
    try{
        const Employees = new CustomerServiceModel({
        custServiveID: addNewEmployees.custServiveID,
        custServiveName: addNewEmployees.custServiveName,
        custServiceRole: addNewEmployees.custServiceRole,
        custServiceEmail: addNewEmployees.custServiceEmail,
        custServicePhoneNum: addNewEmployees.custServicePhoneNum,
        custServiceAge: addNewEmployees.custServiceAge,
        custServiceSalary: addNewEmployees.custServiceSalary
    });
    const createdEmployee = await CustomerServiceModel.bulkSave();
    return createdEmployee;


    } catch(err){
    throw new Error("could not create customer service employees");
}
};