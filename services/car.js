const CarModel = require('../models/Car');

module.exports.findAllProducts = async () => {
    try{
        const car = await CarModel.find();
        return car;
    } catch (err) {
        throw new Error ('Could not retreiev car models');
    }
};


module.exports.addNewCar = async (carInfo) => {
    try {
        const car = new CarModel ({
            model:carInfo.model,
            color: carInfo.color,
            price: carInfo.price,
            name: carInfo.name,
            year: carInfo.year,
            description: carInfo.description
        });
        const createdCar = await car.save();
        return createdCar;
    } catch (err) {
        throw new Error ('could not create car');
    }
};