const args = process.argv;
const request = require('request');

args.splice(0, 2);

console.log(args);
const fetcher = function(args) {

  request(args[0], (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
  });

}