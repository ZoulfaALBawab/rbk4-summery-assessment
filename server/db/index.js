var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/pokemon';


// Connect Mongoose to our local MongoDB via URI specified above and export it below
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
///check !
db.once('open', function() {
	console.log('success');
});


module.exports = db;
