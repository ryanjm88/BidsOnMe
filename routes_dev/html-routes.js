// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/homeowner", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/homeowner.html"));
  });

  app.get("/signupcon", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signupcon.html"));
  });

  app.get("/signuphom", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signuphom.html"));
  });

  app.get("/contractor", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/contractor.html"));
  });

  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

};
