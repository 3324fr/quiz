'use strict';
var numQuestion = 0;
window.onload = function(){
    
    $('#menuPrincipalBtn').on("click", function() {
        localStorage.setItem("bonneReponse",0);
        return true;
    });
    localStorage.setItem("bonneReponse",0);
    localStorage.setItem("numerateur",0);
    var domaine = localStorage.getItem('domaine');
    getajax(domaine);
    $('#domaine').text(domaine);
    $('#monForm').on('submit', function(e) {          
        e.preventDefault(); 
        $('#zonereponse').text("Glisser la lettre de la réponse ici");
        getajax(localStorage.getItem('domaine'));
        var numerateur = parseInt(localStorage.getItem('numerateur'));
        var nombre = localStorage.getItem('nombre');
        if ((numerateur+2) == parseInt(nombre) || isNaN(parseInt(nombre, 10))) {
            $('#button').html('<a class="button" href="examenTermine">Examen Terminé</a>');
            $('#qSuivanteBtn').remove();
            $('#menuPrincipalBtn').remove();
        }
        localStorage.setItem("numerateur",  numerateur + 1);
        
    });
} 

function getajax(route) {$.getJSON( "ajax/examen?subject="+route, function( data ) {
    
    data = data[0];
    $('#note').text("Note courante (Nombre de questions réussies / Nombre de questions répondues) :" +
    55 + "/" + 100); 
    var question = "<b>Domaine </b>" + data.subject + "</br><b>Question " + data._id + " : </b> " + data.question_text;
    $('#question').html(question);
    
    var items = [];
    var choix = {1: data.choix_un, 2 : data.choix_deux, 3 : data.choix_trois, 4 : data.choix_quatre}; 
    
    $.each( choix, function( key, val ) {
        var numeroQuestion = parseInt(key);
        var reponse = '<div class="reponse" name="reponse" draggable="true" ondragstart="drag(event)" value="' + key + '" id="' + key + 
        '" type="radio"><label for="reponse' + key + '">'+ numeroQuestion + ". " + val + '</label></div> </br>';
        items.push( reponse );
    });
    
    $('#choix').html(items);
    numQuestion = data._id;
    $('#zonereponse').on('dragover',function (ev) {
        ev.preventDefault();
    });
    
    $('#zonereponse').on('drop',function (ev) {
        ev.preventDefault();
        var idstring = ev.originalEvent.dataTransfer.getData("id");
        var posting = $.post( 'ajax/examen/', { id : idstring, question : numQuestion }  );
        posting.always(function( data ) {
            var idstring = ev.originalEvent.dataTransfer.getData("id");
            if(data == idstring) {
                $('#'+idstring).addClass('borderBonneReponse');
                
            }
            else   
                $('#'+idstring).addClass('borderMauvaiseReponse');
            
        });
        ev.target.innerText = ev.originalEvent.dataTransfer.getData("text");
        $(this).off( 'dragover' );
        $(this).off( 'drop' );
    });
})};

function drag(ev) {
    ev.dataTransfer.setData("id", ev.target.id);
    ev.dataTransfer.setData("text", ev.target.innerText);
}

