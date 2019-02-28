$(document).ready(function () {
    $("#homeownerButton").on("click", function () {
        window.location = "./public/homeowner.html";
    });
    $("#contractorButton").on("click", function () {
        window.location = "./public/contractor.html";
    });
    $("#signupButton").on("click", function () {
        window.location = "./public/signup.html";
    });

    $("#homeownerForm").hide();
    $("#contractorForm").hide();
    $("#signupDiv2").hide();
    $("#biddingCard").hide();

    $("#homeownerSignUp").on("click", function (event) {
        $("#contractorForm").hide();
        $("#signupDiv").hide();
        $("#homeownerForm").show();
    });

    $("#contractorSignUp").on("click", function (event) {
        $("#homeownerForm").hide();
        $("#signupDiv").hide();
        $("#contractorForm").show();
    });

    $("#postOrView").hide();
    $("#homeownerPost").hide();
    $("#homeownerJobsCard").hide();

    // getting homeowner sign-up credentials

    $("#submitHomeowner").on("click", function () {
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
    $("#submitContractor").on("click", function () {
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
    $("#homeownerSignIn").on("click", function () {
        $("#postOrView").show();
        $("#homeownerPost").hide();
        $("#homeownerJobsCard").hide();
        $("#homeownerLogin").hide();
        console.log($("#homeownerEmail").val().trim());
        console.log($("#homeownerPassword").val().trim());
    });

    $("#goToPosts").on("click", function () {
        $("#postOrView").hide();
        $("#homeownerPost").show();
    });

    $("#viewJobs").on("click", function () {
        $("#postOrView").hide();
        $("#homeownerJobsCard").show();
    });

    $('select').formSelect();

    if ($("#jobsPosted").val == '') {
        $("#homeownerJobsCard").hide();
    }

    // homeowner new job post info
    $(document).on('click', "#postJob", function () {
        $("#homeownerJobsCard").show();
        $("#homeownerPost").hide();

        var jobType = $("#jobType").val().trim();
        var homeownerAddress = $("#homeownerAddress").val().trim();
        var homeownerCity = $("#homeownerCity").val().trim();
        var homeownerZip = $("#homeownerZip").val().trim();
        var startingBid = $("#startingBid").val().trim();
        var closingDate = $("#closingDate").val().trim();
        var jobDescription = $("#jobDescription").val().trim();
        var jobPhoto = $("#jobPhoto").val().trim();

        var dateConverted = moment(closingDate).format("MM/DD/YYYY");
        console.log(dateConverted);

        console.log(jobType);
        console.log(homeownerAddress);
        console.log(homeownerCity);
        console.log(homeownerZip);
        console.log(startingBid);
        console.log(closingDate);
        console.log(jobDescription);
        console.log(jobPhoto);

        $("#newButton").append("<button class='waves-effect waves-light btn' value=''>'bid'</button>")
        // appending new job info to homeowner table
        $("#jobsPosted").children().last().remove();
       $("#jobsPosted").append("<tr><td>" + homeownerAddress + "</td><td>" + jobType + "</td><td>" + jobDescription + "</td><td>" + jobPhoto + "</td><td>" + "</td><td>" + "</tr>");

        localStorage.setItem('jobType', jobType);
        localStorage.setItem('homeAddy', homeownerAddress);
        localStorage.setItem('jobDesc', jobDescription);
        localStorage.setItem('jobPic', jobPhoto);
        localStorage.setItem('jobDate', dateConverted);
        localStorage.setItem('jobPrice', startingBid);
    });

    $("#availableJobsCard").hide();

    $("#contractorSignIn").on("click", function () {
        $("#contractorLogin").hide();
        $("#biddingCard").hide();
        $("#availableJobsCard").show();

        var contractorEmail = $("#contractorEmail").val().trim();
        var contractorPassword = $("#contractorPassword").val().trim();

        console.log(contractorEmail);
        console.log(contractorPassword);

        var conJobType = localStorage.getItem('jobType');
        var conHomeAddy = localStorage.getItem('homeAddy');
        var conJobDesc = localStorage.getItem('jobDesc');
        var conJobPic = localStorage.getItem('jobPic');
        var conJobDate = localStorage.getItem('jobDate');
        var conJobPrice = localStorage.getItem('jobPrice');

        var newJobButton = document.createElement("a");
        newJobButton.setAttribute("class", "waves-effect waves-light btn");
        newJobButton.setAttribute("id", "newJobBtn");
        newJobButton.setAttribute("value", "");
        
        $("#jobsPostedContractor").append("<tr><td>" + conHomeAddy + "</td><td>" + conJobType + "</td><td>" + conJobDesc + "</td><td>" + conJobPic + "</td><td id='newConPrice'>" + "$" + conJobPrice + "</td><td>" + conJobDate + "</td><td id='bidCell'>" + "</tr>");

        document.getElementById("bidCell").appendChild(newJobButton);
        document.getElementById("newJobBtn").innerText = "bid";
    });

    $("#bidButton").on("click", function () {
        $("#biddingCard").show();
        console.log($('child').index(this) + 2);

        var jobid = $('child').index(this) + 2;
        console.log(jobid);


        $("#placeNewBid").on("click", function (event) {
            event.preventDefault();
            var newBid = $("#newBid").val().trim();
            console.log(newBid);

            $("#price").html("$" + newBid);
            $("#currentBid").html("$" + newBid);
            $("#biddingCard").hide();

            localStorage.setItem("newerBid", newBid);
        });
    });

    $("#viewJobs").on("click", function () {

        var storedPrice = localStorage.getItem("newerBid");

        if (storedPrice === null)
        console.log(storedPrice);

        $("#OGprice").html("$" + storedPrice);


    });

    $("#jobsPostedContractor").on("click", "#newJobBtn", function (event) {
        event.preventDefault();
        $("#biddingCard").show();
        console.log("test");

        var conJobPrice = localStorage.getItem('jobPrice');
        console.log(conJobPrice);

        $("#currentBid").html("$" + conJobPrice);

        $("#placeNewBid").on("click", function (event) {
            event.preventDefault();
            $("#biddingCard").hide();

            var secondNewBid = $("#newBid").val().trim();
            console.log(secondNewBid);

            $("#newConPrice").html("$" + secondNewBid);

            localStorage.setItem('jobPrice', secondNewBid);

        })
    });

    var conHomeAddy = localStorage.getItem('homeAddy');
    var conJobType = localStorage.getItem('jobType');
    var conJobDesc = localStorage.getItem('jobDesc');
    var conJobPic = localStorage.getItem('jobPic');
    var conJobDate = localStorage.getItem('jobDate');
    var finalPrice = localStorage.getItem('jobPrice');

   $("#jobsPosted").append("<tr><td>" + conHomeAddy + "</td><td>" + conJobType + "</td><td>" + conJobDesc + "</td><td>" + conJobPic + "</td><td id='newConPrice'></td><td>" + "$" + finalPrice + "</td>" + "</tr>");
});