var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	id: Schema.Types.ObjectId
});

var User = mongoose.model('User', userSchema);

module.exports = User;
