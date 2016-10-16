 window.onload = function(){
     nombre = $('#nombre');
     nombre.change(function() {
         localStorage.setItem("nombre", nombre.val());
     });
     nombre.val( localStorage.getItem('nombre'));
     
     $('select[name = domaine]').change(function() {
         localStorage.setItem("domaine", $('#domaine :selected').val());
         
     });

     $('#domaine').val(localStorage.getItem('domaine'));
 } 
 
 
