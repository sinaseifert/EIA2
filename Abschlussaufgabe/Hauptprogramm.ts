namespace Abschlussarbeit {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;

    let movingObjects: MovingObject[] = [];
    let a: number = 1; //Packman
    let b: number = 31; //Bubbles
    let p: number = 31; //PoisonBubbles
    let imgData: ImageData;
    let packman: Packman = new Packman();
    packman.x = 100;
    packman.y = 100;

    //Punkte
    let score: number = 0;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        document.addEventListener("keydown", movePackman); 
        document.addEventListener("touchstart", touchToMovePackman);
        document.addEventListener("touchmove", touchToMovePackman);
        document.addEventListener("touchend", touchToMovePackman);
        _event.preventDefault();
//        document.addEventListener("resize", resize);

        let background: Background = new Background;
        background.draw();
        imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);


        animate();
        resize();
    }
    //Spielbereich auf Bildschirmbreite anpassen
    function resize(): void {
        crc2.canvas.style.width = "100%";
        crc2.canvas.style.height = "100%";
    } 
    function movePackman(_event: KeyboardEvent): void {
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
    function touchToMovePackman(_event: TouchEvent): void {
        packman.moveTouch(_event.changedTouches[0].clientX, _event.changedTouches[0].clientY);
    }

    function animate(): void {
        window.setTimeout(animate, 10);
        crc2.putImageData(imgData, 0, 0);

        moveObjects();
        drawObjects();
        popBubbles();
        popPoisonBubbles();
        checkBubblePosition();
    }

    function checkBubblePosition(): void {
        for (let i: number = 0; i < movingObjects.length; i++) {
            let bubbles: Bubble = movingObjects[i];
            let inside: boolean = packman.checkIfInside(bubbles.x, bubbles.y);

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
    function popBubbles(): void {
        if (b > 30) {
            let bubbles: Bubble = new Bubble();
            movingObjects.push(bubbles);
            b = 0;
        }
        b++;
    }

    //PoisonBubbles aufpoppen lassen
    function popPoisonBubbles(): void {
        if (p > 50) {
            let poisonBubbles: PoisonBubble = new PoisonBubble();
            movingObjects.push(poisonBubbles);
            p = 0;
        }
        p++;
    }

    //Packman
    function drawPackman(): void {
        for (let i: number = 0; i < a; i++) {
            //            packman = new Packman("#FFFF00");
            movingObjects.push(packman);
        }
    }
    function moveObjects(): void {
        for (let i: number = 0; i < movingObjects.length; i++) {
            movingObjects[i].move();
        }
    }

    function drawObjects(): void {
        for (let i: number = 0; i < movingObjects.length; i++) {
            movingObjects[i].draw();
        }
        drawPackman();
        showScore();
    }

    function showScore(): void {
        crc2.font = "25px Calibri";
        crc2.fillStyle = "#000000";
        crc2.fillText("Punkte: " + score, 5, 25);
    }
}