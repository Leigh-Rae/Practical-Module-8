
/* PA0201 - Conference Information */

const conference_name = "Codetribe Conference 2026";
const conference_date = "Date: 28 September 2026";
const numberOfseats = "500+";
const welcoming_message = "The Future Is Built By Developers";

document.getElementById("conference_name").innerHTML = conference_name;
document.getElementById("conference_date").innerHTML = conference_date;
document.getElementById("numberOfseats").innerHTML = numberOfseats;
document.getElementById("welcoming_message").innerHTML = welcoming_message;


/* PA0303 - Form Validation */

function ValidateForm() {
    const firstname = document.getElementById("firstname").value;
    const age = Number(document.getElementById("age").value);
    const email = document.getElementById("email").value;

    if (firstname.length < 3) {
        alert("Please enter a minimum of 3 characters");
    }

    if (age < 18) {
        alert("You do not meet the required age to participate");
    } else if (age <= 35) {
        alert("You meet the required age to participate");
    } else {
        alert("You are older than the required age to participate");
    }

    if (email.trim() === "") {
        alert("Please ensure that you do not leave the email field empty");
    }
}


/* PA0401 and PA0406 - Fetch API */

const apiUrl = "https://randomuser.me/api/?results=6";

function fetchSpeakers() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}


/* PA0402 - JavaScript Object and JSON */

const speaker = {
    name: "Leigh",
    email: "leigh@gmail.com",
    age: 24,
    province: "Northern Cape",
    attendanceType: "physical",
    topic: "Web development"
};

console.log(speaker);

const speakerJson = JSON.stringify(speaker);
console.log(speakerJson);


/* PA0403 - jQuery AJAX */

function getSpeakersWithAjax() {
    $.ajax({
        url: apiUrl,
        method: "GET",
        success: data => console.log(data),
        error: error => console.log(error)
    });
}


/* PA0404 - Async and Await */

async function getSpeakers() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}


/* PA0405 - XMLHttpRequest */

function getSpeakersWithXHR() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", apiUrl, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log("RAW JSON", xhr.responseText);
        }
    };

    xhr.onerror = function () {
        console.log("Request failed");
    };

    xhr.send();
}


/* Run the Fetch API example */

fetchSpeakers();


/* EXPORTS */

export {
    ValidateForm,
    fetchSpeakers,
    speaker,
    getSpeakersWithAjax,
    getSpeakers,
    getSpeakersWithXHR
};
