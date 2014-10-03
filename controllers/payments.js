var payment = require('../models/payment.js' );

function Payment(){};

Payment.prototype.showPayments = function(req, res) {
	payment.model.showPayments(function(err, results) {
		if(err)
			res.send(err);
		else
			res.render('payments', {payments:results});
	});
}

Payment.prototype.addPayment = function(req, res){
	payment.model.addPayment(req.body, function(err, results){
		if(err)
			res.send(err);
		else
			res.send("success!");
	});
}

module.exports.controller = new Payment();