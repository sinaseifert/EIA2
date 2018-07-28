namespace Abschlussarbeit {
    export class Background {
        draw(): void {
            this.drawAir();
        }

        drawAir(): void {
            let gradient: CanvasGradient = crc2.createLinearGradient(50, 0, 10, 1000);
            gradient.addColorStop(0, "#E0FFFF");
            gradient.addColorStop(1, "#87CEFA");
            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }
    }
}