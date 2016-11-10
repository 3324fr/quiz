var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var Gourde = mongoose.model('Gourde');
var Question = mongoose.model('Question');

router.post('/', function(req, res, next) {
    reponse = parseInt(req.body.reponse);
    if( reponse > 4 || reponse < 1)
    {
        res.status(400).json("invalide");
        return;
    }
    var total = 0;
    var bonnereponse = 0;
    Gourde.count({
        point: 1
    }, function (err, result) {
        if (err) {
            res.send(err);
        } 
        bonnereponse = parseInt(result);
    }); 
    Gourde.count({
    }, function (err, result) {
        if (err) {
            res.send(err);
        } 
        total = parseInt(result);
    }); 
    
    
    Question.findOne({_id: req.body.question}, function(err, bear) {
        if (err)
            res.send(err);
        
        if(bear.reponse != reponse) {
            new Gourde({
                user_id: 1,
                point: 1,
            }).save( function(err2, todo2, count2){
                if(err2)
                    res.json(err2);
            });
        }
            else {
                new Gourde({
                    user_id: 1,
                    point: 0,
                }).save( function(err3, todo3, count3){
                    if(err3)
                        res.json(err3);
                });
            }
            
            
            
            res.json(bear.reponse);
        });
    });

router.get('/', function(req, res, next) {
    var total = 0;
    var bonnereponse = 0;
    Gourde.count({
        point: 1
    }, function (err, result) {
        if (err) {
            res.send(err);
        } 
        bonnereponse = parseInt(result);
    }); 
    Gourde.count({
    }, function (err, result) {
        if (err) {
            res.send(err);
        } 
        total = parseInt(result);
    }); 
    Question.findOneRandom(function(err, todo) {
        if (err)
            res.send(err);
        res.json({'question' : todo, 'total' : total,'bonnereponse' :bonnereponse });
    });
});





module.exports = router;
