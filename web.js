var express = require('express');
fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
var t = 'test';
console.log("got request");

var buffer = new Buffer(16);
var rs = fs.readFile('index.html', function(err, data) {
console.log(data.toString());
	buffer.write(data.toString());
});
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
