namespace Abschlussarbeit {
    export class Packman extends MovingObject {
        packmanWidth: number = 25;
        packmanHeight: number = 25;
//        private huntspeed: number = 0.1;
        x: number = 0;
        y: number = 0;

        moveTouch(_a: number, _b: number): void {
            // hunt
//            this.x += this.huntspeed * (_a - this.x);
//            this.y += this.huntspeed * (_b - this.y);
            this.x = _a;
            this.y = _b;
        }

        moveRight(): void {
            if (this.x + this.packmanWidth < crc2.canvas.width) {
                this.x += 10;
            }
        }

        moveLeft(): void {
            if (this.x + this.packmanWidth > this.packmanWidth * 2) {
                this.x -= 10;
            }
        }

        moveUp(): void {
            if (this.y + this.packmanHeight > this.packmanHeight * 2) {
                this.y -= 10;
            }
        }

        moveDown(): void {
            if (this.y + this.packmanHeight < crc2.canvas.height) {
                this.y += 10;
            }
        }

        draw(): void {
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y, 25, 0.25 * Math.PI, 1.25 * Math.PI, false);
            crc2.fillStyle = "#FFFF00";
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y, 25, 0.75 * Math.PI, 1.75 * Math.PI, false);
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y - 14, 7, 0, 2 * Math.PI, false);
            crc2.fillStyle = "#000000";
            crc2.fill();
        }

        checkIfInside(_x: number, _y: number): boolean {
            if (_x > this.x && _x < (this.x + this.packmanWidth) && _y > this.y && _y < (this.y + this.packmanHeight)) {
                return true;
            }
            return false;
        }
    }
}