var mongoose = require("mongoose");
// Joh Schema

var JobSchema = mongoose.Schema({
	street: { type: String },
	city: { type: String },
	zip: { type: String },
	type: { type: String },
	starting_bid: { type: String },
	bidClosingDate: { type: String },
	jobDesc: { type: String },
	img: { data: Buffer, contentType: String }
  });

var Job = (module.exports = mongoose.model("Job", JobSchema));

module.exports.createJob = function(JobSchema, callback) {
      NewJob.save(callback);
};

module.exports.getJobByJobname = function(Jobname, callback) {
  var query = { Jobname: Jobname };
  Job.findOne(query, callback);
};

module.exports.getJobById = function(id, callback) {
  Job.findById(id, callback);
};