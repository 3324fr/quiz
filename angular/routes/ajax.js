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
		todo.reponse = -1;
        res.json(todo);
    });
});

router.get('/getExams', function (req, res, next) {
    Examen.find({}, function (err, exams) {
        if (err) {
            console.log(err);
        } else {
            res.json(exams);
        }
    })
});

router.get('/getStats', function (req, res, next) {
    CurrentUser.find({}, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.json(user);
        }
    })
});

router.post('/validateExam', function (req, res, next) {
    Question.findById(req.body.id, function (err, ques) {
        if (err)
            res.send(err);
        CurrentUser.findOne({ user_id: 1 }, function (err, user) {
            if (ques.subject == "html")
                user.examen_html = user.examen_html + 1;
            else if (ques.subject == "js")
                user.examen_js = user.examen_js + 1;
            else if (ques.subject == "css")
                user.examen_css = user.examen_css + 1;
            if (req.body.answer == ques.reponse) {
                if (ques.subject == "html")
                    user.totalpoint_html = user.totalpoint_html + 1;
                else if (ques.subject == "js")
                    user.totalpoint_js = user.totalpoint_js + 1;
                else if (ques.subject == "css")
                    user.totalpoint_css = user.bonnereponse_css + 1;
            }
            user.save(function (err) {
                if (err)
                    console.log(err);
            });
        });
        res.json(ques.reponse);
    });
});

router.post('/resetStats', function (req, res, next) {
    CurrentUser.findOne({ user_id: 1 }, function (err, user) {
        if (err)
            console.log(err);
        if (user) {
            user.question_html = 0;
            user.question_css = 0;
            user.question_js = 0;
            user.bonnereponse_html = 0;
            user.bonnereponse_css = 0;
            user.bonnereponse_js = 0;
            user.examen_html = 0;
            user.examen_css = 0;
            user.examen_js = 0;
            user.totalpoint_html = 0;
            user.totalpoint_css = 0;
            user.totalpoint_js = 0;
        }
        user.save(function (err) {
            if (err)
                console.log(err);
        });
    });
});

router.post('/resetExams', function (req, res, next) {
    Examen.remove({}, function (err, removed) {
    });
});

router.post('/validateQuestion', function (req, res, next) {
    Question.findById(req.body.id, function (err, ques) {
        if (err)
            res.send(err);
        CurrentUser.findOne({user_id: 1}, function (err, user) {
            if (ques.subject == "html")
                user.question_html = user.question_html + 1;
            else if (ques.subject == "js")
                user.question_js = user.question_js + 1;
            else if (ques.subject == "css")
                user.question_css = user.question_css + 1;
            if (req.body.answer == ques.reponse) {
                if (ques.subject == "html")
                    user.bonnereponse_html = user.bonnereponse_html + 1;
                else if (ques.subject == "js")
                    user.bonnereponse_js = user.bonnereponse_js + 1;
                else if (ques.subject == "css")
                    user.bonnereponse_css = user.bonnereponse_css + 1;
            }
            user.save(function (err) {
                if (err)
                    console.log(err);
            });
        });
        res.json(ques.reponse);
    });
});



router.get('/examenhtml', function(req, res) {
    var filter = { subject: 'html'};
    Question.findRandom(filter, {}, { limit: 1 }, function (err, results) {
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
            if (err)
                res.send(err);
            if(bear.reponse != parseInt(req.body.reponse))
            {
				Examen.findOneAndUpdate({_id: parseInt(req.body.exam)}, {$inc:{progression:1}}, {upsert:false}, function(err2, result2){
					if (err2) 
						res.send(err2);
				});
			}
			else
            {
				Examen.findOneAndUpdate({_id: parseInt(req.body.exam)}, {$inc:{progression:1, bonne_repones : 1}}, {upsert:false}, function(err3, result3){
					if (err3) 
						res.send(err3);
				});
			}
			var progres = Examen.findOne( {_id: parseInt(req.body.exam)}, function(err, exam){
				if(err)
					res.send(err);
				else
				{
					res.json({"reponse": bear.reponse, "restant": exam.progression_finale-exam.progression});
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

router.post('/createExam', function (req, res) {
    new Examen({
        subject: req.body.sujet,
        note_finale: 0,
        bonne_repones: 0,
        progression: 0,
        progression_finale: req.body.nbQuestions
    }).save(function (err, todo, count) {

        if (err)
            res.json("err");
        res.json(todo._id);
    });
});


router.post('/ajouterQuestion', function (req, res) {
    var subject = req.body.sujet;
    var question_text = req.body.textquestion;
    var reponse = parseInt(req.body.reponse);
    var choix_un = req.body.choixun;
    var choix_deux = req.body.choixdeux;
    var choix_trois = req.body.choixtrois;
    var choix_quatre = req.body.choixquatre;
    console.log(req.body);
    if (!(subject == 'html' || subject == 'css' || subject == 'js') || question_text.length < 10 || reponse < 1 || reponse > 4 || choix_un.length < 2 || choix_deux.length < 2 || choix_trois.length < 2 || choix_quatre.length < 2) {
        res.status(400).json("invalide");
        return;
    }
    new Question({
        subject: req.body.sujet,
        question_text: req.body.textquestion,
        reponse: parseInt(req.body.reponse),
        choix_un: req.body.choixun,
        choix_deux: req.body.choixdeux,
        choix_trois: req.body.choixtrois,
        choix_quatre: req.body.choixquatre,
    }).save(function (err, todo, count) {

        if (err)
            res.json("err");
        res.json("La soumission de la nouvelle question a réussi.");
    });
});




module.exports = router;
