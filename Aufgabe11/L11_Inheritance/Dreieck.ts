namespace L11_Inheritance {
    export class Dreieck extends DavidStar {

        constructor(_color: string) {
            super(_color);
        }

        move(): void {
            this.x += 2;
            this.y += 0;

            if (this.x > 500) {
                this.x = -40;
            }
        }
        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.moveTo(this.x, this.y - 20);
            crc2.lineTo(this.x + 20, this.y + 10);
            crc2.lineTo(this.x - 20, this.y + 10);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
    }
}