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

     $('#domaine').val(localStorage.getItem('domaine'));
 } 
 
 
