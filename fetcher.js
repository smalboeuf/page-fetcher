const args = process.argv;
const request = require('request');
const fs = require('fs');

args.splice(0, 2);


const fetcher = function(args) {

  const URL = args[0];
  const PATH = args[1];
  

  request(URL, (error, response, body) => {
    
    fs.writeFile(PATH, body, (err) => {
      if (err) {
        console.log(err);
      } else {
        
        fs.stat(PATH, (err, stats) => {
          
          if (err) {
            console.log(err);
          } else {
           
            console.log(`Downloaded and saved ${stats.size} bytes to ${PATH}`);

          }
        });
      }
    });

    
  });

  return "";
};




console.log(fetcher(args));