$(function() {
    
    function validateForm() {
        text = $('#textquestion').val();
        if (text.length < 10 || text.length > 512) {
            
            $('#validationtextquestion').text("La question doit comporter entre 10 et 512 caractères.");
            return false;
        }
        else if (text.substr(text.length - 1) != "?" ){
            
            $('#validationtextquestion').text("La question doit finir avec un ?.");
            return false;
        }
        
        else {
            
            $('#validationtextquestion').text("");
        }
    }
    $('#textquestion').blur(function() {
        validateForm();
        
    });
    $('#monForm').on('submit', function(e) {          
        e.preventDefault();
        validateForm();
        
        var posting = $.post( $(this).attr( "action" ),$(this).serialize() );
        posting.always(function( data ) {
            alert( data );
        });
        
        
    });
});
