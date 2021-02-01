console.log("hello checker");
function startgame(){

var heading = document.getElementById("colorvalue");
//heading.innerHTML = "hello im sahil";


function setbuttoncolor(button,red,green,blue){
    button.setAttribute('style',
    'background-color: rgb('+red+','+green+','+blue+');'
    );
}

var buttons = document.getElementsByClassName("colorbutton");

setbuttoncolor(buttons[0],0,0,255);


function makecolorvalues() {
    return Math.round(Math.random()*255);
}

console.log(Math.round(Math.random()*255));
console.log(Math.round(Math.random()*255));
console.log(Math.round(Math.random()* (buttons.length-1)));

var answerbutton = Math.round(Math.random()* (buttons.length-1));
var answermessage = document.getElementById("answer");


for(var i=0 ; i<buttons.length;i++){


var red = makecolorvalues();
var green = makecolorvalues();
var blue = makecolorvalues();

setbuttoncolor(buttons[i],red,green,blue);

if (i=== answerbutton){

    heading.innerHTML=`(${red} , ${green}, ${blue})`;           
}

//console.log(buttons.length);
//console.log("yes");

//var winner = document.getElementsByTagName("body");

buttons[i].addEventListener('click', function(){
//console.log("yes");

    if (this === buttons[answerbutton]){
        answermessage.innerHTML=("Correct");
    }
    else{
        answermessage.innerHTML=("wrong Answer, Guess Again!");
    }

});
}

}
startgame();
document.getElementById('reset').addEventListener('click',startgame);