// let color = window.prompt("please enter your favaroite background color");

// switch (color) {
//     case "red":
//         window.alert("Your background color is changed to red");
//         document.body.style.backgroundColor = color;
//     break;

//     case "green":
//         window.alert("Your background color is changed to green");
//         document.body.style.backgroundColor = color;
//     break;

//     case "blue":
//         window.alert("Your background color is changed to blue");
//         document.body.style.backgroundColor = color;
//     break;

//     case "purple":
//         window.alert("Your background color is changed to purple");
//         document.body.style.backgroundColor = color;
//     break;

//     case "black":
//         window.alert("Your background color is changed to red");
//         document.body.style.backgroundColor = color;
//     break;

//     default:
//         window.alert("please choose a valid bg color");
//         break;
// }


// Prompt user to enter a traffic light color: "red", "yellow", "green"
// Show alert with instruction:
// "Stop" for red
// "Ready" for yellow
// "Go" for green

let input = window.prompt("please enter your traffic light color").toLowerCase();

switch (input) {
    case "red":
        window.alert("Stop");
        break;

    case "yellow":
        window.alert("Ready");
        break;

    case "green":
        window.alert("Go");
        break;

    default:
        window.alert("please enter a valid traffic light color");
        break;
}
