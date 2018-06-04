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
      type: 'POST',
      data: JSON.stringify(newUser),
          contentType: 'application/json',
                  url: '/homeUser',						
                  success: function(data) {
                      console.log('success');
                      console.log(JSON.stringify(newUser));
                  },
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
      type: 'POST',
      data: JSON.stringify(newUser),
          contentType: 'application/json',
                  url: '/contractorUser',						
                  success: function(data) {
                      console.log('success');
                      console.log(JSON.stringify(newUser));
                  },
              });

    $("#contractorForm").hide();
    $("#signupDiv").hide();
    $("#signupDiv2").show();
  });

//SIGNIN HERE!!! post passport route

  $("#homeownerSignIn").on("click", function() {
    $("#homeownerPost").show();
    $("#homeownerJobsCard").hide();
    $("#homeownerLogin").hide();

    $.ajax({
      type: 'POST',
      data: JSON.stringify(newUser),
          contentType: 'application/json',
                  url: '/contractorUser',						
                  success: function(data) {
                      console.log('success');
                      console.log(JSON.stringify(newUser));
                  },
              });
    console.log(users);
  });

  $("select").formSelect();

  if ($("#jobsPosted").val == "") {
    $("#homeownerJobsCard").hide();
  }
  $(document).on("click", "#postJob", function() {
    $("#homeownerJobsCard").show();

    var jobType = $("#jobType")
      .val()
      .trim();
    var homeownerAddress = $("#homeownerAddress")
      .val()
      .trim();
    var homeownerCity = $("#homeownerCity")
      .val()
      .trim();
    var homeownerZip = $("#homeownerZip")
      .val()
      .trim();
    var startingBid = $("#startingBid")
      .val()
      .trim();
    var closingDate = $("#closingDate")
      .val()
      .trim();
    var jobDescription = $("#jobDescription")
      .val()
      .trim();
    var jobPhoto = $("#jobPhoto")
      .val()
      .trim();

    console.log(jobType);
    console.log(homeownerAddress);
    console.log(homeownerCity);
    console.log(homeownerZip);
    console.log(startingBid);
    console.log(closingDate);
    console.log(jobDescription);
    console.log(jobPhoto);

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
