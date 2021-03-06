var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'style.css'));
});

app.get('/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
