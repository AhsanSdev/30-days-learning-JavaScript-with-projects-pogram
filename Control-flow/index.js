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


let input = window.prompt("enter a character")
const vowel = ["a", "e", "i", "o", "u",]

if (input.length === 1 && vowel.includes(input.toLowerCase())) {
    window.alert("your character is a vowel")
}

else {
    window.alert("your character is not a vowel")
}