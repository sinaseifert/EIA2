var Inheritance;
(function (Inheritance) {
    class Fish extends Inheritance.MovingObject {
        //        x: number;
        //        y: number;
        //        r: number;
        //        g: number;
        //        b: number;
        //        color: string;
        //        radius: number;
        //        i: number;
        constructor(_color) {
            super(_color);
        }
        setRandomPosition() {
            this.x = Math.random() * Inheritance.crc2.canvas.width;
            this.y = Math.random() * Inheritance.crc2.canvas.height;
            this.r = Math.random() * 255;
            this.g = Math.random() * 255;
            this.b = Math.random() * 255;
        }
        //Methode move
        move() {
            this.x += 4;
            if (this.x >= 1050) {
                this.x = -40;
            }
            this.y += 2;
        }
        //Methode draw
        draw() {
            Inheritance.crc2.beginPath();
            Inheritance.crc2.fillStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
            Inheritance.crc2.moveTo(this.x, this.y);
            Inheritance.crc2.bezierCurveTo(this.x + 30, this.y, this.x + 30, this.y + 20, this.x, this.y + 20);
            Inheritance.crc2.moveTo(this.x, this.y + 20);
            Inheritance.crc2.lineTo(this.x - 20, this.y + 10);
            Inheritance.crc2.lineTo(this.x - 25, this.y + 15);
            Inheritance.crc2.lineTo(this.x - 25, this.y);
            Inheritance.crc2.lineTo(this.x - 20, this.y + 5);
            Inheritance.crc2.lineTo(this.x, this.y);
            Inheritance.crc2.stroke();
            Inheritance.crc2.fill();
            Inheritance.crc2.closePath();
        }
    }
    Inheritance.Fish = Fish;
})(Inheritance || (Inheritance = {}));
//# sourceMappingURL=Fish.js.map