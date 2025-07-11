let count = 0;

//Use ++count for update first, then show it
//++count ka faida === Pehle increment hota hai, phir value return hoti hai jabke normal cound me Pehle value return hoti hai, phir increment hota hai

function add(){
    document.getElementById("counter").innerHTML = ++count;
}

//my biggest mistake i didnt put qoutes in counter
//function callback html file me ho raha hai yahan nahi

function minus(){

    if (count > 0) {
           document.getElementById("counter").innerHTML = --count;
    }

    else {
        count = 0
    }
}


function reset(){
    count = 0;
    document.getElementById("counter").innerHTML = count;
}
