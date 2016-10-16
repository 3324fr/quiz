 window.onload = function(){
     'use strict';
     getajax();
     $('#monForm').on('submit', function(e) {
        e.preventDefault(); 
        getajax();
       
    });
     
 } 
 
 function getajax() {$.getJSON( "ajax/", function( data ) {
         var question = "<b>Question " + data.id + " : </b> " + data.question;
         $('#question').html(question);
         
         var items = [];
         
         $.each( data.choix, function( key, val ) {
             var reponse = '<input name="reponse" value="' + val.id + '" id="reponse' + val.id + 
             '" type="radio"><label for="reponse' + val.id + '">'+ val.text + '</label>';
             items.push( reponse );
         });
         
         $('#choix').html(items);
     });
 }
