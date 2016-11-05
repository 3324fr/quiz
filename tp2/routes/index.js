var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var Question = mongoose.model('Question');

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
router.post('/question', function(req, res, next) {
  res.render('question', {title : 'question'});
});
router.post('/examen', function(req, res, next) {
  res.render('examen', {title : 'examen' });
});
router.get('/examenTermine', function(req, res, next) {
  res.render('examenTermine', {title : 'examenTermine' });
});

router.get('/ajouterQuestion', function(req, res, next) {
  res.render('ajouterQuestion', {title : 'ajouterQuestion' });
});

router.post('/ajouterQuestion', function(req, res, next){
  new Question({
	  subject: req.body.sujet,
	  question_text: req.body.textquestion,
	  reponse : parseInt(req.body.reponse),
	  choix_un : req.body.choixun,
	  choix_deux : req.body.choixdeux,
	  choix_trois : req.body.choixtrois,
	  choix_quatre : req.body.choixquatre,
  }).save( function(err, todo, count){
		if(err)
			console.log(err); 
  });
  res.render('ajouterQuestion', {title : 'ajouterQuestion' });
});



module.exports = router;
