'use strict';

window.onload = function(){
	$.get( 'ajax/noteExamTermine/',$(this).serialize())
		.done(function( data ) {
			$('#note').text(data.bonne_repones + "/"+ data.progression_finale);  
		}).fail(function( data ) {
			alert("error");
	});  
} 


