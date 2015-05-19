var path = require('path');
var express = require('express');
var app = express();

app.use('/', express.static(path.join(__dirname, 'public')));

var server = app.listen(3000, function(){
  var host = server.address().host;
  var port = server.address().port;

  console.log('Server started: http://%s:%s', host, port);
})
