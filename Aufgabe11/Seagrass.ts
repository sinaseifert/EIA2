namespace Inheritance {
    export class Seagrass extends MovingObject {

        constructor(_color: string) {
            super(_color);
        }
        
        setRandomPosition(): void {
            this.x = Math.random() * 600;
            this.y = (Math.random() * 150) + 650;
            this.r = Math.random() * 255;
            this.g = Math.random() * 255;
            this.b = Math.random() * 255;
        }

        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = "RGB(" + this.r + "," + this.g + "," + this.b + ")";
            crc2.moveTo(this.x, this.y);
            crc2.quadraticCurveTo(this.x - 30, this.y - 150, this.x + 60, this.y - 200);
            crc2.quadraticCurveTo(this.x - 40, this.y - 150, this.x - 10, this.y);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            //kleines Gras
            crc2.beginPath();
            crc2.fillStyle = "#2E8B57";
            crc2.moveTo(this.x, this.y);
            crc2.quadraticCurveTo(this.x - 60, this.y - 100, this.x + 60, this.y - 120);
            crc2.quadraticCurveTo(this.x - 50, this.y - 90, this.x + 10, this.y);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
    }
}