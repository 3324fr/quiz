var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var Question = mongoose.model('Question');
var Examen = mongoose.model('Examen');
var CurrentUser = mongoose.model('CurrentUser');


router.get('/random', function(req, res, next) {
    Question.findOneRandom(function(err, todo) {
        if (err)
            res.send(err);
        res.json(todo);
    });
});
router.get('/examenhtml', function(req, res) {
    var filter = { subject: 'html'};
    Question.findRandom(filter, {}, {limit: 1}, function(err, results) {
        if (err)
            res.send(err);
        res.json(results);
    });
});
router.get('/examencss', function(req, res) {
    var filter = { subject: 'css'};
    Question.findRandom(filter, {}, {limit: 1}, function(err, results) {
        if (err)
            res.send(err);
        res.json(results);
    });
});
router.get('/examenjs', function(req, res) {
    var filter = { subject: 'js'};
    Question.findRandom(filter, {}, {limit: 1}, function(err, results) {
        if (err)
            res.send(err);
        res.json(results);
    });
});
router.post('/examen', function(req, res) {
    
    Question.findOne({_id: req.body.question}, function(err, bear) {
			console.log(req.body);
            if (err)
                res.send(err);
            if(bear.reponse != parseInt(req.body.reponse))
			{
				Examen.findOneAndUpdate({_id: parseInt(req.body.exam)}, {$inc:{progression:1}}, {upsert:false}, function(err2, result2){
					if (err2) 
						res.send(err2);
				});
				if(req.body.domaine == "html")
				{
					CurrentUser.findOneAndUpdate({user_id: 1}, {$inc:{examen_html:1}}, {upsert:false}, function(err4,result3){
						if(err4)
							res.send(err4);
					});
				}
				else if(req.body.domaine == "css")
				{
					CurrentUser.findOneAndUpdate({user_id: 1}, {$inc:{examen_css:1}}, {upsert:false}, function(err4,result3){
						if(err4)
							res.send(err4);
					});
				}
				else if(req.body.domaine == "js")
				{
					CurrentUser.findOneAndUpdate({user_id: 1}, {$inc:{examen_js:1}}, {upsert:false}, function(err4,result3){
						if(err4)
							res.send(err4);
					});
				}
			}
			else
			{
				Examen.findOneAndUpdate({_id: parseInt(req.body.exam)}, {$inc:{progression:1, bonne_repones : 1}}, {upsert:false}, function(err3, result3){
					if (err3) 
						res.send(err3);
				});
				if(req.body.domaine == "html")
				{
					CurrentUser.findOneAndUpdate({user_id: 1}, {$inc:{examen_html:1, totalpoint_html:1}}, {upsert:false}, function(err4,result3){
						if(err4)
							res.send(err4);
					});
				}
				else if(req.body.domaine == "css")
				{
					CurrentUser.findOneAndUpdate({user_id: 1}, {$inc:{examen_css:1, totalpoint_css:1}}, {upsert:false}, function(err4,result3){
						if(err4)
							res.send(err4);
					});
				}
				else if(req.body.domaine == "js")
				{
					CurrentUser.findOneAndUpdate({user_id: 1}, {$inc:{examen_js:1, totalpoint_js:1}}, {upsert:false}, function(err4,result3){
						if(err4)
							res.send(err4);
					});
				}
			}
			
			Examen.findOne( {_id: parseInt(req.body.exam)}, function(err, exam){
				if(err)
					res.send(err);
				else
				{
					res.json({"reponse": bear.reponse, "restant": exam.progression_finale-exam.progression-1});
				}
			});
	});
});

     

router.get('/counthtml', function(req, res, next) {
    Question.count({
        subject: 'html'
    }, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }
    }); 
});
router.get('/countcss', function(req, res, next) {
    Question.count({
        subject: 'css'
    }, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }
    }); 
});
router.get('/countjs', function(req, res, next) {
    Question.count({
        subject: 'js'
    }, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }
    }); 
});
router.route('/ajouterQuestion')
.post(function(req, res){
    var subject = req.body.sujet;
    var question_text = req.body.textquestion;
    var reponse = parseInt(req.body.reponse);
    var choix_un = req.body.choixun;
    var choix_deux = req.body.choixdeux;
    var choix_trois = req.body.choixtrois;
    var choix_quatre = req.body.choixquatre;
    
    if(!( subject == 'html' ||  subject == 'css'  ||  subject == 'js') || question_text.length < 10 || reponse < 1 || reponse > 4 || choix_un.length < 2 || choix_deux.length < 2 || choix_trois.length < 2 || choix_quatre.length < 2)
    {
        res.status(400).json("invalide");
        return;
    }
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
            res.json("err");
        res.json("La soumission de la nouvelle question a réussi.");
    });
    
    
});

router.get('/examEnCours', function(req, res, next){
	CurrentUser.findOne({user_id: 1}, function(err, userItem){
		if(err)
			res.json("err");
		if(userItem.current_exam != -1)
			res.json("true");
		else
			res.json("false");
	});
});

router.get('/noteExamTermine', function(req, res, next){
	CurrentUser.findOne({user_id: 1}, function(err, userItem){
		if(err)
			res.json("err");
		if(userItem.current_exam != -1)
			Examen.findOne({_id: userItem.current_exam.toString()}, function(err2, examItem){
				if(err2)
					res.json(err2);
				res.json(examItem);
			});
		else
			res.json("false");
	});
});

router.get('/utilisateur', function(req, res, next){
	CurrentUser.findOne({user_id: 1}, function(err, userItem){
		if(err)
			res.json("err");
		res.json(userItem);
	});
});

router.get('/tousLesExams', function(req, res, next){
	Examen.find({}, function(err, examItems){
		if(err)
			res.json("err");
		res.json(examItems);
	});
});



module.exports = router;
