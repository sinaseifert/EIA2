namespace Animation {
    export class Bubble {
        x: number;
        y: number;
        radius: number;

        //Methode mo    
        moveBubbles(): void {
            this.y -= 2; //Math.random() * 700;
//            this.radius += 1; //+= Math.random() * 10;
        }

        drawBubbles(): void {
            ctx.beginPath();
            crc2.fillStyle = "#BFEFFF";
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            crc2.fill();
        }
    }
}