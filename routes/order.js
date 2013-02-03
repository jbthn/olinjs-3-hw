var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Ingredient = mongoose.model('Ingredient');

exports.new = function(req, res){
	Ingredient.find().exec(function (err, ing){
		if (err) throw err;
		res.render('newOrder', { title: 'Place your order', ingredients: ing});
	})
};

exports.create = function(req, res){
	var ing = req.body.ingredients;
	new Order ({
		customerName: req.body.name,
		ingredients: ing
	}).save(function (err){
		if (err) throw err;
	})
}

exports.pending = function(req, res){
	Order
		.find()
		.populate('ingredients')
		.exec(function (err, orders){
			if (err) throw err;
			res.render('orders', {title: 'Pending orders', orders: orders});
		})
}

exports.delete = function(req, res) {
	Order
		.findByIdAndRemove(req.body.id)
		.exec(function (err) {
			if (err) throw err;
		});
}