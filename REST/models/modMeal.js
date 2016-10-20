var mongoose = require("mongoose");

var mealSchema = mongoose.Schema({
	name : {
		type: String,
		required: true
	},
	price : {
		type: Number,
		default: 0
	},
	description : {
		type: String,
		required: true
	}
});

var Meal = module.exports = mongoose.model("Meal", mealSchema);