var express = require('express');
var router = express.Router();

router.use(express.static(__dirname + '/../assets'));

router.get('/', function(req, res) {
  res.sendFile('posts_angular.html', {
    root: __dirname + '/../../layouts'
  });
});

module.exports = router;
