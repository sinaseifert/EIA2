var Inheritance;
(function (Inheritance) {
    class Food extends Inheritance.Fish {
        constructor(_color) {
            super(_color);
        }
        setRandomPosition() {
            this.x = Math.random() * Inheritance.crc2.canvas.width;
            this.y = 0;
            this.radius = Math.random() * 10;
        }
        move() {
            this.x += 0;
            if (this.y < 700) {
                this.y += 2;
            }
            else if (this.y >= 700) {
                this.y = 0;
            }
        }
        draw() {
            Inheritance.crc2.beginPath();
            Inheritance.crc2.fillStyle = this.color;
            Inheritance.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            Inheritance.crc2.closePath();
            Inheritance.crc2.stroke();
            Inheritance.crc2.fill();
        }
    }
    Inheritance.Food = Food;
})(Inheritance || (Inheritance = {}));
//# sourceMappingURL=Food.js.map