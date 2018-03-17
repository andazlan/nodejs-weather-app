const request = require('request');

var geocodeAddress = (address) => {
    var encodedAddress = encodeURIComponent(address);
    return new Promise((resolve, reject) => {
        request({
            url : `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json : true
        }, (error, response, body) => {
            //console.log(JSON.stringify(body, undefined, 2));
            if (error){
                reject("Unable to connect to google servers");
            }
            else if (body.status === "ZERO_RESULTS"){
                reject("Unable to find that address");
            }
            else{
                resolve({
                    address: body.results[0].formatted_address,
                    latitude : body.results[0].geometry.location.lat,
                    longitude : body.results[0].geometry.location.lng
                });
            }
        });
    });
};

geocodeAddress('kuryo teknologi indonesia').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage)
});