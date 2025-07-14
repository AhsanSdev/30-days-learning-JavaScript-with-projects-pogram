// let name = prompt("please enter your name!");

// function greet (name) {
//     document.getElementById("myh1").innerHTML = "welcome " + name;
// }

// greet(name);



//  User se birth year lo → current year se minus karo → page pe age dikhao

// let input = +prompt("please enter your birthdate");

// function brthYearSimmulator (input) {
//     let year = new Date().getFullYear();
//     let age = year - input;
//     document.getElementById("myh1").innerHTML = "you are " + age + " years old"
// }

// brthYearSimmulator(input);



//  Din ka waqt check karo (morning/evening) → user ka naam prompt se lo → greet message banao.

// const time = ["Morning", "Afternoon", "Evening", "Night"];

// let userInput = prompt("please enter your current time");

// function greet(userInput) {
//     if (userInput == "Morning"){
//         document.getElementById("myh1").innerHTML = "Good Morning!"
//     }

//     else if (userInput == "evening"){
//         document.getElementById("myh1").innerHTML = "Good evening!"
//     }

//     else if (userInput == "Afternon"){
//         document.getElementById("myh1").innerHTML = "Good Afternoon!"
//     }

//     else if (userInput == "Night"){
//         document.getElementById("myh1").innerHTML = "Good Night!"
//     }

//     else {
//         document.getElementById("myh1").innerHTML = "please enter a valid time!"
//     }
// }

// greet(userInput);


// let userInput = prompt("please enter your current time");

// function greet (userInput){
//     document.getElementById("myh1").innerHTML = "Good " +userInput+ "!";
// }

// greet(userInput);


//Prompt se koi color name/code lo → body ka background color change karo.

let input = prompt("please enter a color");

function color (input) {
    document.body.style.backgroundColor = input;

}

color(input);