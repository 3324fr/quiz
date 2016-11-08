
$(function(){
    
    
    getajax();
    $('#menuPrincipalBtn').on("click", function() {
        return true;
    });
    $('#qSuivanteBtn').on("click", function() {
        getajax();
        return false;
    });
    $('#monForm').on('submit', function(e) {          
        e.preventDefault();
        
        
        
        $.post( 'ajax/examen/',$(this).serialize())
        .done(function( data ) {
            var idstring = '#' +$('#reponse').val();
            var idstringdata = '#' +data;
            if(data == $('#reponse').val()) {
                
            }
            else   
                $(idstring).addClass('borderMauvaiseReponse');
            $(idstringdata).addClass('borderBonneReponse');
            $('#zonereponse').off( 'dragover' );
            $('#zonereponse').off( 'drop' );
            
        }).fail(function( data ) {
            alert("error");
        });
        
    });
    
});



function getajax() {
    var url = "ajax/examen"+$('#domaine').val();
    $.getJSON( url, function( data ) {
        
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
        $('#numquestion').val(data._id);
        $('#choix').html(items);
        $('#zonereponse').on('dragover',function (ev) {
            ev.preventDefault();
        });
        
        $('#zonereponse').on('drop',function (ev) {
            ev.preventDefault();
            ev.target.innerText = ev.originalEvent.dataTransfer.getData("text");
            $('#reponse').val(ev.originalEvent.dataTransfer.getData("id"));
            
        });
    });
}

function drag(ev) {
    ev.dataTransfer.setData("id", ev.target.id);
    ev.dataTransfer.setData("text", ev.target.innerText);
}
