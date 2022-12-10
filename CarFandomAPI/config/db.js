const mongoose = require('mongoose');
const initiateDBConnection = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_CONNECTION_URI);
        console.log(`connected to mongo DB server`);
    } catch (error) {
        console.log(error);
    }

    };
module.exports = initiateDBConnection;    
