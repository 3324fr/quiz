var express = require('express');
var router = express.Router();
var testrapide = require('./data/testrapide.js');
var html = require('./data/html.js');
var bbb = require('./data/bbb.js');
var css = require('./data/css.js');
var mongoose = require( 'mongoose' );
var Question = mongoose.model('Question');

router.get('/random', function(req, res, next) {
    Question.findOneRandom(function(err, todo) {
        if (err)
            res.send(err);
        res.json(todo);
    });
});
router.route('/examen').get( function(req, res, next) {
    var filter = { subject: req.query['subject']};
    Question.findRandom(filter, {}, {limit: 1}, function(err, results) {
        if (err)
            res.send(err);
        res.json(results);
    });
}).post( function(req, res, next) {
    Question.findById(req.body.question, function(err, bear) {
            if (err)
                res.send(err);
            res.json(bear.reponse);
        });
});

router.get('/counthtml', function(req, res, next) {
    Question.count({
        subject: 'html'
    }, function (err, result) {
        if (err) {
            next(err);
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
            next(err);
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
            next(err);
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
    
    if(subject.length < 10 || subject.question_text < 2 || subject.reponse < 2 || subject.reponse < 2 || subject.choix_un < 2 || subject.choix_deux < 2 || subject.choix_trois < 2 || subject.choix_quatre < 2)
    {
        res.status(400).json("invalide")
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


module.exports = router;
