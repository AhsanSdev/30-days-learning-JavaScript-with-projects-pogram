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