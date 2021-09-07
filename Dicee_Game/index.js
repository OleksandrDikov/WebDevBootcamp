
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var user1dise = "images/dice" + randomNumber1 + ".png";
var user2dise = "images/dice" + randomNumber2 + ".png";

if (user1dise > user2dise) {
    document.querySelector("h1").innerText = "🚩User 1 Won!";
} else if (user1dise < user2dise) {
    document.querySelector("h1").innerText = "User 2 Won! 🚩";
} else {
    document.querySelector("h1").innerText = "Drow!";
}

document.querySelectorAll("img")[0].setAttribute("src", user1dise);
document.querySelectorAll("img")[1].setAttribute("src", user2dise);

const reloadtButton = document.querySelector("#reload");
// Reload everything:
function reload() {
    reload = location.reload();
}
// Event listeners for reload
reloadButton.addEventListener("click", reload, false);