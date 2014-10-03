var account = require('../models/account.js' );

function Account(){};

Account.prototype.showUsers = function(req, res) {
	account.model.showUsers(function(err, results) {
		if(err)
			res.send(err);
		else
			res.render('users', {users:results});
	});
}

module.exports.controller = new Account();