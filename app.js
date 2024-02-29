/*
 * Main App file App.js
 * @author Asep Maulana Ismail
 */


// Dependencies requirements, Express 4
var express        = require('express');
var app            = express();

app.use(express.static(__dirname + '/public'));

app.listen(8080);
console.log('Im listening on port 8080');

// First example router
app.get('/', function(req, res) {
  res.send("Hello world!");
});