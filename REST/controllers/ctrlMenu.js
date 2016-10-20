var configApplication 	= require("../config/application");
var Model 				= require("../models/modMeal");

exports.addMeal = function(req, res){
	var reasonsToFail = [];
	console.log("WORKS")
	console.log(req.body);
	if (!req.body)
		reasonsToFail.push("Request sem body");
	if (!req.body.name)
		reasonsToFail.push("Field name is obligatory!");
	if (!req.body.price)
		reasonsToFail.push("Field price is obligatory!");
	if (!req.body.description)
		reasonsToFail.push("Field description is obligatory!");
	if (reasonsToFail.length == 0){
		var toAdd = {
			name : req.body.name, 
			price : req.body.price, 
			description : req.body.description
		};
		Model.create(toAdd, function(err, meal){
			if (err){
				res.json({success: false, message: "Failed to add meal!"});
				return false;
			} else {
				res.json({success: true, message: "Meal added!", addedMeal: meal});
				return true;
			}
		});
	} else{
		res.json({success: false, message: "Failed to add meal!", reasons : reasonsToFail});
		return false;
	}
};

exports.getMenu = function(req, res){
	Model.find(function(err, meals){
		if (err)
			res.json({success: false, message: "Failed to send menu!"});
		res.json({success: true, menu: meals});
	});
};

exports.order = function(req, res){
	var reasonsToFail = [];
	if (!req.body)
		reasonsToFail.push("Request sem body");
	if (!req.body.name)
		reasonsToFail.push("Field name is obligatory!");
	if (reasonsToFail.length == 0){
		var req_name = req.body.name;
		Model.find({name: req_name}, "name price description", function(err, meal){
			if (err)
				res.json({success: false, mensagem: "Failed to complete order!"});

			if (meal.length > 0){
				setTimeout(function(){
					res.json({success: true, status: "Your meal is ready!", meal: meal[0]});
				}, 15000);
				return true;

			} else {
				res.json({success: false, reasons: "Your meal doesn't exist in our menu!"});
				return false;
			}

		});
	} else {
		res.json({success: false, message: "Failed to add meal!", reasons : reasonsToFail});
		return false;	
	}
}

exports.get666 = function(req, res){
	res.json({message: "WELCOME TO HELL!"});
	return true;
};