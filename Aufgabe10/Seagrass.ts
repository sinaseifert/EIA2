namespace Animation {
    export class Seagrass {
        x: number;
        y: number;
        r: number;
        g: number;
        b: number;

        drawSeaGrass(): void {
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