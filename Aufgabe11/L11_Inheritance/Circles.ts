namespace L11_Inheritance {
    export class Circles extends DavidStar {

        constructor(_color: string) {
            super(_color);
        }

        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.arc( this.x, this.y, this.radius, 0, 2 * Math.PI );
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
        
    }
}