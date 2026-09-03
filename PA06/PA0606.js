//PA0606
// Store the conference name in a constant variable
const conference_name = "Codetribe Conference 2026";

// Display the conference name on the webpage
document.getElementById("conference_name").innerHTML = conference_name;

// Store the conference date
const conference_date = "Date: 28 September 2026";

// Display the conference date on the webpage
document.getElementById("conference_date").innerHTML = conference_date;

// Store the number of available seats
const numberOfseats = "500+";

// Display the number of seats on the webpage
document.getElementById("numberOfseats").innerHTML = numberOfseats;

// Store the welcome message
const welcoming_message = "The Future Is Built By Developers";

// Display the weLcome message on the page
document.getElementById("welcoming_message").innerHTML = welcoming_message;

// PA0303

// Function used to validate the registration form
function ValidateForm() {
  // Get the values entered by the user in the form
  const firstname = document.getElementById("firstname").value.trim();
  const age = Number(document.getElementById("age").value);
  const email = document.getElementById("email").value.trim();

  // Check whether the first name contains at least 3 characters
  if (firstname.length >= 3) {
    console.log("First name is valid");
  } else {
    alert("Please enter a minimum of 3 characters"); // Display this response if the first name doesnt contain this amount of characters
  }

  // Check whether the participant meets the required age
  if (age < 18) {
    alert("You do not meet the required age to participate");// Display this response if the age doesnt meet the required age
  } else if (age >= 18 && age <= 35) {
    alert("You meet the required age to participate");
  } else {
    alert("You are older than the required age to participate");// Display this response if the age is over the required age
  }

  // Check whether the email field has been left empty
  if (email === "") {
    alert("Please ensure that you do not leave the email field open");
  }
}

// PA0401 && PA0406

// API URL used to retrieve random user information
const apiUrl = "https://randomuser.me/api/?results=6";

// Use Fetch API to send a GET request to the API to get the information
fetch(apiUrl)
  // Convert the API response into JSON
  .then(function (response) {
    return response.json();
  })

  // Display the returned data in the console
  .then(function (data) {
    console.log(data);
  })

  // Handle any errors that may occur during the request
  .catch(function (error) {
    console.log("Error fetching data:", error);
  });

// PA0402

// Create an object containing speaker information
const speaker = {
  name: "Leigh",
  email: "leigh@gmail.com",
  age: 24,
  province: "Northern Cape",
  attendanceType: "physical",
  topic: "Web development",
};

// Display the JavaScript object in the console
console.log(speaker);

// Convert the JavaScript object into a JSON string
const convertObjectIntoJson = JSON.stringify(speaker);

// Display the JSON string in the console
console.log(convertObjectIntoJson);

// Example of a JavaScript object containing speaker information
const speakerJson = {
  name: "Leigh",
  email: "leigh@gmail.com",
  age: 24,
  province: "Northern Cape",
  attendanceType: "physical",
  topic: "Web development",
};

// PA0403

// Use jQuery AJAX to request data from the API
$.ajax({
  // URL where the request will be sent
  url: apiUrl,

  // Specify that this is a GET request
  method: "GET",

  // Run this function when the request is successful
  success: function (data) {
    console.log(data);
  },

  // Run this function if the request fails
  error: function (error) {
    console.log("Error:", error);
  },
});

// PA0404

// Async function used to retrieve speaker information
async function getSpeakers() {
  try {
    // Send a request to the API
    const response = await fetch(apiUrl);

    // Convert the response into JSON
    const data = await response.json();

    // Display the retrieved data
    console.log(data);
  } catch (error) {
    // Handle errors if the API request fails
    console.log("Error fetching speakers:", error);
  }
}

// Call the async function
getSpeakers();

// PA0405

// Create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Open a GET request to the API
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
    // Display the raw JSON response in the console
    console.log("RAW JSON", xhr.responseText);
  } else {
    // Display an error if the HTTP request was unsuccessful
    console.log("Request failed with status:", xhr.status);
  }
};

// Handle network errors
xhr.onerror = function () {
  console.log("Network error occurred while making the request.");
};

// Send the XMLHttpRequest to the API
xhr.send();
