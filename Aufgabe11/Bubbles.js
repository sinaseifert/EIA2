var Inheritance;
(function (Inheritance) {
    class Bubble extends Inheritance.MovingObject {
        constructor(_color) {
            super(_color);
        }
        setRandomPosition() {
            this.x = (700);
            this.y = 700 - this.i * 10;
            this.radius = Math.random() * 10;
        }
        //Methode mo    
        move() {
            this.x = 0;
            this.y -= 2;
            if (this.i < Math.random() * 50) {
                this.x = 200;
            }
        }
        draw() {
            Inheritance.ctx.beginPath();
            Inheritance.crc2.fillStyle = "#BFEFFF";
            Inheritance.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            Inheritance.crc2.fill();
        }
    }
    Inheritance.Bubble = Bubble;
})(Inheritance || (Inheritance = {}));
//# sourceMappingURL=Bubbles.js.map