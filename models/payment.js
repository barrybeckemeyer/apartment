var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var PaymentSchema = new Schema({
	amount: Number,
	from: String,
	to: String,
	description: String
});

PaymentSchema.statics.showPayments = function(callback){
	return this.model('Payment').find(function(err,results){
		callback(err,results);
	});
}

PaymentSchema.statics.addPayment = function(payment,callback){
	var paymentModel = mongoose.model('Payment', PaymentSchema);
	var newPayment = new paymentModel({
		to:payment['to'],
		from:payment['from'],
		amount:payment['amount'],
		description:payment['description']
	});
	
	return newPayment.save(function(err,results){
		callback(err,results);
	})
	
}

module.exports.model = mongoose.model('Payment', PaymentSchema);