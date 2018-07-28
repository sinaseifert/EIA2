var Abschlussarbeit;
(function (Abschlussarbeit) {
    class PoisonBubble extends Abschlussarbeit.MovingObject {
        //        constructor(_color: string) {
        //            super(_color);
        constructor() {
            super();
            this.color = "#FF1493";
            this.setRandomPosition();
        }
        setRandomPosition() {
            this.x = Math.random() * Abschlussarbeit.crc2.canvas.width;
            this.y = Math.random() * Abschlussarbeit.crc2.canvas.height;
            this.radius = Math.random() * 10;
        }
        move() {
            this.y -= 1;
            //            if (this.y < 0) {
            //                this.y = 800;
            //            }
        }
        draw() {
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.fillStyle = "#FF1493";
            Abschlussarbeit.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            Abschlussarbeit.crc2.closePath();
            Abschlussarbeit.crc2.stroke();
            Abschlussarbeit.crc2.fill();
        }
    }
    Abschlussarbeit.PoisonBubble = PoisonBubble;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=poisonBubbles.js.map