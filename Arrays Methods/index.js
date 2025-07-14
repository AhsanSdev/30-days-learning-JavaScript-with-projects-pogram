// Declare an empty array using JS literal notation to store 
// student names in future.

//Literal notation = [] ka use karke direct likhna, bina kisi function ke

// let studentName = [];


//Declare an empty array using JS object notation to store 
//student names in future

//Object notation = {} ka use karke object ko direct banana.

// let data = {
//     studentName : []
// }


//Declare and initialize a strings array

// let colors = ["red", "yellow", "pink"];


// Declare and initialize a numbers array

// let marks = [94, 100, 88, 89];


// Declare and initialize a boolean array

// let isName = [true];


// Declare and initialize a mixed array

// let users = {
//     userName : ["ahsan", "saad", "umer"],
//     userAge : [19, 22, undefined],
//     isStudent : [true, false, true]

// }

// Declare and Initialize an array and store available 
// education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD). Show the listed 
// qualifications in your browser like

// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD",]

// document.write("<h3>Qualifications in Pakistan:</h3>");
// for (let i = 0; i < qualifications.length; i++) {
//     document.write((i + 1) + ") " + qualifications[i] + "<br>");
// }


// Write a program to store 3 student names in an array.Take 
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// the scores & percentages of students like

// let data = {
//     studentName : ["ahmed", "ayesha", "sara"],
//     score : [320 , 475 , 368],
// }


// let totalMarks = 500;

// for (let i = 0; i < data.studentName.length; i++) {
//     let name = data.studentName[i];
//     let marks = data.score[i];
//     let percentage = (marks / totalMarks) * 100;

//     document.write(
//         name + " scored " + marks + " out of " + totalMarks +
//         " (" + percentage.toFixed(2) + "%)<br>"
//     );
// }


// Initialize an array with color names. Display the array 
// elements in your browser.


let colors = ["red", "blue", "purple", "green"];


// a. Ask the user what color he/she wants to add to the 
// beginning & add that color to the beginning of the array. 
// Display the updated array in your browser. 


// let input = window.prompt("please enter which color you want to add in bigginig");

// colors.unshift(input);

// let diplay = document.write(colors);


// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser.


// let input = window.prompt("please enter which color you want to add in end");

// colors.push(input);

// let diplay = document.write(colors);


// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser. 


// colors.unshift("light green", "light blue");

// let diplay = document.write(colors);


// d. Delete the first color in the array. Display the updated 
// array in your browser. 


// colors.shift();

// let diplay = document.write(colors);


// e. Delete the last color in the array. Display the updated 
// array in your browser. 


// colors.pop();

// let diplay = document.write(colors);


// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser. 

let input = prompt("please enter an index which you want to add a color ")

colors.splice(colors)






// g. Ask the user at which index he/she wants to delete 
// color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined 
// position/index. . Display the updated array in your 
// browser.