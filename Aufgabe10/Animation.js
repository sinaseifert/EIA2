var Animation;
(function (Animation) {
    window.addEventListener("load", init);
    //    let ctx: CanvasRenderingContext2D;
    let fishis = [];
    let bubbles = [];
    let seagrasses = [];
    let imgData;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Animation.crc2 = canvas.getContext("2d");
        Animation.ctx = canvas.getContext("2d");
        console.log(Animation.crc2);
        //Speichern des Hintergrunds
        //For-Schleife f�r die Fische
        for (let i = 0; i < 50; i++) {
            let fish = new Animation.Fish();
            fish.x = Math.random() * 900;
            fish.y = Math.random() * 600;
            fish.r = Math.random() * 255;
            fish.g = Math.random() * 255;
            fish.b = Math.random() * 255;
            fishis.push(fish);
        }
        //For-Schleife Bubbles
        for (let i = 0; i < 70; i++) {
            let bubble = new Animation.Bubble();
            bubble.x = 700;
            bubble.y = 700 - i * 10; //Math.random() * 700;
            bubble.radius = Math.random() * 10;
            if (i < Math.random() * 50) {
                bubble.x = 200;
            }
            bubbles.push(bubble);
        }
        //For-Schleife Seegras
        for (let i = 0; i < 8; i++) {
            let seagrass = new Animation.Seagrass();
            seagrass.x = Math.random() * 600;
            seagrass.y = (Math.random() * 150) + 650;
            seagrass.r = Math.random() * 255;
            seagrass.g = Math.random() * 255;
            seagrass.b = Math.random() * 255;
            seagrasses.push(seagrass);
        }
        animate();
    }
    function animate() {
        window.setTimeout(animate, 100);
        Animation.crc2.clearRect(0, 0, Animation.crc2.canvas.width, Animation.crc2.canvas.height);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        //Fische
        for (let i = 0; i < fishis.length; i++) {
            fishis[i].move();
        }
        //Bubbles
        for (let i = 0; i < bubbles.length; i++) {
            bubbles[i].moveBubbles();
        }
    }
    function drawObjects() {
        //Hintergrund
        let background = new Animation.Background;
        background.draw();
        imgData = Animation.crc2.getImageData(0, 0, Animation.crc2.canvas.height, Animation.crc2.canvas.width);
        //Fische
        for (let i = 0; i < fishis.length; i++) {
            fishis[i].drawFish();
        }
        //Bubbles
        for (let i = 0; i < bubbles.length; i++) {
            bubbles[i].drawBubbles();
        }
        //Seegras
        for (let i = 0; i < seagrasses.length; i++) {
            seagrasses[i].drawSeaGrass();
        }
    }
})(Animation || (Animation = {}));
//# sourceMappingURL=Animation.js.map