let request = require("request");

let getWeather = (location, callback) => {
  let url = `http://api.weatherapi.com/v1/current.json?key=c95b4a0a04e84aac87934029201212&q=${location}`;
  request({ url: url, json: true }, (error, response) => {
    callback(response.body.current.temp_c);
  });
};

module.exports = getWeather;