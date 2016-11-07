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
router.get('/question', function(req, res, next) {
    res.render('question', {title : 'question'});
});
router.get('/examen', function(req, res, next) {
    res.render('examen', {title : 'examen' });
});
router.get('/examenTermine', function(req, res, next) {
    res.render('examenTermine', {title : 'examenTermine' });
});

router.get('/ajouterQuestion', function(req, res, next) {
    res.render('ajouterQuestion', {title : 'ajouterQuestion' });
});

module.exports = router;
