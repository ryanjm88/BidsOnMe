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

    $("#homeownerSignUp").on("click", function(event)    {
        $("#contractorForm").hide();
        $("#homeownerForm").show();
    });

    $("#contractorSignUp").on("click", function(event)   {
        $("#homeownerForm").hide();
        $("#contractorForm").show();
    });

    $("#homeownerPost").hide();
    $("#homeownerJobs").hide();

    $("#homeownerSignIn").on("click", function()    {
        $("#homeownerPost").show();
        $("#homeownerJobs").show();
        $("#homeownerLogin").hide();
        console.log($("#homeownerEmail").val().trim());
        console.log($("#homeownerPassword").val().trim());
    });

    $('select').formSelect();

    $(document).on('click', "#postJob", function() {
        console.log($("#jobType").val().trim());
        console.log($("#homeownerAddress").val().trim());
        console.log($("#homeownerCity").val().trim());
        console.log($("#homeownerZip").val().trim());
        console.log($("#startingBid").val().trim());
        console.log($("#closingDate").val().trim());
        console.log($("#jobDescription").val().trim());
    });
})