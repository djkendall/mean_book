/* jshint node: true */

'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/rpp02', function() {
  console.log('mongodb connected');
});

module.exports = mongoose;
