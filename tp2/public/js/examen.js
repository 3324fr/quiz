'use strict';
	  
 window.onload = function(){
     var domaine = localStorage.getItem('domaine');
     getajax(domaine);
     $('#domaine').text(domaine);
     localStorage.setItem("numerateur", 1);
     $('#monForm').on('submit', function(e) {          
         e.preventDefault(); 
         var numerateur =  parseInt(localStorage.getItem('numerateur'));
		 $('#zonereponse').text("Glisser la lettre de la réponse ici");
         localStorage.setItem("numerateur", numerateur + 1);
         getajax(localStorage.getItem('domaine'));
         if (numerateur == sessionStorage.getItem('nombre')) {
             $('#button').html('<a class="button" href="examenTermine">Examen Terminé</a>');
			 $('#qSuivanteBtn').remove();
			 $('#menuPrincipalBtn').remove();
         } 
     });
 } 
 
 function getajax(route) {$.getJSON( "ajax/"+route, function( data ) {
     var question = "<b>Domaine </b>" + data.domaine + "</br><b>Question " + data.id + " : </b> " + data.question;
     $('#question').html(question);
     
     var items = [];
     var dragSrcEl = null;
	 
     $.each( data.choix, function( key, val ) {
		 var numeroQuestion = parseInt(key) + 1;
         var reponse = '<div class="reponse" name="reponse" draggable="true" ondragstart="drag(event)" value="' + val.id + '" id="reponse' + val.id + 
         '" type="radio"><label for="reponse' + val.id + '">'+ numeroQuestion + ". " + val.text + '</label></div> </br>';
         items.push( reponse );
     });
     
     $('#choix').html(items);
})};

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("id", ev.target.id);
	ev.dataTransfer.setData("text", ev.target.innerText);
}

function drop(ev) {
	if($('#choix').find('.borderReponse').length != 0)
		return;
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
	var idstring = "#" + ev.dataTransfer.getData("id");
	$(idstring).addClass('borderReponse');
    ev.target.innerText = data;
}