/*server.js*/

var express = require('express');
var hostname = 'webrtctest2.zapto.org';
var port = 80;

var app = express();

app.set('view engine', 'jade');

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/:name', function (req, res) {
  res.render('form', {name: req.params.name});
});

app.post('/', function (req, res) {
  res.render('form');
});

app.listen(port, hostname, function () {
  console.log('connected to ' + hostname + ':' + port);
});
