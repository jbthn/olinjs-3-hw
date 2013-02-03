var mongoose = require('mongoose');
var Ingredient = mongoose.model('Ingredient');

exports.new = function(req, res){
  res.render('newIngredient', { title: 'Add a new ingredient' });
};

exports.create = function(req, res){
	new Ingredient ({
		name: req.body.name,
		cost: req.body.cost
	}).save(function (err) {
		if (err) throw err;
		res.render('create', {title: 'Ingredient saved!'})
	})
}