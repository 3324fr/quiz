'use strict';

window.onload = function(){
    getajax();
    $('#monForm').on('submit', function(e) {          
        e.preventDefault(); 
        $('#zonereponse').text("Glisser la lettre de la réponse ici");
        getajax(localStorage.getItem('domaine'));
        var numerateurRapide = parseInt(localStorage.getItem('numerateurRapide'));
        var nombre = localStorage.getItem('nombre');
        localStorage.setItem("numerateurRapide",  numerateurRapide + 1);
        
    });
} 

function getajax() {$.getJSON( "ajax/", function( data ) {
    var bonneReponseRapide = localStorage.getItem('bonneReponseRapide');   
    $('#note').text("Note courante (Nombre de questions réussies / Nombre de questions répondues) :" +
    bonneReponseRapide + "/" + localStorage.getItem('numerateurRapide')); 
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
            localStorage.setItem("bonneReponseRapide", parseInt(bonneReponseRapide)+1);
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

