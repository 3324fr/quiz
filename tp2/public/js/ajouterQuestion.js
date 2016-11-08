$(function() {
    
    function validateForm() {
        text = $('#textquestion').val();
        if (text.length < 10 ) {
            
            $('#validationtextquestion').text("La question doit comporter au moins 10 caractères.");
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
        posting.done(function( data ) {
            alert( data );
        });
        posting.fail(function() {
            alert( "error" );
        })
        
        
    });
});
