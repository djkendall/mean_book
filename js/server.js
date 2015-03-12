/* jshint node: true */

'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var Post = require('./models/post');

var app = express();

app.use(bodyParser.json());

app.get('/api/posts', function(req, res, next) {
  var result = null;
  Post.find(function(err, posts) {
    if (err) {
      result = next(err);
    } else {
      result = res.json(posts);
    }
    return result;
  });
});

app.get('/', function(req, res) {
  res.sendFile('layouts/posts_angular.html', {root: __dirname + '/..'});
});

app.post('/api/posts', function(req, res, next) {
  var post = new Post({
    username: req.body.username,
    body: req.body.body
  });

  post.save(function(err, post) {
    var result = null;
    if (err) {
      result = next(err);
    } else {
      result = res.status(201).json(post);
    }
    return result;
  });
});

app.listen(8888, function() {
  console.log('Server listening on port', 8888);
});
