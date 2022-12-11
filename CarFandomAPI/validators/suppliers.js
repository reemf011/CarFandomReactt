const { check }= require('express-validator');

module.exports.validatePostSupplier = () => {
    const validationMiddlewares=[
        check('name').notEmpty().withMessage('Supplier name cannot be empty. '),
        check('email').isEmail().withMessage('Supplier email id invalid'),
        check('address').notEmpty().withMessage('Supplier address cannot be empty')
    ];
    return validationMiddlewares;
};