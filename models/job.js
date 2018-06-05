var mongoose = require("mongoose");
// Joh Schema

var JobSchema = mongoose.Schema({
	jobType: { type: String },
	homeownerAddress: { type: String },
	homeownerCity: { type: String },
	homeownerZip: { type: String },
	starting_bid: { type: String },
	startingBid: { type: String },
	closingDate: { type: String },
	jobDescription: { type: String },
	jobPhoto: { type: String}
  });

var Job = (module.exports = mongoose.model("Job", JobSchema));

module.exports.createJob = function(newJob, callback) {
      newJob.save(callback);
};

module.exports.getAllJobs = function(getJobs, callback) {
var query = getJobs.find({jobType: jobType }, null)
query.exec(function (err, docs) {});
};

module.exports.getJobByjobType = function(jobType, callback) {
  Job.findOne(query, callback);
};

module.exports.getJobById = function(id, callback) {
  newJob.findById(id, callback);
};