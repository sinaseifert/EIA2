var Inheritance;
(function (Inheritance) {
    window.addEventListener("load", init);
    //    let ctx: CanvasRenderingContext2D;
    let movingObjects = [];
    let n;
    let imgData;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Inheritance.crc2 = canvas.getContext("2d");
        Inheritance.ctx = canvas.getContext("2d");
        console.log(Inheritance.crc2);
        canvas.addEventListener("click", insertNewObject);
        let background = new Inheritance.Background;
        background.draw();
        imgData = Inheritance.crc2.getImageData(0, 0, Inheritance.crc2.canvas.height, Inheritance.crc2.canvas.width);
        for (let i = 0; i < n; i++) {
            let fishis = new Inheritance.Fish("#00FFFF");
            movingObjects.push(fishis);
            let bubbles = new Inheritance.Bubble("#BFEFFF");
            movingObjects.push(bubbles);
            let seagrasses = new Inheritance.Seagrass("#54FF9F");
            movingObjects.push(seagrasses);
        }
        animate();
    }
    function insertNewObject(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        let n = Math.floor(Math.random() * 2);
        switch (n) {
            case 0:
                let foods = new Inheritance.Food("#EE7621");
                foods.x = x;
                foods.y = y;
                movingObjects.push(foods);
                break;
        }
    }
    function animate() {
        window.setTimeout(animate, 100);
        Inheritance.crc2.putImageData(imgData, 0, 0);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (let i = 0; i < movingObjects.length; i++) {
            movingObjects[i].move();
        }
    }
    function drawObjects() {
        //Hintergrund
        for (let i = 0; i < movingObjects.length; i++) {
            movingObjects[i].draw();
        }
    }
})(Inheritance || (Inheritance = {}));
//# sourceMappingURL=Animation.js.map