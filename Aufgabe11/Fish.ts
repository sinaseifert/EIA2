namespace Inheritance {
    export class Fish extends MovingObject {
//        x: number;
//        y: number;
//        r: number;
//        g: number;
//        b: number;
//        color: string;
//        radius: number;
//        i: number;

        constructor (_color: string) {
            super(_color);
        }
        
        setRandomPosition(): void {
            this.x = Math.random() * crc2.canvas.width;
            this.y = Math.random() * crc2.canvas.height;
            this.r = Math.random() * 255;
            this.g = Math.random() * 255;
            this.b = Math.random() * 255;
        }
        
        //Methode move
        move(): void {
//            this.x += Math.random() * 4;
//            this.y += Math.random() * 4;
        }

        //Methode draw
        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
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