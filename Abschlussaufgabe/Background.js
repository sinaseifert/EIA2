var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Background {
        draw() {
            this.drawAir();
        }
        drawAir() {
            let gradient = Abschlussarbeit.crc2.createLinearGradient(50, 0, 10, 1000);
            gradient.addColorStop(0, "#E0FFFF");
            gradient.addColorStop(1, "#87CEFA");
            Abschlussarbeit.crc2.fillStyle = gradient;
            Abschlussarbeit.crc2.fillRect(0, 0, Abschlussarbeit.crc2.canvas.width, Abschlussarbeit.crc2.canvas.height);
        }
    }
    Abschlussarbeit.Background = Background;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Background.js.map