document.addEventListener("keydown", function (e) {

    if (e.code.match('Key.')) {

        let availableSounds = ['A','S','D','F','G','H','J','W','E','T','Y','U'];
        let pressedKey = e.code.slice(-1);

        if (availableSounds.includes(pressedKey)) {
            let audio = new Audio("key_sound\\" + pressedKey + ".mp3").play();
        }
    }
})