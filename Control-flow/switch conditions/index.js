let color = window.prompt("please enter your favaroite background color");

switch (color) {
    case "red":
        window.alert("Your background color is changed to red");
        document.body.style.backgroundColor = color;
    break;

    case "green":
        window.alert("Your background color is changed to green");
        document.body.style.backgroundColor = color;
    break;

    case "blue":
        window.alert("Your background color is changed to blue");
        document.body.style.backgroundColor = color;
    break;

    case "purple":
        window.alert("Your background color is changed to purple");
        document.body.style.backgroundColor = color;
    break;

    case "black":
        window.alert("Your background color is changed to red");
        document.body.style.backgroundColor = color;
    break;

    default:
        window.alert("please choose a valid bg color");
        break;
}