const carService = require('../services/Car');

module.exports.getCar = async (req, res) => {
    try {
        const car = await carService.findAllProducts();
        res.send({car});
    } catch (err) {
        res.status(500);
        res.send({
            error: err
        });
    }
};


module.exports.postCar = async (req, res) => {
    const carInfo = {
        model: req.body.model,
        color: req.body.color,
        price: req.body.price,
        name: req.body.name,
        year: req.body.year,
        description: req.body.description
    };
    try {
        const createdCar = await carService.addNewCar(carInfo);
        return res.status(201).send({
            msg: 'car created successfully',
            CarID: createdCar._id
        });
    } catch (err) {
        return res.status(500).send({
            error: err.message
        });
    }
};