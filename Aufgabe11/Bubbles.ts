namespace Inheritance {
    export class Bubble extends MovingObject {


        constructor(_color: string) {
            super(_color);
        }

        setRandomPosition(): void {
            this.x = (700);
            this.y = 700 - this.i * 10;
            this.radius = Math.random() * 10;
        }

        //Methode mo    
        move(): void {
            this.x = 0;
            this.y -= 2; 
            if (this.i < Math.random() * 50) {
                this.x = 200;
            }
        }

        draw(): void {
            ctx.beginPath();
            crc2.fillStyle = "#BFEFFF";
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            crc2.fill();
        }
    }
}