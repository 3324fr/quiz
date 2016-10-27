'use strict';

window.onload = function(){
    var bonneReponse = localStorage.getItem("bonneReponse")
    var nombre = localStorage.getItem("nombre")
    $('#note').text(bonneReponse + "/"+ nombre);
    
    var noExamen = parseInt(localStorage.getItem('noExamen'));
    if (isNaN(noExamen)) {
        localStorage.setItem('noExamen', 1);
        noExamen = 1;
    }
    localStorage.setItem('examenReponse' + noExamen, bonneReponse);
    localStorage.setItem('examenNombre' + noExamen, nombre);
    localStorage.setItem('examenDomaine' + noExamen, localStorage.getItem('domaine'));
    localStorage.setItem('noExamen', noExamen + 1);
    
    
} 


