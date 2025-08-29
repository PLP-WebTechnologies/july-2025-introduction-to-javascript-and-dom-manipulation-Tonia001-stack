// Variable declaration and conditionals (part 1)
// Different ways to declare variables....note: the var method is outdated.

var oldStyle = "This is the old way";
let modernWay = "This is the modern way";
const constant = "This value won't change";

// Examples with different data types
let userName = "Tonia";           // String
let age = 25;                     // Number
let isActive = true;              // Boolean
let scores = [85, 89, 78];        // Array
let user = {                      // Object
  name: "Tonia", 
  email: "Tonia@email.com"
};

// Conditionals....
// Basic if statement
if (age >= 18) {
  console.log("You are an adult");
}

// if-else statement
let score = 85;
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else {
  grade = "C";
}

// Ternary operator (short conditional)
let status = isActive ? "Online" : "Offline";

// Complete example of variable declaration and conditionals.
// Variable declarations

// Variable declarations....case type(snake casing used here).
let user_name = "Guest";
let user_age = 20;
const minimum_age = 18;
let has_permission = false;

// Conditionals
if (user_age >= minimum_age) {
  has_permission = true;
  console.log(`Welcome, ${user_name}! You have access.`);
} else {
  console.log("Sorry, you must be 18 or older.");
}

// part 2..custom funtions(at least 2)
// Function 1: Calculate age category
function getAgeCategory(age) {
  if (age < 14) {
    return "Child";
  } else if (age < 20) {
    return "Teenager";
  } else if (age < 60) {
    return "Adult";
  } else {
    return "Senior";
  }
}

// Function 2: Generate personalized welcome message
function createWelcomeMessage(name, age) {
  let category = getAgeCategory(age);
  let greeting = `Hello ${name}! You are classified as a ${category}.`;
  
  if (age >= minimum_age) {
    greeting += " You have full access to our services.";
  } else {
    greeting += " Limited access until you turn 18.";
  }
  
  return greeting;
}

// Test the functions
console.log(getAgeCategory(16));           // "Teenager"
console.log(createWelcomeMessage("Tonia", 25)); // "Hello Alice! You are classified as a Adult. You have full access to our services."


// Part 3( At least 2 loop examples)

// Loop 1: For loop - Check multiple users' ages
let user_ages = [16, 22, 17, 25, 14, 30];

console.log("=== Checking User Ages ===");
for (let i = 0; i < user_ages.length; i++) {
  let age = user_ages[i];
  let access = age >= minimum_age ? "Granted" : "Denied";
  console.log(`User ${i + 1}: Age ${age} - Access ${access}`);
}

// Loop 2: While loop - Count down from user age
console.log("=== Age Countdown ===");
let countdown = user_age;
while (countdown > 0) {
  console.log(`Countdown: ${countdown}`);
  countdown--;
  if (countdown === minimum_age) {
    console.log("Reached minimum age!");
    break;
  }
}

// Part 4..DOM interactions(at lest 3)

// DOM Interaction 1: Change text content
function updateWelcomeMessage() {
  let welcome_element = document.getElementById("welcome-message");
  welcome_element.textContent = `Welcome, ${user_name}! Age: ${user_age}`;
}

// DOM Interaction 2: Get user input and respond
function handleUserInput() {
  let input_element = document.getElementById("name-input");
  let output_element = document.getElementById("output");
  
  let entered_name = input_element.value;
  
  if (entered_name) {
    user_name = entered_name;
    output_element.innerHTML = createWelcomeMessage(entered_name, user_age);
    output_element.style.color = "green";
  } else {
    output_element.innerHTML = "Please enter a name!";
    output_element.style.color = "red";
  }
}

// DOM Interaction 3: Create and add list items dynamically
function displayUsersList() {
  let user_list = document.getElementById("user-list");
  let users = ["Tonia", "Joy", "Charlie", "John"];
  
  // Clear existing list
  user_list.innerHTML = "";
  
  for (let user of users) {
    let list_item = document.createElement("li");
    list_item.textContent = `${user} - ${getAgeCategory(25)}`;
    user_list.appendChild(list_item);
  }
}

// Event listener to connect button to function
document.getElementById("submit-btn").addEventListener("click", handleUserInput);

// Call functions when page loads
updateWelcomeMessage();
displayUsersList();



