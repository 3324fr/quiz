var express = require('express');
var router = express.Router();
var testrapide = require('./data/testrapide.js');
var html = require('./data/html.js');
var bbb = require('./data/bbb.js');
var css = require('./data/css.js');

router.get('/', function(req, res, next) {
  res.json(testrapide.Testrapide[Math.floor((Math.random() * 49))])
});
router.get('/html', function(req, res, next) {
  res.json(html.Html[Math.floor((Math.random() * 49))])
});
router.get('/js', function(req, res, next) {
  res.json(bbb.Bbb[Math.floor((Math.random() * 49))])
});
router.get('/css', function(req, res, next) {
  res.json(css.Css[Math.floor((Math.random() * 49))])
});



module.exports = router;
