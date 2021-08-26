const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);
const httpAddress = args[0];
const file = args[1]
//console.log('args', args);

const webInfo = request(httpAddress, (error, response, body) => {
  console.log('error:', error);
  const bodyInfo = ('body:', body);
  fs.writeFile(`./${file}`, bodyInfo, err => {
  });
});

const stats = fs.statSync('./index.html');
console.log(`Downloaded and saved ${stats.size} bytes to ${file}`);
