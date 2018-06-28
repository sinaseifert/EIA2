namespace Inheritance {
    export class MovingObject {
        x: number;
        y: number;
        r: number;
        g: number;
        b: number;
        color: string;
        radius: number;
        i: number;


        constructor(_color: string) {
            this.setRandomPosition();
            this.color = _color;
        }
        setRandomPosition(): void {
            /*this.x = Math.random() * crc2.canvas.width;
            this.y = Math.random() * crc2.canvas.height;
            this.r = Math.random() * 255;
            this.g = Math.random() * 255;
            this.b = Math.random() * 255;*/
        }

        move(): void {
        }
        
        draw(): void {
        }


    }
}