var Inheritance;
(function (Inheritance) {
    class Background {
        draw() {
            this.drawWater();
            this.drawGround();
            this.drawChest(675, 550, 90, 65);
        }
        //Wasser
        drawWater() {
            Inheritance.crc2.fillStyle = "#00008B";
            Inheritance.crc2.fillRect(0, 0, 1000, 800);
        }
        //Grund
        drawGround() {
            Inheritance.crc2.beginPath();
            Inheritance.crc2.fillStyle = "#F4A460";
            Inheritance.crc2.moveTo(0, 625);
            Inheritance.crc2.quadraticCurveTo(60, 650, 500, 600);
            Inheritance.crc2.quadraticCurveTo(675, 600, 1000, 650);
            Inheritance.crc2.quadraticCurveTo(1000, 800, 1000, 800);
            Inheritance.crc2.quadraticCurveTo(1000, 800, 0, 800);
            Inheritance.crc2.quadraticCurveTo(0, 675, 0, 675);
            Inheritance.crc2.closePath();
            Inheritance.crc2.stroke();
            Inheritance.crc2.fill();
        }
        //Schatztruhe
        drawChest(_x, _y, _width, _height) {
            Inheritance.crc2.beginPath();
            Inheritance.crc2.fillStyle = "#8B4513";
            Inheritance.crc2.moveTo(_x, _y);
            Inheritance.crc2.bezierCurveTo(_x + 80, _y - 40, _x + 80, _y + 60, _x + 60, _y + 70);
            Inheritance.crc2.fill();
            Inheritance.crc2.closePath();
            Inheritance.crc2.stroke();
            //Kiste
            Inheritance.crc2.beginPath();
            Inheritance.crc2.fillStyle = "#8B4513";
            Inheritance.crc2.moveTo(_x + 40, _y);
            Inheritance.crc2.fillRect(_x - 30, _y + 70, _width, _height);
            Inheritance.crc2.closePath();
            Inheritance.crc2.stroke();
        }
    }
    Inheritance.Background = Background;
})(Inheritance || (Inheritance = {}));
//# sourceMappingURL=Background.js.map