const request = require("request")

var getWeather = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/0fee34beee249f4ecc0b430ea6f7f3c0/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
        else {
            callback("unable to fetch weather");
        }
    });
}

module.exports.getWeather = getWeather;