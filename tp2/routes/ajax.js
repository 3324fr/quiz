var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var Question = mongoose.model('Question');
var Examen = mongoose.model('Examen');

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
            if (err)
                res.send(err);
            if(bear.reponse == req.body.id)
            Examen.findOneAndUpdate({_id: req.body.exam_id}, {$inc:{progression:1}}, {upsert:false}, function(err2, result2){
                if (err2) 
                    res.send(err2);
                
            });
        else
            Examen.findOneAndUpdate({_id: req.body.exam_id}, {$inc:{progression:1, bonne_repones : 1}}, {upsert:false}, function(err3, result3){
                if (err3) 
                    res.send(err3);
                
            });
            res.json(bear.reponse);
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




module.exports = router;
