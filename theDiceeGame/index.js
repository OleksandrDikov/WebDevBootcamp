var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var dice1 = "images/dice" + randomNumber1 + ".png" ;
var dice2 = "images/dice" + randomNumber2 + ".png" ;

// document.querySelector("img.img1").src = dice;
document.querySelector("img.img1").setAttribute("src", dice1);
document.querySelector("img.img2").setAttribute("src", dice2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "&#128681 Anya Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Sasha Wins! &#128681";
}
else {
    document.querySelector("h1").innerHTML = "Draw!"
}
