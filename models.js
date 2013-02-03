var mongoose = require('mongoose')
  , Schema = mongoose.Schema

// based on https://devcenter.heroku.com/articles/nodejs-mongoose
var uristring = 
	process.env.MONGODB_URI ||
	process.env.MONGOLAB_URI ||
	'mongodb://localhost/burgers';
var mongoOptions = { db: { safe: true }};

mongoose.connect(uristring, mongoOptions, function (err, res) {
	if (err) {
		console.log('ERROR connecting to: ' + uristring + '. ' + err);
	} else {
		console.log('Succeeded connecting to:' + uristring + '.');
	}
});

var ingredientSchema = new Schema({
	name: String,
	cost: { type: Number, min: 0 }
});

mongoose.model('Ingredient', ingredientSchema);

var orderSchema = new Schema({
 	customerName: String,
	ingredients: [{ type: Schema.Types.ObjectId, ref: 'Ingredient' }],
	cost: Number
});

mongoose.model('Order', orderSchema);