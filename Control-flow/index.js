// Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122)  


let input = window.prompt("Enter a single character:");

if (input && input.length === 1) {
    let ASCII = input.charCodeAt(0);


if (ASCII >= 48 && ASCII <= 57) {
    console.log("it's a number");        
}

else if (ASCII >= 65 && ASCII <= 90) {
    console.log("it's a UPPERCASE letter");
}

else if(ASCII >= 97 && ASCII <= 122) {
    console.log("it's a lowercase letter");
}

else {
    console.log("it's a special character");    
}
}

else {
    console.log("please enter a valid character");    
}
