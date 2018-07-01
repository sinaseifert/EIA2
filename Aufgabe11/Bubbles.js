var Inheritance;
(function (Inheritance) {
    class Bubble extends Inheritance.MovingObject {
        constructor(_color) {
            super(_color);
        }
        setRandomPosition() {
            this.x = (700);
            this.y = Math.random() * 625;
            this.radius = Math.random() * 10;
        }
        //Methode mo    
        move() {
            this.y -= 2;
            if (this.y < 0) {
                this.y = 625;
            }
        }
        draw() {
            Inheritance.crc2.beginPath();
            Inheritance.crc2.fillStyle = "#BFEFFF";
            Inheritance.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            Inheritance.crc2.closePath();
            Inheritance.crc2.stroke();
            Inheritance.crc2.fill();
        }
    }
    Inheritance.Bubble = Bubble;
})(Inheritance || (Inheritance = {}));
//# sourceMappingURL=Bubbles.js.map