var Post = require('../../models/post');
var router = require('express').Router();

router.get('/api/posts', function(req, res, next) {
  var result = null;
  Post.find()
  .sort('-date')
  .exec(function(err, posts) {
    if (err) {
      result = next(err);
    } else {
      result = res.json(posts);
    }
    return result;
  });
});

router.post('/api/posts', function(req, res, next) {
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

module.exports = router;
