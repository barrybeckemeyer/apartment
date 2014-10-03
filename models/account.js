var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	passportLocalMongoose = require('passport-local-mongoose'),
	bcrypt = require('bcrypt-nodejs');

var AccountSchema = new Schema({
	username: String,
	password: String
});

AccountSchema.plugin(passportLocalMongoose);

AccountSchema.statics.showUsers = function(callback){
	return this.model('Account').find(function(err,results){
		callback(err,results);
	});
}

module.exports.model = mongoose.model('Account', AccountSchema);
