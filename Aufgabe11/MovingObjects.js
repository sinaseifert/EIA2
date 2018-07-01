var Inheritance;
(function (Inheritance) {
    class MovingObject {
        constructor(_color) {
            this.setRandomPosition();
            this.color = _color;
        }
        setRandomPosition() { }
        move() { }
        draw() { }
    }
    Inheritance.MovingObject = MovingObject;
})(Inheritance || (Inheritance = {}));
//# sourceMappingURL=MovingObjects.js.map