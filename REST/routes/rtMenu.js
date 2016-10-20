var express = require("express");
var router = express.Router();
var controller = require("../controllers/ctrlMenu");

router.get("/list", controller.getMenu);
router.post("/addmeal", controller.addMeal);
router.get("/get666", controller.get666);

module.exports = router;