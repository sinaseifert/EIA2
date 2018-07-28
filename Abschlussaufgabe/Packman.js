var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Packman extends Abschlussarbeit.MovingObject {
        constructor(...args) {
            super(...args);
            this.packmanWidth = 25;
            this.packmanHeight = 25;
            this.huntspeed = 0.1;
            this.x = 0;
            this.y = 0;
        }
        moveTouch(_x, _y) {
            // hunt
            this.x += this.huntspeed * (_x - this.x);
            this.y += this.huntspeed * (_y - this.y);
        }
        moveRight() {
            if (this.x + this.packmanWidth < Abschlussarbeit.crc2.canvas.width) {
                this.x += 10;
            }
        }
        moveLeft() {
            if (this.x + this.packmanWidth > this.packmanWidth * 2) {
                this.x -= 10;
            }
        }
        moveUp() {
            if (this.y + this.packmanHeight > this.packmanHeight * 2) {
                this.y -= 10;
            }
        }
        moveDown() {
            if (this.y + this.packmanHeight < Abschlussarbeit.crc2.canvas.height) {
                this.y += 10;
            }
        }
        draw() {
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.moveTo(this.x, this.y);
            Abschlussarbeit.crc2.arc(this.x, this.y, 25, 0.25 * Math.PI, 1.25 * Math.PI, false);
            Abschlussarbeit.crc2.fillStyle = "#FFFF00";
            Abschlussarbeit.crc2.fill();
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.moveTo(this.x, this.y);
            Abschlussarbeit.crc2.arc(this.x, this.y, 25, 0.75 * Math.PI, 1.75 * Math.PI, false);
            Abschlussarbeit.crc2.fill();
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.moveTo(this.x, this.y);
            Abschlussarbeit.crc2.arc(this.x, this.y - 14, 7, 0, 2 * Math.PI, false);
            Abschlussarbeit.crc2.fillStyle = "#000000";
            Abschlussarbeit.crc2.fill();
        }
        checkIfInside(_x, _y) {
            if (_x > this.x && _x < (this.x + this.packmanWidth) && _y > this.y && _y < (this.y + this.packmanHeight)) {
                return true;
            }
            return false;
        }
    }
    Abschlussarbeit.Packman = Packman;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Packman.js.map