$(document).ready(function()    {
    $("#homeownerButton").on("click", function()    {
        window.location = "homeowner.html";
    });
    $("#contractorButton").on("click", function()   {
        window.location = "contractor.html";
    });
    $("#signupButton").on("click", function()   {
        window.location = "signup.html";
    });

    $("#homeownerForm").hide();
    $("#contractorForm").hide();
    $("#signupDiv2").hide();

    $("#homeownerSignUp").on("click", function(event)    {
        $("#contractorForm").hide();
        $("#homeownerForm").show();
    });

    $("#contractorSignUp").on("click", function(event)   {
        $("#homeownerForm").hide();
        $("#contractorForm").show();
    });

    $("#homeownerPost").hide();
    $("#homeownerJobsCard").hide();

    // getting homeowner sign-up credentials

    $("#submitHomeowner").on("click", function()    {
        var first_name = $("#first_name").val().trim();
        var last_name = $("#last_name").val().trim();
        var email = $("#email").val().trim();
        var password = $("#password").val().trim();

        console.log(first_name);
        console.log(last_name);
        console.log(email);
        console.log(password);

        $("#homeownerForm").hide();
        $("#signupDiv").hide();
        $("#signupDiv2").show();
    });

    // getting contractor sign-up credentials
    $("#submitContractor").on("click", function()    {
        var contractorName = $("#contractorName").val().trim();
        var contractorEmail = $("#contractorEmail").val().trim();
        var contractorPassword = $("#contractorPassword").val().trim();

        console.log(contractorName);
        console.log(contractorEmail);
        console.log(contractorPassword);

        $("#contractorForm").hide();
        $("#signupDiv").hide();
        $("#signupDiv2").show();
    });


    // homeowner member sign in
    $("#homeownerSignIn").on("click", function()    {
        $("#homeownerPost").show();
        $("#homeownerJobsCard").show();
        $("#homeownerLogin").hide();
        console.log($("#homeownerEmail").val().trim());
        console.log($("#homeownerPassword").val().trim());
    });

    $('select').formSelect();

    // homeowner new job post info
    $(document).on('click', "#postJob", function() {
        var jobType = $("#jobType").val().trim();
        var homeownerAddress = $("#homeownerAddress").val().trim();
        var homeownerCity = $("#homeownerCity").val().trim();
        var homeownerZip = $("#homeownerZip").val().trim();
        var startingBid = $("#startingBid").val().trim();
        var closingDate = $("#closingDate").val().trim();
        var jobDescription = $("#jobDescription").val().trim();

        console.log(jobType);
        console.log(homeownerAddress);
        console.log(homeownerCity);
        console.log(homeownerZip);
        console.log(startingBid);
        console.log(closingDate);
        console.log(jobDescription);

        // appending new job info to homeowner table
        $("#jobsPosted").append("<tr><td>" + homeownerAddress + "</td><td>" + jobType + "</td><td>" + jobDescription + "</td></tr>");
    });
})