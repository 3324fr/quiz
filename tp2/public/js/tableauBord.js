 window.onload = function(){
     nombre = $('#nombre');
     nombre.change(function() {
         sessionStorage.setItem("nombre", nombre.val());
     });
     storage = sessionStorage.getItem('nombre');
     if( !isNaN(parseInt(storage, 10))) {
        nombre.val(storage);
     }
     
     $('select[name = domaine]').change(function() {
         sessionStorage.setItem("domaine", $('#domaine :selected').val());
         
     });

     $('#domaine').val(localStorage.getItem('domaine'));
 } 
 
 
