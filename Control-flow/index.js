// Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122)  


// let input = window.prompt("Enter a single character:");

// if (input && input.length === 1) {
//     let ASCII = input.charCodeAt(0);


// if (ASCII >= 48 && ASCII <= 57) {
//     console.log("it's a number");        
// }

// else if (ASCII >= 65 && ASCII <= 90) {
//     console.log("it's a UPPERCASE letter");
// }

// else if(ASCII >= 97 && ASCII <= 122) {
//     console.log("it's a lowercase letter");
// }

// else {
//     console.log("it's a special character");    
// }
// }

// else {
//     console.log("please enter a valid character");    
// }





// Write a JavaScript program that accept two integers and 
// display the larger. Also show if the two integers are equal.


// My logic one 

//parseInt and parseFloat is a built in function converts a string to an integer or number

// let num1 = parseInt(window.prompt("enter a number"))
// let num2 = parseInt(window.prompt("enter a number"))

// if (num1 > num2) {
//     console.log(`${num1} "is greater than" ${num2}`);
// }

// else if (num2 > num1) {
//     console.log(`${num2} "is greater than" ${num1}`);
// }


// else {
//     console.log("both numbers are equal");
// }


// Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero

// let input = parseFloat(window.prompt("enter a number"));


// if (input >0) {
//     window.alert("it's a possitive number");
// }

// else if (input <0) {
//     window.alert("it's a negative number");
// }

// else {
//     window.alert("it's a zero");
// }


// Write a program that takes a character (i.e. string of 
// length 1) and returns true if it is a vowel, false otherwise


//Use .includes() to check if your input is inside the vowel array
// input.toLowerCase() helps match even if user enters capital letter like A, E etc


// let input = window.prompt("enter a character")
// const vowel = ["a", "e", "i", "o", "u",]

// if (input.length === 1 && vowel.includes(input.toLowerCase())) {
//     window.alert("your character is a vowel")
// }

// else {
//     window.alert("your character is not a vowel")
// }

// Write a program that a. Store correct password in a JS variable. b.  Asks user to enter his/her password c.   Validate the two passwords: i. Check if user has entered password. If not, then 
// give message “ Please enter your password” ii. Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise

// const password = "ahsan111";

// let inputPass = window.prompt("Please enter your password");

// if (!inputPass){
//     window.alert("please enter your password")
// }

// else if (inputPass == password) {
//     window.alert("Correct! The password you entered matches the original password");    
// }

// else {
//     window.alert('Incorrect password')
// }


/*
This if/else statement does not work. Try to fix it: 
var greeting; 
var hour = 13; 
if (hour < 18) { 
greeting = "Good day"; 
else 
greeting = "Good evening"; 
}
*/


// I modefied the code and add some changes 

    let greeting; 
    let hour = parseFloat(window.prompt("Enter your current time please")); 

    if (hour >= 6 && hour < 12) { 
    greeting = "Good morning";
    } 

    else if (hour >= 12 && hour <16 ) {
        greeting = "Good afternoon";
    }

    else if (hour >= 16 && hour < 20) { 
        greeting = "Good evening"; 
    }

    else if (hour >= 20 || hour < 6) {
        greeting = "Good night";
    }

    else {
        greeting = "please enter a valid time"
    }

    window.alert(greeting)