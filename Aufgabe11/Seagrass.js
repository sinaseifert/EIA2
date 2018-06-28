var Inheritance;
(function (Inheritance) {
    class Seagrass extends Inheritance.MovingObject {
        constructor(_color) {
            super(_color);
        }
        setRandomPosition() {
            this.x = Math.random() * 600;
            this.y = (Math.random() * 150) + 650;
            this.r = Math.random() * 255;
            this.g = Math.random() * 255;
            this.b = Math.random() * 255;
        }
        draw() {
            Inheritance.crc2.beginPath();
            Inheritance.crc2.fillStyle = "RGB(" + this.r + "," + this.g + "," + this.b + ")";
            Inheritance.crc2.moveTo(this.x, this.y);
            Inheritance.crc2.quadraticCurveTo(this.x - 30, this.y - 150, this.x + 60, this.y - 200);
            Inheritance.crc2.quadraticCurveTo(this.x - 40, this.y - 150, this.x - 10, this.y);
            Inheritance.crc2.closePath();
            Inheritance.crc2.stroke();
            Inheritance.crc2.fill();
            //kleines Gras
            Inheritance.crc2.beginPath();
            Inheritance.crc2.fillStyle = "#2E8B57";
            Inheritance.crc2.moveTo(this.x, this.y);
            Inheritance.crc2.quadraticCurveTo(this.x - 60, this.y - 100, this.x + 60, this.y - 120);
            Inheritance.crc2.quadraticCurveTo(this.x - 50, this.y - 90, this.x + 10, this.y);
            Inheritance.crc2.closePath();
            Inheritance.crc2.stroke();
            Inheritance.crc2.fill();
        }
    }
    Inheritance.Seagrass = Seagrass;
})(Inheritance || (Inheritance = {}));
//# sourceMappingURL=Seagrass.js.map