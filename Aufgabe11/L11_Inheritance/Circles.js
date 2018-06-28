var L11_Inheritance;
(function (L11_Inheritance) {
    class Circles extends L11_Inheritance.DavidStar {
        constructor(_color) {
            super(_color);
        }
        draw() {
            L11_Inheritance.crc2.beginPath();
            L11_Inheritance.crc2.fillStyle = this.color;
            L11_Inheritance.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            L11_Inheritance.crc2.closePath();
            L11_Inheritance.crc2.stroke();
            L11_Inheritance.crc2.fill();
        }
    }
    L11_Inheritance.Circles = Circles;
})(L11_Inheritance || (L11_Inheritance = {}));
//# sourceMappingURL=Circles.js.map