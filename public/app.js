$(document).ready(function() {
  $("#homeownerButton").on("click", function() {
    window.location = "homeowner.html";
  });
  $("#contractorButton").on("click", function() {
    window.location = "contractor.html";
  });
  $("#signupButton").on("click", function() {
    window.location = "signup.html";
  });

  $("#homeownerForm").hide();
  $("#contractorForm").hide();
  $("#signupDiv2").hide();

  $("#homeownerSignUp").on("click", function(event) {
    $("#contractorForm").hide();
    $("#homeownerForm").show();
  });

  $("#contractorSignUp").on("click", function(event) {
    $("#homeownerForm").hide();
    $("#contractorForm").show();
  });

  $("#homeownerPost").hide();
  $("#homeownerJobsCard").hide();
  $("#submitHomeowner").on("click", function(event) {
    event.preventDefault();
    var newUser = {
      first_name: $("#first_name")
        .val()
        .trim(),
      last_name: $("#last_name")
        .val()
        .trim(),
      email: $("#email")
        .val()
        .trim(),
      password: $("#password")
        .val()
        .trim()
    };

    $.ajax({
      type: "POST",
      data: JSON.stringify(newUser),
      contentType: "application/json",
      url: "/homeUser",
      success: function(data) {
        console.log("success");
        console.log(JSON.stringify(newUser));
      }
    });

    console.log(newUser);

    $("#homeownerForm").hide();
    $("#signupDiv").hide();
    $("#signupDiv2").show();
  });

  $("#submitContractor").on("click", function(event) {
    event.preventDefault();
    var newUser = {
      first_name: $("#contractorName")
        .val()
        .trim(),
      last_name: $("#contractorName")
        .val()
        .trim(),
      email: $("#contractorEmail")
        .val()
        .trim(),
      password: $("#contractorPassword")
        .val()
        .trim()
    };

    $.ajax({
      type: "POST",
      data: JSON.stringify(newUser),
      contentType: "application/json",
      url: "/contractorUser",
      success: function(data) {
        console.log("success");
        console.log(JSON.stringify(newUser));
      }
    });

    $("#contractorForm").hide();
    $("#signupDiv").hide();
    $("#signupDiv2").show();
  });

  $("#homeownerSignIn").on("click", function(event) {
    event.preventDefault();
    $("#homeownerPost").show();
    $("#homeownerJobsCard").hide();
    $("#homeownerLogin").hide();
    var logUser = {
      email: $("#homeownerPassword")
        .val()
        .trim(),
      password: $("#homeownerPassword")
        .val()
        .trim()
    };
    console.log(logUser);

    $.ajax({
      type: "POST",
      data: JSON.stringify(logUser),
      contentType: "application/json",
      url: "/login",
      success: function(data) {
        console.log("success");
        console.log(JSON.stringify(logUser));
      }
    });
  });

  $("select").formSelect();

  if ($("#jobsPosted").val == "") {
    $("#homeownerJobsCard").hide();
  }
  $(document).on("click", "#postJob", function() {
    $("#homeownerJobsCard").show();

    var job = {
      jobType: $("#jobType")
        .val()
        .trim(),
      homeownerAddress: $("#homeownerAddress")
        .val()
        .trim(),
      homeownerCity: $("#homeownerCity")
        .val()
        .trim(),
      homeownerZip: $("#homeownerZip")
        .val()
        .trim(),
      startingBid: $("#startingBid")
        .val()
        .trim(),
      closingDate: $("#closingDate")
        .val()
        .trim(),
      jobDescription: $("#jobDescription")
        .val()
        .trim(),
      jobPhoto: $("#jobPhoto")
        .val()
        .trim()
    };
    console.log(job);
    $.ajax({
      type: "POST",
      data: JSON.stringify(job),
      contentType: "application/json",
      url: "/postJob",
      success: function(data) {
        console.log("success");
        console.log(JSON.stringify(job));
      }
    });


    $("#jobsPosted").append(
      "<tr><td>" +
        homeownerAddress +
        "</td><td>" +
        jobType +
        "</td><td>" +
        jobDescription +
        "</td><td>" +
        jobPhoto +
        "</td></tr>"
    );
  });

  $("#availableJobsCard").hide();

  $("#contractorSignIn").on("click", function() {
    $("#contractorLogin").hide();
    $("#availableJobsCard").show();

      var jobType = "Remodeling";
    $.ajax({
      type: "GET",
      data: jobType,
      contentType: "application/json",
      url: "/getAllJobs",
      success: function(data) {
        console.log("success");
        console.log(JSON.stringify(data));
      }
    });

    var contractorEmail = $("#contractorEmail")
      .val()
      .trim();
    var contractorPassword = $("#contractorPassword")
      .val()
      .trim();

    console.log(contractorEmail);
    console.log(contractorPassword);
  });
});
