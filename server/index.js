var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
const sourceName = path.resolve(__dirname + '/../client/dist/index.html');

app.use(bodyParser.json());


app.get('*/bundle.js', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/dist/bundle.js'));
});

app.get('/', (req, res) => {
  res.sendFile(sourceName);
});

app.listen(3000, function() {
  console.log('listening on port', 3000, '...');
});