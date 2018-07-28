namespace Abschlussarbeit {
    export class PoisonBubble extends MovingObject {
        //        constructor(_color: string) {
        //            super(_color);
        constructor() {
            super();
            this.color = "#FF1493";
            this.setRandomPosition();
        }
        setRandomPosition(): void {
            this.x = Math.random() * crc2.canvas.width;
            this.y = Math.random() * crc2.canvas.height;
            this.radius = Math.random() * 10;
        }

        move(): void {
            this.y -= 1;
//            if (this.y < 0) {
//                this.y = 800;
//            }
        }

        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = "#FF1493";
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
    }
}