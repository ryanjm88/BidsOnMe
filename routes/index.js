var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var path = require("path");


router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  router.get("/homeowner", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/homeowner.html"));
  });
  router.get("/signup", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/signup.html"));
  });
  router.get("/contractor", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/contractor.html"));
  });
  

  router.post("/api/users", function(req, res) {
	var newUser = req.body;
	console.log(newUser);
	users.push(newUser);
	res.json(newUser);
  });


  // Displays all users
  router.get("/api/users", function(req, res) {
	return res.json(users);
  });

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/');
	}
}

module.exports = router;