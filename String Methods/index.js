/*

1.length
➡️ String ki length batata hai
"hello".length // 5

2. toUpperCase()
➡️ Sab characters ko uppercase banata hai
"hi".toUpperCase() // "HI"

3. toLowerCase()
➡️ Sab characters ko lowercase banata hai
"HI".toLowerCase() // "hi"

4. trim()
➡️ String ke start/end ke extra spaces hataata hai
"  hi  ".trim() // "hi"

5. includes()
➡️ Check karta hai ke substring exist karti hai ya nahi
"apple".includes("p") // true

6. indexOf()
➡️ Substring ki pehli position batata hai
"banana".indexOf("a") // 1

7. lastIndexOf()
➡️ Substring ki last position batata hai
"banana".lastIndexOf("a") // 5

8. slice(start, end)
➡️ String ka ek hissa nikaalta hai
"hello".slice(1, 4) // "ell"

9. substring(start, end)
➡️ Slice ki tarah hota hai lekin negative index support nahi karta
"hello".substring(1, 4) // "ell"

10. substr(start, length) (deprecated)
➡️ Start se lekar specific length ka part return karta hai
"hello".substr(1, 3) // "ell"

11. replace(old, new)
➡️ Pehla match replace karta hai
"car".replace("c", "b") // "bar"

12. replaceAll(old, new)
➡️ Saare matches replace karta hai
"carcar".replaceAll("c", "b") // "barbar"

13. charAt(index)
➡️ Specific position ka character return karta hai
"hi".charAt(1) // "i"

14. charCodeAt(index)
➡️ Character ka Unicode return karta hai
"A".charCodeAt(0) // 65

15. split(separator)
➡️ String ko array me convert karta hai
"one,two".split(",") // ["one", "two"]

16. concat()
➡️ Strings ko jodta hai
"hello".concat(" world") // "hello world"

17. startsWith()
➡️ Check karta hai string kis word se start hoti hai
"hello".startsWith("he") // true

18. endsWith()
➡️ Check karta hai string kis word pe end hoti hai
"hello".endsWith("lo") // true

19. repeat(n)
➡️ String ko n times repeat karta hai
"ha".repeat(3) // "hahaha"

20. padStart(length, pad)
➡️ Start me characters add karta hai till length
"5".padStart(3, "0") // "005"

21. padEnd(length, pad)
➡️ End me characters add karta hai till length
"5".padEnd(3, "0") // "500"

22. match(regex)
➡️ Regular expression se match karta hai
"abc123".match(/\d+/) // ["123"]


*/

