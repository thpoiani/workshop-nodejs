const fs = require('fs');

fs.writeFile('opensanca.txt', 'OPENSANCA', 'utf-8', (err) => {
  if (err) throw err;
});

fs.readFile('sample-data.csv', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
