var Abschlussarbeit;
(function (Abschlussarbeit) {
    window.addEventListener("load", init);
    let movingObjects = [];
    let a = 1; //Packman
    let b = 31; //Bubbles
    let p = 31; //PoisonBubbles
    let imgData;
    let packman = new Abschlussarbeit.Packman();
    packman.x = 100;
    packman.y = 100;
    //Punkte
    let score = 0;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Abschlussarbeit.crc2 = canvas.getContext("2d");
        console.log(Abschlussarbeit.crc2);
        document.addEventListener("keydown", movePackman);
        document.addEventListener("touchstart", touchToMovePackman);
        document.addEventListener("touchmove", touchToMovePackman);
        document.addEventListener("touchend", touchToMovePackman);
        _event.preventDefault();
        let background = new Abschlussarbeit.Background;
        background.draw();
        imgData = Abschlussarbeit.crc2.getImageData(0, 0, Abschlussarbeit.crc2.canvas.width, Abschlussarbeit.crc2.canvas.height);
        animate();
        resize();
    }
    //Spielbereich auf Bildschirmbreite anpassen
    function resize() {
        Abschlussarbeit.crc2.canvas.style.width = "100%";
        Abschlussarbeit.crc2.canvas.style.height = "100%";
    }
    function movePackman(_event) {
        if (_event.key == "ArrowRight") {
            console.log("Rechtsklick");
            packman.moveRight();
        }
        if (_event.key == "ArrowLeft") {
            packman.moveLeft();
        }
        if (_event.key == "ArrowUp") {
            packman.moveUp();
        }
        if (_event.key == "ArrowDown") {
            packman.moveDown();
        }
    }
    //Bewegung durch Touch
    function touchToMovePackman(_event) {
        packman.moveTouch(_event.changedTouches[0].clientX, _event.changedTouches[0].clientY);
    }
    function animate() {
        window.setTimeout(animate, 10);
        Abschlussarbeit.crc2.putImageData(imgData, 0, 0);
        moveObjects();
        drawObjects();
        popBubbles();
        popPoisonBubbles();
        checkBubblePosition();
    }
    function checkBubblePosition() {
        for (let i = 0; i < movingObjects.length; i++) {
            let bubbles = movingObjects[i];
            let inside = packman.checkIfInside(bubbles.x, bubbles.y);
            if (inside) {
                if (bubbles.color == "##00BFFF") {
                    movingObjects.splice(i, 1);
                    score = score + 10;
                    if (score > 150) {
                        alert("Glückwunsch! Du hast gewonnen :)");
                        score = 0;
                    }
                }
                if (bubbles.color == "#FF1493") {
                    movingObjects.splice(i, 1);
                    score = score - 10;
                    if (score < -50) {
                        alert("You loose!!!");
                        score = 0;
                    }
                }
            }
        }
    }
    //Bubbles aufpoppen lassen
    function popBubbles() {
        if (b > 30) {
            let bubbles = new Abschlussarbeit.Bubble();
            movingObjects.push(bubbles);
            b = 0;
        }
        b++;
    }
    //PoisonBubbles aufpoppen lassen
    function popPoisonBubbles() {
        if (p > 50) {
            let poisonBubbles = new Abschlussarbeit.PoisonBubble();
            movingObjects.push(poisonBubbles);
            p = 0;
        }
        p++;
    }
    //Packman
    function drawPackman() {
        for (let i = 0; i < a; i++) {
            //            packman = new Packman("#FFFF00");
            movingObjects.push(packman);
        }
    }
    function moveObjects() {
        for (let i = 0; i < movingObjects.length; i++) {
            movingObjects[i].move();
        }
    }
    function drawObjects() {
        for (let i = 0; i < movingObjects.length; i++) {
            movingObjects[i].draw();
        }
        drawPackman();
        showScore();
    }
    function showScore() {
        Abschlussarbeit.crc2.font = "25px Calibri";
        Abschlussarbeit.crc2.fillStyle = "#000000";
        Abschlussarbeit.crc2.fillText("Punkte: " + score, 5, 25);
    }
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Hauptprogramm.js.map