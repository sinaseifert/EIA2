namespace L11_Inheritance {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let stars: DavidStar[] = [];
    let n: number = 100;

    //let rects: Rect[] = [];

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        canvas.addEventListener("click", insertNewObject);

        for (let i: number = 0; i < n; i++) {
            let star: DavidStar = new DavidStar("#00ffff");
            stars.push(star);

            let rect: Rect = new Rect("#ff0000");
            stars.push(rect);

            let triangle: Dreieck = new Dreieck("#FFA54F");
            stars.push(triangle);

            let circle: Circles = new Circles("#FF1493");
            stars.push(circle);
        }


        animate();
    }

    function insertNewObject(_event: MouseEvent): void {
        let x: number = _event.clientX;
        let y: number = _event.clientY;
        let n: number = Math.floor(Math.random() * 2);

        switch (n) {
            case 0:
                let star: DavidStar = new DavidStar("#ffff00");
                star.x = x;
                star.y = y;
                stars.push(star);
                break;
            case 1:
                let circle: Circles = new Circles("#FF1493");
                circle.x = x;
                circle.y = y;
                stars.push(circle);
                break;
        }
    }

    function animate(): void {
        window.setTimeout(animate, 10);

        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        moveObjects();
        drawObjects();
    }

    function moveObjects(): void {
        for (let i: number = 0; i < stars.length; i++) {
            stars[i].move();
        }
    }

    function drawObjects(): void {
        for (let i: number = 0; i < stars.length; i++) {
            stars[i].draw();
        }
    }
}