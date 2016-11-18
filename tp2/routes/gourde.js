var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var Gourde = mongoose.model('Gourde');
var CurrentUser = mongoose.model('CurrentUser');
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
        
        if(bear.reponse == reponse) {
            new Gourde({
                user_id: 1,
                point: 1,
            }).save( function(err2, todo2, count2){
                if(err2)
                    res.json(err2);
            });
			console.log(req.body);
			if(req.body.domaine == "html")
			{
				CurrentUser.findOneAndUpdate({user_id: 1}, {$inc:{question_html:1, bonnereponse_html:1}}, {upsert:false}, function(err4,result3){
					if(err4)
						res.send(err4);
				});
			}
			else if(req.body.domaine == "css")
			{
				CurrentUser.findOneAndUpdate({user_id: 1}, {$inc:{question_css:1, bonnereponse_css:1}}, {upsert:false}, function(err4,result3){
					if(err4)
						res.send(err4);
				});
			}
			else if(req.body.domaine == "js")
			{
				CurrentUser.findOneAndUpdate({user_id: 1}, {$inc:{question_js:1, bonnereponse_js:1}}, {upsert:false}, function(err4,result3){
					if(err4)
						res.send(err4);
				});
			}
        }
        else {
            new Gourde({
				user_id: 1,
                point: 0,
            }).save( function(err3, todo3, count3){
				if(err3)
                    res.json(err3);
            });
			if(req.body.domaine == "html")
			{
				CurrentUser.findOneAndUpdate({user_id: 1}, {$inc:{question_html:1}}, {upsert:false}, function(err4,result3){
				if(err4)
					res.send(err4);
				});
			}
			else if(req.body.domaine == "css")
			{
				CurrentUser.findOneAndUpdate({user_id: 1}, {$inc:{question_css:1}}, {upsert:false}, function(err4,result3){
					if(err4)
					res.send(err4);
				});
			}
			else if(req.body.domaine == "js")
			{
				CurrentUser.findOneAndUpdate({user_id: 1}, {$inc:{question_js:1}}, {upsert:false}, function(err4,result3){
					if(err4)
						res.send(err4);
				});
			}	
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
