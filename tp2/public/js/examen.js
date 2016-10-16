 window.onload = function(){
     'use strict';
     domaine = localStorage.getItem('domaine');
     getajax(domaine);
     $('#domaine').text(domaine);
     localStorage.setItem("numerateur", 1);
     $('#monForm').on('submit', function(e) {          
         e.preventDefault(); 
         var numerateur =  parseInt(localStorage.getItem('numerateur'));
         localStorage.setItem("numerateur", numerateur + 1);
         getajax(localStorage.getItem('domaine'));
         if (numerateur == localStorage.getItem('nombre')) {
             $('#button').html('<a class="button" href="examenTermine">Exament Terminer</a>');
         } 
     });
     
 } 
 
 function getajax(route) {$.getJSON( "ajax/"+route, function( data ) {
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
 
