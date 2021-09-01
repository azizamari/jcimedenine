var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./template.html', 'utf8');
var options = { format: 'A5' };

pdf.create(html, options).toFile('./ex.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }
});