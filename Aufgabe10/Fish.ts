namespace Animation {
    export class Fish {
        x: number;
        y: number;
        r: number;
        g: number;
        b: number;

        //Methode move
        move(): void {
            this.x += Math.random() * 4;
            this.y += Math.random() * 4;
        }

        //Methode draw
        drawFish(): void {
            crc2.beginPath();
            crc2.fillStyle = "RGB(" + this.r + "," + this.g + "," + this.b + ")";
            ctx.moveTo(this.x, this.y);
            ctx.bezierCurveTo(this.x + 30, this.y, this.x + 30, this.y + 20, this.x, this.y + 20);
            crc2.moveTo(this.x, this.y + 20);
            crc2.lineTo(this.x - 20, this.y + 10);
            crc2.lineTo(this.x - 25, this.y + 15);
            crc2.lineTo(this.x - 25, this.y);
            crc2.lineTo(this.x - 20, this.y + 5);
            crc2.lineTo(this.x, this.y);
            ctx.stroke();
            ctx.fill();
            crc2.closePath();
        }
    }
}