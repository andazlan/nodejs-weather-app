const request = require("request");

request({
    url : "http://maps.googleapis.com/maps/api/geocode/json?address=Jl.%20Rungkut%20Mejoyo%20Selatan%20X%20Blok%20AK%20No.13",
    json : true
}, (error, response, body) => {
    console.log(body);
    console.log(error);
});