namespace Inheritance {
    export class Food extends MovingObject {

        constructor(_color: string) {
            super(_color);
        }

        setRandomPosition(): void {
            this.x = Math.random() * crc2.canvas.width;
            this.y = 0;
            this.radius = Math.random() * 10;
        }

        move(): void {
            this.x += 0;

            if (this.y < 700) {
                this.y += 2;
            }
            else if (this.y >= 700) {
                this.y = 0;
            }
        }
        
        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
    }
}