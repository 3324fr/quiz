'use strict';

window.onload = function(){
    getajax();
    $('#monForm').on('submit', function(e) {          
        e.preventDefault(); 
        $('#zonereponse').text("Glisser la lettre de la réponse ici");
        getajax();
        var numerateurRapide = parseInt(localStorage.getItem('numerateurRapide'));
        var nombre = localStorage.getItem('nombre');
        localStorage.setItem("numerateurRapide",  numerateurRapide + 1);
        
    });
} 

function getajax() {$.getJSON( "/ajax/random", function( data ) {
    
    var bonneReponseRapide = localStorage.getItem('bonneReponseRapide'); 
    
       
    $('#note').text("Note courante (Nombre de questions réussies / Nombre de questions répondues) :" +
    bonneReponseRapide + "/" + localStorage.getItem('numerateurRapide')); 
    var question = "<b>Domaine </b>" + data.subject + "</br><b>Question " + data._id + " : </b> " + data.question_text;
    $('#question').html(question);
    var items = [];
    localStorage.setItem("reponse", "reponse" + data.reponse);
    var choix = {1: data.choix_un, 2 : data.choix_deux, 3 : data.choix_trois, 4 : data.choix_quatre}; 
    $.each( choix, function( key, val ) {
        var numeroQuestion = parseInt(key);
        var reponse = '<div class="reponse" name="reponse" draggable="true" ondragstart="drag(event)" value="' + key + '" id="reponse' + key + 
        '" type="radio"><label for="reponse' + key + '">'+ numeroQuestion + ". " + val + '</label></div> </br>';
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
        var idstringdata = '#' +localStorage.getItem('reponse');
        if(localStorage.getItem('reponse') == idstring) {
            localStorage.setItem("bonneReponseRapide", parseInt(bonneReponseRapide)+1);
        }
        else   
            $('#'+idstring).addClass('borderMauvaiseReponse'); 
        $(idstringdata).addClass('borderBonneReponse');
        ev.target.innerText = data;
        $(this).off( 'dragover' );
        $(this).off( 'drop' );
    });
})};

function drag(ev) {
    ev.dataTransfer.setData("id", ev.target.id);
    ev.dataTransfer.setData("text", ev.target.innerText);
}

