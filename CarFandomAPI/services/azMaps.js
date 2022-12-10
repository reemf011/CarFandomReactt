const axios = require('axios');

module.exports.geocodeAddress = async (address) => {
    const requestURL = `https://atlas.microsoft.com/search/address/json?api-version=1.0&subscription-key=${process.env.AZ_MAPS_SEARCH_API_KEY}&query=${RLocation}`;

    try{
        const {data} = await axios.get(requestURL);

        if(data.summary.numResults<1){
            return null;
        }
        
        const locationCoordinates = data.results[0].position;
        return locationCoordinates;

    }catch(err){
        console.log(err);
        throw new Error('could not find a valid location using the given address.');
    }
};

