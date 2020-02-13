const request = require('request');
const data = 'https://api.thecatapi.com/v1/breeds/search?q=';
// let args = process.argv;
// let result = args.slice(2);
// let breed = result[0];

const fetchBreedDescription = (breedName, callback) => {
  request(`${data}${breedName}` , (error, response, body) => {
    const data = JSON.parse(body);
    
    if (data.length === 0) {
        callback(error, null);
    } else {
        callback(null, data[0].description.trim());
    }
  });
};

module.exports = { fetchBreedDescription };