var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
	res.send("<b>Please use one of the following APIs:\
			<br><ul>\
			<li>menu/list/</li>\
			<li>menu/order/</li>\
			<li>menu/addmeal/</li>\
			</ul><br>\
			</b>");
});

module.exports = router;