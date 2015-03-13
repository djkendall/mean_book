/* jshint node: true */

'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(require('./controllers/api/posts'));
app.use(require('./controllers/static'));

app.listen(8888, function() {
  console.log('Server listening on port', 8888);
});
