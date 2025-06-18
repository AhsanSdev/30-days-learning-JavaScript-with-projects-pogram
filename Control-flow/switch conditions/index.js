// let color = window.prompt("please enter your favaroite background color");

// switch (color) {
//     case "red":
//         window.alert("Your background color is changed to red");
//         document.body.style.backgroundColor = color;
//     break;

//     case "green":
//         window.alert("Your background color is changed to green");
//         document.body.style.backgroundColor = color;
//     break;

//     case "blue":
//         window.alert("Your background color is changed to blue");
//         document.body.style.backgroundColor = color;
//     break;

//     case "purple":
//         window.alert("Your background color is changed to purple");
//         document.body.style.backgroundColor = color;
//     break;

//     case "black":
//         window.alert("Your background color is changed to red");
//         document.body.style.backgroundColor = color;
//     break;

//     default:
//         window.alert("please choose a valid bg color");
//         break;
// }


// Prompt user to enter a traffic light color: "red", "yellow", "green"
// Show alert with instruction:
// "Stop" for red
// "Ready" for yellow
// "Go" for green

// let input = window.prompt("please enter your traffic light color").toLowerCase();

// switch (input) {
//     case "red":
//         window.alert("Stop");
//         break;

//     case "yellow":
//         window.alert("Ready");
//         break;

//     case "green":
//         window.alert("Go");
//         break;

//     default:
//         window.alert("please enter a valid traffic light color");
//         break;
// }

// User enters month number (1–12), you show season:

// 12, 1, 2 → "Winter"

// 3, 4, 5 → "Spring"

// 6, 7, 8 → "Summer"

// 9, 10, 11 → "Autumn"

// Use parseInt() to convert prompt string to number


// let input = parseInt(window.prompt("please enter your current month"));

// switch (input) {
//     case 12:
//     case 1:
//     case 2:
//         window.alert("hurray! its winter");
//         break;

//     case 3:
//     case 4:
//     case 5:

//         window.alert("well! its spring");
//         break;

//     case 6:
//     case 7:
//     case 8:

//         window.alert("Damn! its summer");
//         break;

//     case 9:
//     case 10:
//     case 11:

//         window.alert("well! its autumn");
//         break;

//     default:
//         window.alert("please enter a valid month");
//         break;
// }


// User inputs a day (e.g., "Monday", "sunday" etc.)
// 🔹 Output:
// "Weekday" for Mon–Fri
// "Weekend" for Sat–Sun
// "Invalid" for anything else

// 🆕 Suggestion: Use .toLowerCase() to make input case-insensitive


// let input = window.prompt("please enter your current day").toLowerCase();

// switch (input) {
//     case "monday":
//     case "tuesday":
//     case "wednesday":
//     case "thursday":
//     case "friday":
//         window.alert("Damn! its Weekday");
//         break;

//     case "saturday":
//     case "sunday":

//  window.alert("hurray! its Weekend");
//         break;


//     default:
//         window.alert("Invalid");
//         break;

// }