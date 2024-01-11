for (let i=0; i<document.querySelectorAll("button.drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        playSound(checkKey(this.innerHTML));
        addAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown", (event) => {
    playSound(checkKey(event.key));
    addAnimation(event.key);
});

function playSound(sound) {
    let audio = new Audio(sound);
    audio.play();
}

function checkKey(key) {
    let sound
    switch (key) {
        case "w":
            sound = "sounds/tom-1.mp3";
            break;
        case "a":
            sound = "sounds/tom-3.mp3";
            break;
        case "s":
            sound = "sounds/tom-4.mp3";
            break;
        case "d":
            sound = "sounds/tom-2.mp3";
            break;
        case "j":
            sound = "sounds/crash.mp3";
            break;
        case "k":
            sound = "sounds/kick-bass.mp3";
            break;
        case "l":
            sound = "sounds/snare.mp3";
            break;
        default:
            console.log(this);
    }
    return sound;
}

function addAnimation(key) {
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function () {
        document.querySelector("." + key).classList.remove("pressed");
    }, 100);
}