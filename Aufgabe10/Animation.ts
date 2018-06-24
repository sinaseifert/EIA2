namespace Animation {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    //    let crc2: CanvasRenderingContext2D;
    export let ctx: CanvasRenderingContext2D;
    //    let ctx: CanvasRenderingContext2D;
    let fishis: Fish[] = [];
    let bubbles: Bubble[] = [];
    let seagrasses: Seagrass[] = [];
    let imgData: ImageData;


    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        ctx = canvas.getContext("2d");
        console.log(crc2);

        //Speichern des Hintergrunds


        //For-Schleife für die Fische
        for (let i: number = 0; i < 50; i++) {
            let fish: Fish = new Fish();
            fish.x = Math.random() * 900;
            fish.y = Math.random() * 600;
            fish.r = Math.random() * 255;
            fish.g = Math.random() * 255;
            fish.b = Math.random() * 255;
            fishis.push(fish);
        }
        //For-Schleife Bubbles
        for (let i: number = 0; i < 70; i++) {
            let bubble: Bubble = new Bubble();
            bubble.x = 700;
            bubble.y = 700 - i * 10; //Math.random() * 700;
            bubble.radius = Math.random() * 10;
            if (i < Math.random() * 50) {
                bubble.x = 200;
            }
            bubbles.push(bubble);
        }

        //For-Schleife Seegras
        for (let i: number = 0; i < 8; i++) {
            let seagrass: Seagrass = new Seagrass();
            seagrass.x = Math.random() * 600;
            seagrass.y = (Math.random() * 150) + 650;
            seagrass.r = Math.random() * 255;
            seagrass.g = Math.random() * 255;
            seagrass.b = Math.random() * 255;
            seagrasses.push(seagrass);
        }
        animate();
    }

    function animate(): void {
        window.setTimeout(animate, 100);
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        moveObjects();
        drawObjects();
    }

    function moveObjects(): void {
        //Fische
        for (let i: number = 0; i < fishis.length; i++) {
            fishis[i].move();
        }
        //Bubbles
        for (let i: number = 0; i < bubbles.length; i++) {
            bubbles[i].moveBubbles();
        }
    }

    function drawObjects(): void {
        //Hintergrund
        let background: Background = new Background;
        background.draw();
        imgData = crc2.getImageData(0, 0, crc2.canvas.height, crc2.canvas.width);
        //Fische
        for (let i: number = 0; i < fishis.length; i++) {
            fishis[i].drawFish();
        }
        //Bubbles
        for (let i: number = 0; i < bubbles.length; i++) {
            bubbles[i].drawBubbles();
        }
        //Seegras
        for (let i: number = 0; i < seagrasses.length; i++) {
            seagrasses[i].drawSeaGrass();
        }
    }
}
