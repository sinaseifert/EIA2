var Inheritance;
(function (Inheritance) {
    class MovingObject {
        constructor(_color) {
            this.setRandomPosition();
            this.color = _color;
        }
        setRandomPosition() {
            /*this.x = Math.random() * crc2.canvas.width;
            this.y = Math.random() * crc2.canvas.height;
            this.r = Math.random() * 255;
            this.g = Math.random() * 255;
            this.b = Math.random() * 255;*/
        }
        move() {
        }
        draw() {
        }
    }
    Inheritance.MovingObject = MovingObject;
})(Inheritance || (Inheritance = {}));
//# sourceMappingURL=MovingObjects.js.map