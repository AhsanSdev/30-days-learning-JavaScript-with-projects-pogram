// // console.log("Hello World");

// const i = 30;

// if (i == 30) {
//   console.log("i is 30");
// } else {
//   console.log("i is not 30");
// }


// const age = window.prompt("Enter your age: ");
// if (age >= 18) {
//   console.log("You are an adult.");
// }else {
//   console.log("You are a minnow.");
// }

const age = window.prompt("Enter your age: ");

function checkAge(age) {
  if (age >= 18) {
    document.getElementById("age").innerHTML = "You are an adult.";
  } 
  
  else {
    document.getElementById("age").innerHTML = "You are a minor.";
  }
}