var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World with express');
})

app.get('/get', function (req, res) {
   res.send('Hello World get...');
})

app.get('/create', function (req, res) {
   res.send('Hello World create...');
})

app.get('/delete', function (req, res) {
   res.send('Hello World delete...');
})

var server = app.listen(8080, function () {
   console.log("Hello world running...")
})
