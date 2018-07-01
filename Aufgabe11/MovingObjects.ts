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
        setRandomPosition(): void {}

        move(): void {}
        
        draw(): void {}


    }
}