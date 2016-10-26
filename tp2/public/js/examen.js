'use strict';

window.onload = function(){
    $('#zonereponse').on('dragover',function (ev) {
        ev.preventDefault();
    });
    
    $('#zonereponse').on('drop',function (ev) {
        ev.preventDefault();	
        var data = ev.originalEvent.dataTransfer.getData("text");
        var idstring = ev.originalEvent.dataTransfer.getData("id");
        if(sessionStorage.getItem('reponse') == idstring)
            $('#'+idstring).addClass('borderBonneReponse');
        else   
            $('#'+idstring).addClass('borderMauvaiseReponse');
        ev.target.innerText = data;
        $(this).off( 'dragover' );
        $(this).off( 'drop' );
    });
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
        var nombre = sessionStorage.getItem('nombre');
        if (numerateur === parseInt(nombre) || isNaN(parseInt(nombre, 10))) {
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
    sessionStorage.setItem("reponse", "reponse" + data.reponse);
    
    $.each( data.choix, function( key, val ) {
        var numeroQuestion = parseInt(key) + 1;
        var reponse = '<div class="reponse" name="reponse" draggable="true" ondragstart="drag(event)" value="' + val.id + '" id="reponse' + val.id + 
        '" type="radio"><label for="reponse' + val.id + '">'+ numeroQuestion + ". " + val.text + '</label></div> </br>';
        items.push( reponse );
    });
    
    $('#choix').html(items);
})};

function drag(ev) {
    ev.dataTransfer.setData("id", ev.target.id);
    ev.dataTransfer.setData("text", ev.target.innerText);
}

