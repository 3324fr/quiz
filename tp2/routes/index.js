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
    res.render('accueil', { title : 'accueil',current : 'accueil' });
});
router.get('/tableauBord', function(req, res, next) {
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
		CurrentUser.findOneAndUpdate({user_id: 1}, {$set:{current_exam: todo._id}}, {upsert:false}, function(err, userItem) {
			if(err)
				res.send(err);
		});
        res.render('examen', {title : 'examen', exam_id : todo.id, domaine : todo.subject });
    });
});

router.post('/reprendreExamen',function(req, res, next){
	CurrentUser.findOne({user_id: 1}, function(err, userItem){
		Examen.findOne({_id: userItem.current_exam.toString()}, function(err, examItem){
			if(err)
				res.send("Examen introuvable");
			res.render('examen', {title : 'examen', exam_id : examItem._id, domaine : examItem.subject });
		});
	});
});

router.post('/reinitialiserStatistiques', function(req, res, next){
	CurrentUser.findOneAndUpdate({user_id: 1}, {$set:{question_html:0, question_css:0, question_js:0, bonnereponse_html:0, bonnereponse_css:0, 
		bonnereponse_js:0, examen_html:0, examen_css:0, examen_js:0, totalpoint_html:0, totalpoint_css:0, totalpoint_js:0}}, {upsert:false}, function(err, examItems){
		if(err)
			res.send(err);
		res.render('reinitialiserStatistiques', {result: "true"});
	});
});

router.post('/reinitialiserExamens', function(req, res, next){
	Examen.remove({}, function(err){
		if(err)
			res.send(err);
		CurrentUser.findOneAndUpdate({user_id: 1}, {$set:{current_exam: -1}}, {upsert:false}, function(err2, examItems){
			if(err2)
				res.send(err2);
			res.render('reinitialiserExamens', {result: "true"});
		});
	});
});

                
module.exports = router;
                
