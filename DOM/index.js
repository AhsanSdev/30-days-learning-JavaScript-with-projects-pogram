let name = window.prompt("please enter your name").trim();

function greet(name) {
    document.getElementById("myh1").innerHTML = "hello " + name + "!";
}

greet(name);