namespace L09_Canvas {

    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;
    let ctx: CanvasRenderingContext2D;



    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        ctx = canvas.getContext("2d");
        console.log(crc2);


        drawWater();
        drawGround();
        callfunction();
        drawchest(675, 550, 90, 65);


    }
    function callfunction(): void {
        //Mathrandom Fischi
        for (let i: number = 0; i < 50; i++) {
            let r: number = Math.random() * 255;
            let g: number = Math.random() * 255;
            let b: number = Math.random() * 255;
            let x: number = Math.random() * 900;
            let y: number = Math.random() * 600;
            drawFish(x, y, r, g, b);
        }
        //Mathrandom Bubble
        for (let i: number = 0; i < 50; i++) {
            let _x: number = 700;
            let _radius: number = Math.random() * 10;
            let _y: number = Math.random() * 700;
            if (i < Math.random() * 50) {
                _x = 200;
            }
            drawBubble(_x, _y, _radius);
        }

        //Mathrandom Seegras
        for (let i: number = 0; i < Math.random() * 8; i++) {
            let r: number = 0;
            let g: number = Math.random() * 255;
            let b: number = Math.random() * 255;
            let _x: number = Math.random() * 800;
            let _y: number = (Math.random() * 150) + 650;
            seagrass(_x, _y, r, g, b);
        }
    }
    //Wasser
    function drawWater(): void {
        crc2.fillStyle = "#00008B";
        crc2.fillRect(0, 0, 1000, 800);
    }
    //Meeresgrund
    function drawGround(): void {
        crc2.beginPath();
        crc2.fillStyle = "#F4A460";

        crc2.moveTo(0, 625);
        crc2.quadraticCurveTo(60, 650, 500, 600);
        crc2.quadraticCurveTo(675, 600, 1000, 650);
        crc2.quadraticCurveTo(1000, 800, 1000, 800);
        crc2.quadraticCurveTo(1000, 800, 0, 800);
        crc2.quadraticCurveTo(0, 675, 0, 675);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
    //Fische
    function drawFish(_x: number, _y: number, r: number, g: number, b: number): void {
        crc2.beginPath();
        crc2.fillStyle = "RGB(" + r + "," + g + "," + b + ")";
        ctx.moveTo(_x, _y);
        ctx.bezierCurveTo(_x + 30, _y, _x + 30, _y + 20, _x, _y + 20);
        crc2.moveTo(_x, _y + 20);
        crc2.lineTo(_x - 20, _y + 10);
        crc2.lineTo(_x - 25, _y + 15);
        crc2.lineTo(_x - 25, _y);
        crc2.lineTo(_x - 20, _y + 5);
        crc2.lineTo(_x, _y);
        ctx.stroke();
        ctx.fill();
        crc2.closePath();
    }
    //Bubbles
    function drawBubble(_x: number, _y: number, _radius: number): void {
        ctx.beginPath();
        crc2.fillStyle = "#BFEFFF";
        ctx.arc(_x, _y, _radius, 0, 2 * Math.PI);
        crc2.fill();
    }

    //Seegras
    function seagrass(_x: number, _y: number, r: number, g: number, b: number): void {
        crc2.beginPath();
        crc2.fillStyle = "RGB(" + r + "," + g + "," + b + ")";
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x - 30, _y - 150, _x + 60, _y - 200);
        crc2.quadraticCurveTo(_x - 40, _y - 150, _x - 10, _y);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        //kleines Gras
        crc2.beginPath();
        crc2.fillStyle = "#2E8B57";
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x - 60, _y - 100, _x + 60, _y - 120);
        crc2.quadraticCurveTo(_x - 50, _y - 90, _x + 10, _y);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }

    //Schatztruhe
    function drawchest(_x: number, _y: number, _width: number, _height: number): void {
        //Deckel
        crc2.beginPath();
        crc2.fillStyle = "#8B4513";
        crc2.moveTo(_x, _y);
        crc2.bezierCurveTo(_x + 80, _y - 40, _x + 80, _y + 60, _x + 60, _y + 70);
        crc2.fill();
        crc2.closePath();
        crc2.stroke();
        //Kiste
        crc2.beginPath();
        crc2.fillStyle = "#8B4513";
        crc2.moveTo(_x + 40, _y);
        crc2.fillRect(_x - 30, _y + 70, _width, _height);
        crc2.closePath();
        crc2.stroke();




    }

}

    //Seestern
