const request = require('request');
const data = 'https://api.thecatapi.com/v1/breeds/search?q=';
let args = process.argv;
let result = args.slice(2);
let breed = result[0];


request(`${data}${breed}` , (error, response, body) => {
  if (error) {
    throw error;
  }

  if (!body) {
    console.log('BREED IS NOT FOUND!!!');
  }

  const data = JSON.parse(body);
  console.log(data[0].description);
  // console.log(typeof data);

    

});

