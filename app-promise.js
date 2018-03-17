const yargs = require("yargs");
const axios = require("axios");

const geocode = require("./geocode/geocode");
const weather = require("./weather/weather");

const argv = yargs.options({
    a: {
        demand : true,
        alias : "address",
        describe : "address to fecth weather for",
        string : true
    } 
}).help().alias("help", 'h').argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

//Dengan promise semua akan terlihat rapih karena code barada dalam 1 level dibandingkan dengan 
//callback
//Dengan begitu, kode lebih mudah dibaca dan di maintain
axios.get(geocodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address');
    }

    var latitude = response.data.results[0].geometry.location.lat;
    var longitude = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/0fee34beee249f4ecc0b430ea6f7f3c0/${latitude},${longitude}`;

    console.log(response.data.results[0].formatted_address);

    return axios.get(weatherUrl);
}).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}`);
}).catch((e) => {
    if (e.code === 'ENOTFOUND') {
        console.log('unable to connect to api server');
    }
    else {
        console.log(e.message);
    }
});