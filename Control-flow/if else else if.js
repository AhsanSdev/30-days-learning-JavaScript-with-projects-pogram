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

    // let greeting; 
    // let hour = parseFloat(window.prompt("Enter your current time please")); 

    // if (hour >= 6 && hour < 12) { 
    // greeting = "Good morning";
    // } 

    // else if (hour >= 12 && hour <16 ) {
    //     greeting = "Good afternoon";
    // }

    // else if (hour >= 16 && hour < 20) { 
    //     greeting = "Good evening"; 
    // }

    // else if (hour >= 20 || hour < 6) {
    //     greeting = "Good night";
    // }

    // else {
    //     greeting = "please enter a valid time"
    // }

    // window.alert(greeting)

// Write a program that takes time as input from user in 24 
// hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statements

let input = parseFloat(window.prompt("please enter your current time in 24-hour clock format"));
let greeting;

if (input == 0) {
    window.alert("your current time is 12am");   
    greeting = "good night have a good sleep";
} 

else if (input == 1) {
        window.alert("your current time is 1am");   
        greeting = "good night have a good sleep";
}

else if (input == 2) {
        window.alert("your current time is 2am");   
        greeting = "good night have a good sleep";
}

else if (input == 3) {
        window.alert("your current time is 3am");   
        greeting = "good night have a good sleep";
}

else if (input == 4) {
        window.alert("your current time is 4am");   
        greeting = "good night have a good sleep";
}

else if (input == 5) {
        window.alert("your current time is 5am");   
        greeting = "good night have a good sleep";
}

else if (input == 6) {
        window.alert("your current time is 6am");   
        greeting = "good night have a good sleep";
}


else if (input == 7) {
        window.alert("your current time is 7am");   
        greeting = "good morning have a good day";
}

else if (input == 8) {
        window.alert("your current time is 8am");
        greeting = "good morning have a good day";
}

else if (input == 9) {
        window.alert("your current time is 9am");  
        greeting = "good morning have a good day";
}

else if (input == 10) {
        window.alert("your current time is 10am");  
        greeting = "good morning have a good day"; 
}
else if (input == 11) {
        window.alert("your current time is 11am");  
        greeting = "good morning have a good day"; 
}
else if (input == 12) {
        window.alert("your current time is 12pm");  
        greeting = "good afternoon have a good day"; 
}
else if (input == 13) {
        window.alert("your current time is 1pm");   
        greeting = "good afternoon have a good day";
}
else if (input == 14) {
        window.alert("your current time is 2pm");   
        greeting = "good afternoon have a good day";
}
else if (input == 15) {
        window.alert("your current time is 3pm"); 
        greeting = "good afternoon have a good day";  
}
else if (input == 16) {
        window.alert("your current time is 4pm");   
        greeting = "good evening have a good day";
}
else if (input == 17) {
        window.alert("your current time is 5pm");   
        greeting = "good evening have a good day";
}
else if (input == 18) {
        window.alert("your current time is 6pm");   
        greeting = "good evening have a good day";
}
else if (input == 19) {
        window.alert("your current time is 7pm");   
        greeting = "good evening have a good day";
}
else if (input == 20) {
        window.alert("your current time is 8pm");   
        greeting = "good night have a good sleep";
}
else if (input == 21) {
        window.alert("your current time is 9pm");  
        greeting = "good night have a good sleep"; 
}

else if (input == 22) {
        window.alert("your current time is 10pm"); 
        greeting = "good night have a good sleep";  
}

else if (input == 23) {
        window.alert("your current time is 11pm");         
        greeting = "good night have a good sleep";  
}

if (greeting) {
    window.alert(greeting);
}

else {
        window.alert(`${input} is not a valid time!`);   
}

