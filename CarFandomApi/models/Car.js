const {Schema, model} = require ('mongoose');
const CarSchema = new Schema ({
    car_model: {
        type: 'String',
        required: true
    },

    car_color: {
        type: 'String',
        required: true
    },

    car_price: {
        type: 'Number',
        required: true
    },

    car_name: {
        type: 'String',
        required: true
    },

    car_year: {
        type: 'Number',
        required: true
    },

    car_description: {
        type: 'String',
        required: true
    }
});


const CarModel = model('car', CarSchema);

module.exports = CarModel;