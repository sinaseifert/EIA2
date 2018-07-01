namespace Inheritance {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    //export let ctx: CanvasRenderingContext2D;
    let movingObjects: MovingObject[] = [];
    let n: number = 100;
    let m: number = 7;
    let imgData: ImageData;


    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        //ctx = canvas.getContext("2d");
        console.log(crc2);

        canvas.addEventListener("click", insertNewObject);

        let background: Background = new Background;
        background.draw();
        imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);

        for (let i: number = 0; i < n; i++) {
            let fishis: Fish = new Fish("#00FFFF");
            movingObjects.push(fishis);

            let bubbles: Bubble = new Bubble("#BFEFFF");
            movingObjects.push(bubbles);
        }
        for (let i: number = 0; i < m; i++) {

            let seagrasses: Seagrass = new Seagrass("#54FF9F");
            movingObjects.push(seagrasses);
        }
        animate();
    }

    function insertNewObject(_event: MouseEvent): void {
        let x: number = _event.clientX;
        let y: number = _event.clientY;
        let n: number = Math.floor(Math.random() * 2);

        switch (n) {
            case 0:
                let foods: Food = new Food("#EE7621");
                foods.x = x;
                foods.y = y;
                movingObjects.push(foods);
                break;
        }
    }

    function animate(): void {
        window.setTimeout(animate, 100);
        crc2.putImageData(imgData, 0, 0);

        moveObjects();
        drawObjects();
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
    }
}