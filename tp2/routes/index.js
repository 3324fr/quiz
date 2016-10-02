var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('accueil', { title : 'accueil', current : 'accueil' });
});
router.get('/accueil', function(req, res, next) {
  res.render('accueil', { title : 'accueil',current : 'accueil' });
});
router.get('/tableauBord', function(req, res, next) {
  res.render('tableauBord', { title : 'tableauBord',current : 'tableauBord' });
});
router.get('/instruction', function(req, res, next) {
  res.render('instruction', {title : 'instruction', current : 'instruction' });
});
router.post('/question1', function(req, res, next) {
  res.render('question1', {title : 'question1', current : 'instruction'});
});
router.post('/question2', function(req, res, next) {
  res.render('question2', {title : 'question2' });
});
router.post('/question1Examen', function(req, res, next) {
  res.render('question1Examen',  {title : 'question1Examen' });
});
router.post('/question2Examen', function(req, res, next) {
  res.render('question2Examen',  {title : 'question2Examen' });
});
router.get('/examenTermine', function(req, res, next) {
  res.render('examenTermine', {title : 'examenTermine' });
});


module.exports = router;
