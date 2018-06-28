var L11_Inheritance;
(function (L11_Inheritance) {
    window.addEventListener("load", init);
    let stars = [];
    let n = 100;
    //let rects: Rect[] = [];
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        L11_Inheritance.crc2 = canvas.getContext("2d");
        console.log(L11_Inheritance.crc2);
        canvas.addEventListener("click", insertNewObject);
        for (let i = 0; i < n; i++) {
            let star = new L11_Inheritance.DavidStar("#00ffff");
            stars.push(star);
            let rect = new L11_Inheritance.Rect("#ff0000");
            stars.push(rect);
            let triangle = new L11_Inheritance.Dreieck("#FFA54F");
            stars.push(triangle);
            let circle = new L11_Inheritance.Circles("#FF1493");
            stars.push(circle);
        }
        animate();
    }
    function insertNewObject(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        let n = Math.floor(Math.random() * 2);
        switch (n) {
            case 0:
                let star = new L11_Inheritance.DavidStar("#ffff00");
                star.x = x;
                star.y = y;
                stars.push(star);
                break;
            case 1:
                let circle = new L11_Inheritance.Circles("#FF1493");
                circle.x = x;
                circle.y = y;
                stars.push(circle);
                break;
        }
    }
    function animate() {
        window.setTimeout(animate, 10);
        L11_Inheritance.crc2.clearRect(0, 0, L11_Inheritance.crc2.canvas.width, L11_Inheritance.crc2.canvas.height);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (let i = 0; i < stars.length; i++) {
            stars[i].move();
        }
    }
    function drawObjects() {
        for (let i = 0; i < stars.length; i++) {
            stars[i].draw();
        }
    }
})(L11_Inheritance || (L11_Inheritance = {}));
//# sourceMappingURL=Animation.js.map