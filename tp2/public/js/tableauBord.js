 window.onload = function(){
     nombre = $('#nombre');
     nombre.change(function() {
         sessionStorage.setItem("nombre", nombre.val());
     });
     nombre.val( sessionStorage.getItem('nombre'));
     
     $('select[name = domaine]').change(function() {
         sessionStorage.setItem("domaine", $('#domaine :selected').val());
         
     });

     $('#domaine').val(localStorage.getItem('domaine'));
 } 
 
 
