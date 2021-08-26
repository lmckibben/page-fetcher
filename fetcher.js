const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);
console.log('args:', args);
const httpAddress = args[0];
const file = args[1]
console.log('args[1]:', args[1]);
console.log('file', file);
//console.log('args', args);

const webInfo = request(httpAddress, (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  const bodyInfo = ('body:', body);
  fs.writeFile(`./${file}`, bodyInfo, err => {
    if (err) {
      console.log(err);
    }
  });
});
