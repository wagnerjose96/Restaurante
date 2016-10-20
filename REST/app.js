var path 			= require("path")
var logger 			= require("morgan");
var bodyParser 		= require("body-parser");
var cookieParser 	= require("cookie-parser");
var express 		= require("express");
var mongoose 		= require("mongoose");
var jwt 			= require("jsonwebtoken");

var configApplication 	= require("./config/application");
var configDatabase 		= require("./config/database");

mongoose.connect(configDatabase.url);
var db = mongoose.connection;

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

var rtRoutes = require("./routes/rtIndex");
app.use("/", rtRoutes);

var rtMenu = require("./routes/rtMenu");
app.use("/Menu", rtMenu);

if (app.get("env") === "development"){
	app.use(function(err, req, res, next){
		res.status(err.status || 500);
		res.sender("error", {
			message: err.message,
			error: err
		});
	});
}

app.listen(configApplication.port, function(){
	console.log("Connected on port "+configApplication.port+"!");	
	console.log("Using database at: "+configDatabase.url+"!")
});