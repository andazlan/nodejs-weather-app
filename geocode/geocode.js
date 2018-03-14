const request = require("request");

var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);

    console.log(encodedAddress);

    request({
        url : `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json : true
    }, (error, response, body) => {
        //console.log(JSON.stringify(body, undefined, 2));
        if (error){
            callback("Unable to connect to google servers");
        }
        else if (body.status === "ZERO_RESULTS"){
            callback("Unable to find that address");
        }
        else{
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude : body.results[0].geometry.location.lat,
                longitude : body.results[0].geometry.location.lng
            });
        }
    });
}

module.exports.geocodeAddress = geocodeAddress;