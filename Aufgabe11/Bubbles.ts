namespace Inheritance {
    export class Bubble extends MovingObject {


        constructor(_color: string) {
            super(_color);
        }

        setRandomPosition(): void {
            this.x = (700);
            this.y = Math.random() * 625;
            this.radius = Math.random() * 10;
        }

        //Methode mo    
        move(): void {
            this.y -= 2;
            if (this.y < 0) {
                this.y = 625;
            }
        }

        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = "#BFEFFF";
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
    }
}