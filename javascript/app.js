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
    })
})