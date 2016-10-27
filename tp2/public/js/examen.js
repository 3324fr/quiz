'use strict';

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

function getajax(route) {$.getJSON( "ajax/"+route, function( data ) {
    var bonneReponse = localStorage.getItem('bonneReponse');   
    $('#note').text("Note courante (Nombre de questions réussies / Nombre de questions répondues) :" +
    bonneReponse + "/" + localStorage.getItem('numerateur')); 
    var question = "<b>Domaine </b>" + data.domaine + "</br><b>Question " + data.id + " : </b> " + data.question;
    $('#question').html(question);
    
    var items = [];
    localStorage.setItem("reponse", "reponse" + data.reponse);
    
    $.each( data.choix, function( key, val ) {
        var numeroQuestion = parseInt(key) + 1;
        var reponse = '<div class="reponse" name="reponse" draggable="true" ondragstart="drag(event)" value="' + val.id + '" id="reponse' + val.id + 
        '" type="radio"><label for="reponse' + val.id + '">'+ numeroQuestion + ". " + val.text + '</label></div> </br>';
        items.push( reponse );
    });
    
    $('#choix').html(items);
    $('#zonereponse').on('dragover',function (ev) {
        ev.preventDefault();
    });
    
    $('#zonereponse').on('drop',function (ev) {
        ev.preventDefault();	
        var data = ev.originalEvent.dataTransfer.getData("text");
        var idstring = ev.originalEvent.dataTransfer.getData("id");
        if(localStorage.getItem('reponse') == idstring) {
            $('#'+idstring).addClass('borderBonneReponse');
            localStorage.setItem("bonneReponse", parseInt(bonneReponse)+1);
        }
        else   
            $('#'+idstring).addClass('borderMauvaiseReponse');
        ev.target.innerText = data;
        $(this).off( 'dragover' );
        $(this).off( 'drop' );
    });
})};

function drag(ev) {
    ev.dataTransfer.setData("id", ev.target.id);
    ev.dataTransfer.setData("text", ev.target.innerText);
}

