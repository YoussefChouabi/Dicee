var randomNumber1 =Math.floor(Math.random()*6)+1;
 var randomDiceImage1= "images/" + "dice" + randomNumber1 + ".png";
document.getElementById("img1").setAttribute("src",randomDiceImage1);

var randomNumbre2 =Math.floor(Math.random()*6)+1;
var randomDiceImage2= "images/"+"dice"+randomNumbre2+".png";
document.getElementById("img2").setAttribute("src",randomDiceImage2);

if (randomNumber1 > randomNumbre2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumbre2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
