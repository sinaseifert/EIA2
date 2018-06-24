var Animation;
(function (Animation) {
    class Background {
        draw() {
            this.drawWater();
            this.drawGround();
            this.drawChest(675, 550, 90, 65);
        }
        //Wasser
        drawWater() {
            Animation.crc2.fillStyle = "#00008B";
            Animation.crc2.fillRect(0, 0, 1000, 800);
        }
        //Grund
        drawGround() {
            Animation.crc2.beginPath();
            Animation.crc2.fillStyle = "#F4A460";
            Animation.crc2.moveTo(0, 625);
            Animation.crc2.quadraticCurveTo(60, 650, 500, 600);
            Animation.crc2.quadraticCurveTo(675, 600, 1000, 650);
            Animation.crc2.quadraticCurveTo(1000, 800, 1000, 800);
            Animation.crc2.quadraticCurveTo(1000, 800, 0, 800);
            Animation.crc2.quadraticCurveTo(0, 675, 0, 675);
            Animation.crc2.closePath();
            Animation.crc2.stroke();
            Animation.crc2.fill();
        }
        //Schatztruhe
        drawChest(_x, _y, _width, _height) {
            Animation.crc2.beginPath();
            Animation.crc2.fillStyle = "#8B4513";
            Animation.crc2.moveTo(_x, _y);
            Animation.crc2.bezierCurveTo(_x + 80, _y - 40, _x + 80, _y + 60, _x + 60, _y + 70);
            Animation.crc2.fill();
            Animation.crc2.closePath();
            Animation.crc2.stroke();
            //Kiste
            Animation.crc2.beginPath();
            Animation.crc2.fillStyle = "#8B4513";
            Animation.crc2.moveTo(_x + 40, _y);
            Animation.crc2.fillRect(_x - 30, _y + 70, _width, _height);
            Animation.crc2.closePath();
            Animation.crc2.stroke();
        }
    }
    Animation.Background = Background;
})(Animation || (Animation = {}));
//# sourceMappingURL=Background.js.map