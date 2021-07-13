document.write("<br><br>")
var numOfWon = 0;
var numOfLost = 0;

for(var i = 1; i<=5; i++){
    var num = parseFloat(prompt("Enter your number from 1 to 5"));

    var randNum = Math.floor(Math.random()*5) + 1;

    if(num == randNum){
        document.write("you have won<br>");
        numOfWon++;
    }
    else{
        document.write("you have lost. Random number was " + randNum +"<br>");
        numOfLost++;
    }
}

document.write("<br>");
document.write("You have won " + numOfWon + " times<br>");
document.write("You have lost " + numOfLost + " times");


