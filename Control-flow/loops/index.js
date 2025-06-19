// User se koi number lo, aur us number tak ke sare even numbers (jo 2 se divide hote hain) loop se print karo.
// Example:
// Agar user 10 de to output ho:
// 2, 4, 6, 8, 10

let input = parseInt(window.prompt("Please enter a number"));
let result = "";

for (let i = 0; i < input ; i++) {
    if (i % 2 === 0) {
        result += i + "\n";
    }
    
}

window.alert("even numbers are:\n" + result);