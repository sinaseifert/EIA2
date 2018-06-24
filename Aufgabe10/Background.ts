namespace Animation {
    export class Background {
        public draw(): void {
            this.drawWater();
            this.drawGround();
            this.drawChest(675, 550, 90, 65);
        }

        //Wasser
        drawWater(): void {
            crc2.fillStyle = "#00008B";
            crc2.fillRect(0, 0, 1000, 800);
        }

        //Grund
        drawGround(): void {
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

        //Schatztruhe
        drawChest(_x: number, _y: number, _width: number, _height: number): void {
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
}