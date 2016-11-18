 window.onload = function(){
	$.get( 'ajax/examEnCours/',$(this).serialize())
		.done(function( data ) {
			if(data != "true")
				$('#repriseExam').css("display", "none");
		}).fail(function( data ) {
			alert("error");
	});
	$.get( 'ajax/tousLesExams/',$(this).serialize())
		.done(function( data ) {
			var items = [];
			var moyenneA = 0;
			var moyenneB = 0;
			for (i = 0; i < data.length; i++) {
				moyenneA = moyenneA + data[i].bonne_repones;
				moyenneB = moyenneB + data[i].progression_finale;
				var reponse = '<p> Examen ' + i +' domaine ' + data[i].subject + ' :' +  data[i].bonne_repones + '/' +  data[i].progression_finale + "</p>";
				items.push( reponse );
			}
			$('#noteRapide').html(items);
			$('#note').text( (moyenneA/moyenneB)*100 + "%");
		}).fail(function( data ) {
			alert("error");
	});
	$.get( 'ajax/utilisateur/',$(this).serialize())
		.done(function( data ) {
			var items = [];
			items.push('<p> Bonne reponses questions rapides html: ' + data.bonnereponse_html + '</p>');
			items.push('<p> Bonne reponses questions rapides css: ' + data.bonnereponse_css + '</p>');
			items.push('<p> Bonne reponses questions rapides javascript: ' + data.bonnereponse_js + '</p>');
			items.push('<p> Nombre questions rapides html: ' + data.question_html + '</p>');
			items.push('<p> Nombre questions rapides css: ' + data.question_css + '</p>');
			items.push('<p> Nombre questions rapides javascript: ' + data.question_js + '</p>');
			items.push('<p> Bonne reponses questions examen html: ' + data.totalpoint_html + '</p>');
			items.push('<p> Bonne reponses questions examen css: ' + data.totalpoint_css + '</p>');
			items.push('<p> Bonne reponses questions examen javascript: ' + data.totalpoint_js + '</p>');
			items.push('<p> Nombre questions examens html: ' + data.examen_html + '</p>');
			items.push('<p> Nombre questions examens css: ' + data.examen_css + '</p>');
			items.push('<p> Nombre questions examens javascript: ' + data.examen_js + '</p>');
			$('#fenetreModale').html(items);
		}).fail(function( data ) {
			alert("error");
	});
    nombre = $('#nombre');
    nombre.change(function() {
        localStorage.setItem("nombre", nombre.val());
    });
    storage = localStorage.getItem('nombre');
    if( !isNaN(parseInt(storage, 10))) {
        nombre.val(storage);
    }
    $('select[name = domaine]').change(function() {
        domaine = $('#domaine :selected').val();
        $.getJSON( "/ajax/count" + domaine, function( data ) {
			$('#nombre').attr("max", data);
        });
        
    });
 } 
 
 
 
 
