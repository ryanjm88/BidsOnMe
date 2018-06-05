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

module.exports.getJobByJobname = function(Jobname, callback) {
  var query = { Jobname: Jobname };
  Job.findOne(query, callback);
};

module.exports.getJobById = function(id, callback) {
  newJob.findById(id, callback);
};