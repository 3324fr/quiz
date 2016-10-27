 window.onload = function(){
     nombre = $('#nombre');
     nombre.change(function() {
         localStorage.setItem("nombre", nombre.val());
     });
     storage = localStorage.getItem('nombre');
     if( !isNaN(parseInt(storage, 10))) {
         nombre.val(storage);
     }
     
     $('select[name = domaine]').change(function() {
         localStorage.setItem("domaine", $('#domaine :selected').val());
         
     });
     
     $('#noteRapide').text(localStorage.getItem("bonneReponseRapide")+ "/"+   localStorage.getItem("numerateurRapide"));
     
     var noExamen = parseInt(localStorage.getItem('noExamen'));
     var items = [];
     var moyenneA = 0;
     var moyenneB = 0;
     for (i = 1; i < noExamen; i++) {
         var examenReponse = parseInt(localStorage.getItem('examenReponse' + i));
         var examenNombre = parseInt(localStorage.getItem('examenNombre' + i));
         moyenneA = moyenneA + examenReponse;
         moyenneB = moyenneB + examenNombre;
         var reponse = '<p> Examen ' + i +' domaine ' + localStorage.getItem('examenDomaine' + i) + ' :' +  examenReponse + '/' +  examenNombre + "</p>";
         items.push( reponse );
     }
    $('.content').html(items);
    $('#note').text( (moyenneA/moyenneB)*100 + "%");
    $('#domaine').val(localStorage.getItem('domaine'));
 } 
 
 
 
