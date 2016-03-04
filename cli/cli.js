// node cli.js --site http://opensanca.com.br

const program = require('commander');
const request = require('request');
const cheerio = require('cheerio');

program
    .version('0.0.1')
    .option('-s, --site [site]', 'Digite um site para coletar informação')
    .parse(process.argv);

if (!program.site) {
    process.exit();
}

request(program.site, (error, response, body) => {
    if (!error && response.statusCode == 200) {
       var $ = cheerio.load(body);
       console.log($("title").text());
    }
});
