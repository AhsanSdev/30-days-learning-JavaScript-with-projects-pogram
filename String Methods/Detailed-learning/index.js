

// 1.length
// ➡️ String ki length batata hai
// "hello".length  5

// let input = window.prompt("Please enter your password");

// if (input.length < 8) {
//     window.alert("Your password should contain at least 8 characters");
// } else {
//     window.alert("Thanks for your input");
// }

// let input = prompt("please enter your answer");

// alert(`your written characters are ${input.length}`);


// Ask the user for a password.
// If it contains spaces, show:
// "Password should not contain spaces"
// Else, show:
// "Password accepted"

// let input = prompt("please enter your password and password dont contain spaces");

// if (input.includes(" ")) {
//     alert("Password should not contain spaces please try again");
// }

// else {
//     alert("thanks for your input");
// }


// Goal:
// Ask the user for a password. Check if:

// It has at least 8 characters

// It contains at least one number (0-9)

// If both are true → show: "Strong password"
// Else → show: "Weak password"


//notes = /\d/ is a regular expression (regex) It checks if a string contains any digit (0–9)

// Bonus tip: Instead of hasNum == false, you can just write !hasNum (optional, cleaner).


// let passKey = prompt("please enter your password and it must contain numbers");
// let hasNum = /\d/.test(passKey);

// if (passKey.length < 8 || !hasNum) {
//         alert("please enter a strong password");
// }

// else {
//     alert("thanks for your input");
// }

// Task: Very Strong Password Check
// Check if the password:

// Has at least 8 characters

// Has at least one number

// Has at least one uppercase letter

// Has at least one special character (like @, #, $, %, etc.)


// let passKey = prompt("please enter a strong password which includes at least 8 characters, at least one number, at least one uppercase letter, at least one special character (like @, #, $, %, etc.)")

// let hasNum = /\d/.test(passKey);
// let hasSpecCHar = /[!@#$%^&*()"]/.test(passKey);
// let upCase = /[A-Z]/.test(passKey);

// if(passKey.length < 8 || !hasNum || !hasSpecCHar || !upCase) {
//     alert("please enter a strong password");
// }

// else {
//     alert("thanks for your input")
// }



// 2. toUpperCase()
// ➡️ Sab characters ko uppercase banata hai
// "hi".toUpperCase() // "HI"

// let input = prompt("please enter your name");



// 3. toLowerCase()
// ➡️ Sab characters ko lowercase banata hai
// "HI".toLowerCase() // "hi"

// 4. trim()
// ➡️ String ke start/end ke extra spaces hataata hai
// "  hi  ".trim() // "hi"

// 5. includes()
// ➡️ Check karta hai ke substring exist karti hai ya nahi
// "apple".includes("p") // true

// 6. indexOf()
// ➡️ Substring ki pehli position batata hai
// "banana".indexOf("a") // 1

// 7. lastIndexOf()
// ➡️ Substring ki last position batata hai
// "banana".lastIndexOf("a") // 5

// 8. slice(start, end)
// ➡️ String ka ek hissa nikaalta hai
// "hello".slice(1, 4) // "ell"

// 9. substring(start, end)
// ➡️ Slice ki tarah hota hai lekin negative index support nahi karta
// "hello".substring(1, 4) // "ell"

// 10. substr(start, length) (deprecated)
// ➡️ Start se lekar specific length ka part return karta hai
// "hello".substr(1, 3) // "ell"

// 11. replace(old, new)
// ➡️ Pehla match replace karta hai
// "car".replace("c", "b") // "bar"

// 12. replaceAll(old, new)
// ➡️ Saare matches replace karta hai
// "carcar".replaceAll("c", "b") // "barbar"

// 13. charAt(index)
// ➡️ Specific position ka character return karta hai
// "hi".charAt(1) // "i"

// 14. charCodeAt(index)
// ➡️ Character ka Unicode return karta hai
// "A".charCodeAt(0) // 65

// 15. split(separator)
// ➡️ String ko array me convert karta hai
// "one,two".split(",") // ["one", "two"]

// 16. concat()
// ➡️ Strings ko jodta hai
// "hello".concat(" world") // "hello world"

// 17. startsWith()
// ➡️ Check karta hai string kis word se start hoti hai
// "hello".startsWith("he") // true

// 18. endsWith()
// ➡️ Check karta hai string kis word pe end hoti hai
// "hello".endsWith("lo") // true

// 19. repeat(n)
// ➡️ String ko n times repeat karta hai
// "ha".repeat(3) // "hahaha"

// 20. padStart(length, pad)
// ➡️ Start me characters add karta hai till length
// "5".padStart(3, "0") // "005"

// 21. padEnd(length, pad)
// ➡️ End me characters add karta hai till length
// "5".padEnd(3, "0") // "500"

// 22. match(regex)
// ➡️ Regular expression se match karta hai
// "abc123".match(/\d+/) // ["123"]






/*🔧 Project Name: Smart Text Analyzer
📝 User Input: Ek text (jaise ek paragraph)

📊 Output:

-Total characters

-Total words

-Text in UPPERCASE

-Text in lowercase

-Does it contain a specific word? (e.g. "JavaScript")

-First 20 characters (using slice)

-Replace any word (e.g. "bad" ➝ "good")

✅ Example Output:
Input:
" JavaScript is awesome. I love JavaScript! "

Output:

Characters: 45

Words: 6

Uppercase: "JAVASCRIPT IS AWESOME. I LOVE JAVASCRIPT!"

Lowercase: "javascript is awesome. i love javascript!"

Contains "JavaScript"? ✅

First 20 chars: "JavaScript is aweso"

After replace: "JavaScript is awesome. I love TypeScript!"

🔤 Concepts Covered:
trim(), length, split(), includes(), toUpperCase(), toLowerCase(), slice(), replace()

*/