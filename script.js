window.onscroll = function () { scrollFunction() };
window.onload = function () { getVoterInfo() };



function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById("myTopnav").style.top = "0";
  } else {
    document.getElementById("myTopnav").style.top = "-100px";
  }
}
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// function fadeIn() {
//   $("#sam1").addClass("fade-in");
//   // setTimeout(function () {
//   //   $("#sam2").addClass("fade-in");
//   // }, 2000);
//   setTimeout(function () {
//     $("#sam3").addClass("fade-in");
//   }, 3000);
// };

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jacobrosenbaum95@gmail.com',
    pass: 'Squidward11'
  }
});

const userOptions = emailOptions(input)

transporter.sendMail(userOptions, function (error, info) {

  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

res.end();

function emailOptions(input) {
  console.log("from email options " + input)
  let emailOptions = {}
  emailOptions.from = $("#input1").val;
  emailOptions.to = 'jacobrosenbaum95@gmail.com';
  emailOptions.subject = 'Sign up with Chameleon Sheets';
  return emailOptions
};


function getVoterInfo(event) {
  var address = $("#input1").val();
  var queryURL = "https://www.googleapis.com/civicinfo/v2/voterinfo?q=1920IrvingAveSMinneapolisMN";
  console.log(queryURL);
  $.ajax({
    url: queryURL,
    type: "GET",
  }).then(function (response) {
    console.log(response);
  });
};