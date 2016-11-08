var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;
var random = require('mongoose-simple-random');
var autoIncrement = require('mongoose-auto-increment');

var connection =  mongoose.connect( 'mongodb://tp4420users:tp4420@ds145667.mlab.com:45667/tp4420' );
autoIncrement.initialize(connection);

var questionSchema = new Schema({
 subject : String,
 question_text : String,
 reponse : Number,
 choix_un : String,
 choix_deux : String,
 choix_trois : String,
 choix_quatre : String,
});
var exmenSchema = new Schema({
 subject : String,
 note_finale : Number,
 bonne_repones : Number,
 progression : Number,
 progression_finale : Number
});

questionSchema.plugin(autoIncrement.plugin, 'Question');
questionSchema.plugin(random);
exmenSchema.plugin(autoIncrement.plugin, 'Examen');

mongoose.model( 'Question', questionSchema );
mongoose.model( 'Examen', exmenSchema );
