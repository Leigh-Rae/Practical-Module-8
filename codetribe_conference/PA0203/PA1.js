// PA0203 – Describe Basic JavaScript Syntax

// 1. VARIABLES
// A variable stores a value that can be changed.
let availableSeats = 50;
availableSeats = 45;

// 2. CONSTANTS
// A constant stores a value that cannot be changed.
const totalSeats = 100;

// 3. STRINGS
// A string stores text.
let conferenceName = "Tech Conference";

// 4. NUMBERS
// Numbers are used to store numerical values.
let bookedSeats = 55;
let remainingSeats = 45;

// 5. BOOLEANS
// A boolean can be true or false.
let seatsAvailable = true;

// 6. ARRAYS
// An array stores multiple values.
let seatTypes = ["VIP", "Standard", "Student"];

// 7. OPERATORS
// Operators are used to perform calculations.
let seatsLeft = totalSeats - bookedSeats;
let extraSeats = bookedSeats + availableSeats;

// 8. CONDITIONS
// Conditions allow the program to make decisions.
if (availableSeats > 0) {
    console.log("Seats are still available.");
} else {
    console.log("The conference is fully booked.");
}

// 9. FUNCTIONS
// A function is a reusable block of code.
function checkSeats(total, booked) {
    let remaining = total - booked;
    console.log("Total Seats:", total);
    console.log("Booked Seats:", booked);
    console.log("Remaining Seats:", remaining);
}

// Calling the function
checkSeats(totalSeats, bookedSeats);

// Display results
console.log("Conference:", conferenceName);
console.log("Total Seats:", totalSeats);
console.log("Available Seats:", availableSeats);
console.log("Seats Available:", seatsAvailable);
console.log("Seat Types:", seatTypes);
console.log("Seats Left:", seatsLeft);