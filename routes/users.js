var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user');
var contractor;
// Register

router.get("/signup", function(req, res) {
		res.sendFile(path.join(__dirname, "signup.html"));
	  });

// Login
router.get('/home', function (req, res) {
	res.sendFile(path.join(__dirname, "home.html"));
});

// Register User

router.post('/api/users', function (req, res) {
	var first_name = req.body.first_name;
	var last_name = req.body.last_name;
	var email = req.body.email;
	var password = req.body.password;
	

	// Validation
	req.checkBody('last_name', 'first_name is required').notEmpty();
	req.checkBody('first_name', 'first_name is required').notEmpty();
	req.checkBody('email', 'Email is not valid').isEmail();
	req.checkBody('password', 'Password is required').notEmpty();

	var errors = req.validationErrors();

	console.log(errors);

		//checking for email and email are already taken
					var newUser = new User({
						first_name: first_name,
						last_name: last_name,
						email: email,
						password: password
					});
					User.createUser(newUser, function (err, user) {
						if (err) throw err;
						console.log(newUser);
					});
         	req.flash('success_msg', 'You are registered and can now login');
					res.redirect('/users/login');
				}
			);


"https://storage.googleapis.com/coding-bc-projects/BidsOnMe/water-damage.jpg"

passport.use(new LocalStrategy(
	function (email, password, done) {
		User.getUserByemail(email, function (err, user) {
			if (err) throw err;
			if (!user) {
				return done(null, false, { message: 'Unknown User' });
			}

			User.comparePassword(password, user.password, function (err, isMatch) {
				if (err) throw err;
				if (isMatch) {
					return done(null, user);
				} else {
					return done(null, false, { message: 'Invalid password' });
				}
			});
		});
	}));

passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	User.getUserById(id, function (err, user) {
		done(err, user);
	});
});

router.post('/login',
	passport.authenticate('local', { successRedirect: '/', failureRedirect: '/users/login', failureFlash: true }),
	function (req, res) {
		res.redirect('/');
	});

router.get('/logout', function (req, res) {
	req.logout();

	req.flash('success_msg', 'You are logged out');

	res.redirect('/users/login');
});

module.exports = router;