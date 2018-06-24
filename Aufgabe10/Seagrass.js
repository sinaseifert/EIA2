var Animation;
(function (Animation) {
    class Seagrass {
        drawSeaGrass() {
            Animation.crc2.beginPath();
            Animation.crc2.fillStyle = "RGB(" + this.r + "," + this.g + "," + this.b + ")";
            Animation.crc2.moveTo(this.x, this.y);
            Animation.crc2.quadraticCurveTo(this.x - 30, this.y - 150, this.x + 60, this.y - 200);
            Animation.crc2.quadraticCurveTo(this.x - 40, this.y - 150, this.x - 10, this.y);
            Animation.crc2.closePath();
            Animation.crc2.stroke();
            Animation.crc2.fill();
            //kleines Gras
            Animation.crc2.beginPath();
            Animation.crc2.fillStyle = "#2E8B57";
            Animation.crc2.moveTo(this.x, this.y);
            Animation.crc2.quadraticCurveTo(this.x - 60, this.y - 100, this.x + 60, this.y - 120);
            Animation.crc2.quadraticCurveTo(this.x - 50, this.y - 90, this.x + 10, this.y);
            Animation.crc2.closePath();
            Animation.crc2.stroke();
            Animation.crc2.fill();
        }
    }
    Animation.Seagrass = Seagrass;
})(Animation || (Animation = {}));
//# sourceMappingURL=Seagrass.js.map