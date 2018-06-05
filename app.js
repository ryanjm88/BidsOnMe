var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var expressValidator = require("express-validator");
var flash = require("connect-flash");
var session = require("express-session");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var mongo = require("mongodb");
var mongoose = require("mongoose");
var multer = require("multer");
var path = require("path");

mongoose.connect(
  "mongodb://mongoUser:bidsonme0@ds133241.mlab.com:33241/heroku_g7962z42"
);
var db = mongoose.connection;

var routes = require("./routes/index");
var users = require("./routes/users");
var User = require("./models/user");
var Job = require("./models/job");

// Init App
var app = express();

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Create USER
app.post("/homeUser", function(req, res) {
  var first_name = req.body.first_name;
  var last_name = req.body.last_name;
  var email = req.body.email;
  var password = req.body.password;

  var newUser = new User({
    first_name: first_name,
    last_name: last_name,
    email: email,
    password: password,
    contractor: "false"
  });
  User.createUser(newUser, function(err, user) {
    if (err) throw err;
    console.log(newUser);
  });
});

app.post("/contractorUser", function(req, res) {
  var first_name = req.body.first_name;
  var last_name = req.body.last_name;
  var email = req.body.email;
  var password = req.body.password;

  var newUser = new User({
    first_name: first_name,
    last_name: last_name,
    email: email,
    password: password,
    contractor: "true"
  });
  User.createUser(newUser, function(err, user) {
    if (err) throw err;
    console.log(newUser);
  });
});

app.post("/postJob", function(req, res) {
  var jobType = req.body.jobType;
  var homeownerAddress = req.body.homeownerAddress;
  var homeownerCity = req.body.homeownerCity;
  var homeownerZip = req.body.homeownerZip;
  var startingBid = req.body.startingBid;
  var closingDate = req.body.closingDate;
  var jobDescription = req.body.jobDescription;
  var jobPhoto = req.body.jobPhoto;

  var newJob = new Job({
    jobType: jobType,
    homeownerAddress: homeownerAddress,
    homeownerCity: homeownerCity,
    homeownerZip: homeownerZip,
    startingBid: startingBid,
    closingDate: closingDate,
    jobDescription: jobDescription,
    jobPhoto: jobPhoto
  });
  Job.createJob(newJob, function(err, newJob) {
    if (err) throw err;
    console.log(newJob);
  });
});

app.get("/getAllJobs", function(req, res) {
  var jobType = req.body;
  Job.find()
    .select(jobType)
    .exec(function(err, doc) {
      res.send(doc);
      console.log(doc);
    });
});

app.post("/getJobhome", function(req, res) {
  var id = req.body.id;
  Job.getJobById(id, function(err, user) {
    done(err, user);
  });
});

app.get("/login", function(req, res) {
  var email = req.body.email;
  User.findOne()
  .select(email)
  .exec(function(err, doc) {
      res.send(doc);
      console.log(doc);
    });
});

app.get("/getAllJobs", function(req, res) {
  var jobType = req.body;
  Job.find()
    .select(jobType)
    .exec(function(err, doc) {
      res.send(doc);
      console.log(doc);
    });
});
// Set Static Folder
app.use(express.static("public"));

// Express Validator
app.use(
  expressValidator({
    errorFormatter: function(param, msg, value) {
      var namespace = param.split("."),
        root = namespace.shift(),
        formParam = root;

      while (namespace.length) {
        formParam += "[" + namespace.shift() + "]";
      }
      return {
        param: formParam,
        msg: msg,
        value: value
      };
    }
  })
);

app.use("/", routes);
app.use("/users", users);

// Set Port

var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
