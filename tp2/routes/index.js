var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var Question = mongoose.model('Question');
var Examen = mongoose.model('Examen');
var CurrentUser = mongoose.model('CurrentUser');

/* GET home page. */
router.get('/', function(req, res, next) {
	CurrentUser.findOne({user_id: 1}, function(err, userItem) {
		if(err)
			res.next();
		if(!userItem)
		{
			new CurrentUser({
				user_id : 1,
				current_exam : -1,
				question_html : 0,
				question_css : 0,
				question_js : 0,
				bonnereponse_html : 0,
				bonnereponse_css : 0,
				bonnereponse_js : 0,
				examen_html : 0,
				examen_css : 0,
				examen_js : 0,
				totalpoint_html : 0,
				totalpoint_css : 0,
				totalpoint_js : 0
			}).save( function(err, todo, count){
				if(err)
					res.next();
			});
		}
	})
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
router.get('/examenTermine', function(req, res, next) {
    res.render('examenTermine', {title : 'examenTermine' });
});

router.get('/ajouterQuestion', function(req, res, next) {
    res.render('ajouterQuestion', {title : 'ajouterQuestion' });
});
router.post('/examen',function(req, res, next){
	console.log(req.body);
    new Examen({
        subject : req.body.domaine,
        note_finale : -1,
        bonne_repones : 0,
        progression : 0,
        progression_finale : parseInt(req.body.nombre)
    }).save( function(err, todo, count){
        if(err)
            res.next();
        res.render('examen', {title : 'examen', exam_id : todo.id, domaine : todo.subject });
    });
});

                
module.exports = router;
                
