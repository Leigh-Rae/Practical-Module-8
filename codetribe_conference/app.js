//PA0201
conference_name = "Codetribe Conference 2026";

document.getElementById("conference_name").innerHTML = conference_name;

conference_date = "Date: 28 September 2026";

document.getElementById("conference_date").innerHTML = conference_date;

numberOfseats = "500+";

document.getElementById("numberOfseats").innerHTML = numberOfseats;

welcoming_message = "The Future Is Built By Developers";

document.getElementById("welcoming_message").innerHTML = welcoming_message;

// PA0303

function ValidateForm() {
  const firstname = document.getElementById("firstname").value;
  let age = document.getElementById("age").value;
  let email = document.getElementById("email").value;

  if (firstname.length >= 3) {
  } else {
    alert("please enter a minimum of 3 characters");
  }

  if (age < 18) {
    alert("You do not meet the required age to participate");
  } else if (age >= 18 && age <= 35) {
    alert("You meet the required age to participate");
  } else {
    alert("You are older than the required age to participate");
  }

  if (email == "") {
    alert("Please ensure that you do not leave the email field open");
  }
}

//PA0401 && PA0406

const apiUrl = "https://randomuser.me/api/?results=6 ";

fetch(apiUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

//PA0402 
speaker = {
  name: "Leigh",
  email: "leigh@gmail.com",
  age: 24,
  province: "Northern Cape",
  attendanceType: "physical",
  topic: "Web development",
};
console.log(speaker);

const convertObjectIntoJson = JSON.stringify(speaker);
console.log(convertObjectIntoJson);

speakerJson = {
  name: "Leigh",
  email: "leigh@gmail.com",
  age: 24,
  province: "Northern Cape",
  attendanceType: "physical",
  topic: "Web development",
};

//PA0403

$.ajax({
  url: "https://randomuser.me/api/?results=6 ",
  method: "Get",
  success: function (data) {
    console.log(data);
  },
  error: function (error) {
    console.log(error);
  },
});

//PA0404

async function getSpeakers() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

//PA0405

const xhr = new XMLHttpRequest();
xhr.open(
  "GET", // GET= retrieve information
  apiUrl,

  // Where the request must be sent
  // true make the request asynchronous
  true,
);

// Handle the response
// onload runs when the server has responded

xhr.onload = function () {
  // check whether the HTTP Request was successful


  if (xhr.status === 200) {
    console.log(
        "RAW JSON",
    )
  }
};



